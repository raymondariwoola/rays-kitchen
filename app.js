// all .js and .mjs files are interpreted as ES modules
import {} from "dotenv/config";
import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"
import mongoose from "mongoose"
import _ from 'lodash';

const app = express();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


// Connect to Mongo DB
mongoose.connect("mongodb+srv://" + dbUsername + ":" + dbPassword + "@cluster0.q10cz.mongodb.net/rayskitchen", {
    useNewUrlParser: true
}); // Connect to cloud DB

// 1 -- Create Schema
const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"]
    }
});

// 2 -- Create Model
const Item = mongoose.model("Item", itemsSchema);

// 3 -- Prepare Items to store in DB
const brush = new Item({
    name: "Brush Teeth"
});

const bath = new Item({
    name: "Take a bath"
});

const exercise = new Item({
    name: "Go do some workout"
});

// 4 Add items to an array
const defaultItems = [brush, bath, exercise];

// 5 insert array of items into database
function addItem() {
    Item.insertMany(defaultItems, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Items added successfully");
        }
    });
}


// Delete Item from database based on provided ID
function deleteItemFromDB(itemID) {
    Item.deleteOne({
        _id: itemID
    }, function (err) { //"Item" is the model name, "itemID" is the condition/search criteria 
        if (err) {
            console.log(err);
        } else {
            console.log("Deleted successfully");
        }
    });
}

// find item by ID and remove from Database
function removeFromDB(itemID) {
    Item.findByIdAndRemove(itemID, function (err) { //"Item" is the model name, "itemID" is the condition/search criteria 
        if (err) {
            console.log(err);
        } else {
            console.log("Item Removed");
        }
    })
}

// New List schema
const listSchema = {
    name: String,
    items: [itemsSchema]
}

// List model
const List = mongoose.model("list", listSchema);


// home route
app.get("/", function (req, res) {
    res.render("home");
});


app.post("/", function (req, res) {
    res.render("reservation");
});


app.post("/reservation", function (req, res) {
    const itemName = req.body.newItem; // Get value entered by user
    const listName = req.body.list; // Get list name where value should be added to

    const newItem = new Item({ // Create new item
        name: itemName
    });

    if (listName === "Today") { // if listname equals "Today" (default route), then route customer to home route
        newItem.save(); // insert 1 item to database
        res.redirect("/"); // redirect back to home route and render result
        console.log("Item added successfully");
    } else { // if listname is dynamic, find the name in database, add the new item and redirect back to same page
        List.findOne({
            name: listName
        }, function (err, foundList) {
            foundList.items.push(newItem); // Push newItem into foundList Array
            foundList.save(); // Save the new array into DB
            res.redirect("/" + listName); // Route user back to same page as listName
        });
    }
});


app.post("/delete", function (req, res) {
    const deleteItemID = req.body.deleteThis; // Get ID of Item to be deleted
    const listName = req.body.listName; // Get list name fo where the item is currently located
    console.log(deleteItemID);
    console.log(listName);

    if (listName === "Today") {
        // deleteItemFromDB(deleteItemID); // Call function to remove item from database
        removeFromDB(deleteItemID); // Call function to find and remove item from database
        res.redirect("/"); // redirect back to home route and render result  
    } else {
        List.findOneAndUpdate({
            name: listName
        }, {
            $pull: {
                items: {
                    _id: deleteItemID
                }
            }
        }, function (err, results) {
            if (!err) {
                res.redirect("/" + listName); // Route user back to same page as listName
            }
        });
    }
});



// // Dynamic Route parameters based on path. below path starts at "/".
// app.get("/:customListName", function (req, res) {
//     const customListName = _.capitalize(req.params.customListName);

//     //"List" is the model name, "customListName" is the condition/search criteria
//     List.find({
//         name: customListName
//     }, function (err, foundResults) {
//         if (!err) { // if no error then proceed with the below operation
//             if (foundResults.length == 0) { // if result is empty (Not found in DB), then add as new
//                 const list = new List({
//                     name: customListName,
//                     items: defaultItems
//                 });
//                 list.save(); // save the new list
//                 console.log("Not Found...\nNewly Added");
//                 res.redirect("/" + customListName);
//             } else { // if name already in DB, render existing item
//                 console.log("Found");
//                 res.render("list", {
//                     listTitle: foundResults[0].name,
//                     newListItems: foundResults[0].items
//                 });
//             }
//         }
//     });
// });


// handles about routes
app.get("/about", function (req, res) {
    res.render("about");
});

// Listening ports
let port = process.env.PORT; // Environment port

// if (port == null || port == "") {
//     port = 3000; // preferred port to open locally
// }

app.listen(port, function () {
    console.log("Server started successfully on port " + port);
});