import {} from "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
import _ from 'lodash';
import nodemailer from 'nodemailer';
import {
    reservationEmail,
    reservationEmailFull
} from './emailTemplate.js';
import moment from 'moment';
import sgMail from '@sendgrid/mail';

// These lines make "require" available
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const app = express();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const siteURL = "https://www.example.com/";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

// Connect to Mongo DB
mongoose.connect("mongodb+srv://" + dbUsername + ":" + dbPassword + "@cluster0.q10cz.mongodb.net/rayskitchen", {
    useNewUrlParser: true
}); // Connect to cloud DB

const reservationSchema = new mongoose.Schema({
    customerName: String,
    reservationNumber: String,
    foodItems: [String],
    persons: String,
    date: String,
    time: String,
    emailAddress: String
});

const Item = mongoose.model("Item", reservationSchema);

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

var reservationData = {
    "foodItems": ""
};



// home route
app.get("/", function (req, res) {
    const reservationDates = [];
    Item.find({}, function (err, result) {
        result.forEach((item) => {
            const thisDate = moment(item.date, 'DD/MM/YYYY').format("MM/DD/YYYY");
            reservationDates.push(thisDate);
        });
        res.render("home", {
            Dates: reservationDates
        });
    });
});

app.get("/reservation", function (req, res) {
    res.render("reservation");
});

app.get("/myreservations", function (req, res) {
    res.render("myreservations");
});

app.get("/completed", function (req, res) {
    res.render("confirmation", {
        info: reservationData
    });
});

app.post("/", function (req, res) {
    const rString = randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const customerData = {
        "customerName": req.body.name,
        "reservationNumber": rString,
        "persons": req.body.activities,
        "date": req.body.date,
        "time": req.body.time,
        "emailAddress": req.body.email
    }
    reservationData = {
        ...customerData
    };
    res.redirect("/reservation");
});

app.post("/reservation", function (req, res) {
    const foood = (req.body.data).split(",");
    reservationData.foodItems = foood;
    const newReservationnewReservation = new Item({
        ...reservationData
    });

    newReservationnewReservation.save();
    sendEmail(reservationData.emailAddress); // send email
    res.redirect("/completed"); // redirect user to the completed page
});


// Send email via Sendgrid API
function sendEmail(userEmail) {
    const {
        customerName,
        reservationNumber,
        persons,
        date,
        time,
        emailAddress
    } = reservationData;
    const output = reservationEmailFull(customerName, reservationNumber, persons, date, time, emailAddress);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: userEmail,
        bcc: process.env.SENDGRID_EMAIL_BCC,
        from: process.env.SENDGRID_EMAIL_FROM,
        subject: `Your reservation is confirmed! (${date})`,
        html: output,
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}


// Listening ports
let port = process.env.PORT; // Environment port
app.listen(port, function () {
    console.log("Server started successfully on port " + port);
});