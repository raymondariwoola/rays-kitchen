// all .js and .mjs files are interpreted as ES modules
import {} from "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
import _ from 'lodash';
import nodemailer from 'nodemailer';
import {reservationEmail,reservationEmailFull} from './emailTemplate.js';
import moment from 'moment';
import http from 'http';
import {
    createRequire
} from "module";
const require = createRequire(
    import.meta.url);

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = require('twilio')(accountSid, authToken, {
    lazyLoading: true
});

const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const siteURL = "https://www.example.com/";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 465,
    service: 'sendgrid',
    secure: false,
    auth: {
        user: process.env.MAILUSERNAME,
        pass: process.env.MAILPASSWORD
    },
    debug: false,
    logger: true
});


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

function sendSMS() {
    client.messages
        .create({
            body: 'SMS sample',
            from: '+17272953629',
            to: '+971527037359'
        })
        .then(message => console.log(message.sid));
}


// home route
app.get("/", function (req, res) {
    // sendSMS();
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

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('SMS received');

    res.writeHead(200, {
        'Content-Type': 'text/xml'
    });
    res.end(twiml.toString());
});


function sendEmail(userEmail) {
    const registerUser = async (req, res) => {
        const {
            customerName,
            reservationNumber,
            persons,
            date,
            time,
            emailAddress
        } = reservationData;

        const output = reservationEmailFull(customerName, reservationNumber, persons, date, time, emailAddress);

        let mailOptions = {
            from: 'raymondariwoola@gmail.com',
            to: userEmail,
            subject: 'Your reservation is confirmed!',
            text: 'Hello World',
            html: output,
        }

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}


http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});

// Listening ports
let port = process.env.PORT; // Environment port
app.listen(port, function () {
    console.log("Server started successfully on port " + port);
});