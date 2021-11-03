// all .js and .mjs files are interpreted as ES modules
import {} from "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import mongoose from "mongoose";
import _ from 'lodash';
import nodemailer from 'nodemailer';

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
    persons: Number,
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
    res.render("home");
});

app.get("/reservation", function (req, res) {
    res.render("reservation");
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



function sendEmail(userEmail) {
    const context = reservationData;

    const mailOptions = {
        from: 'raymondariwoola@gmail.com',
        to: userEmail,
        subject: 'Your reservation is confirmed',
        html: ''
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
const emailDocument = `<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
<style>
	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
	}

	h1 {
		padding: 30px 20px;
		text-decoration: underline;
	}

	.container {
		max-width: 500px;
		    padding: 20px;
	}
</style>

<div class="container">
	<h1 style="font-size:30px;"><strong>Your reservation is confirmed</strong></h1>
	<br>
	<span style="font-size:22px;">Ray's Kitchen</span>
	<br>
	<p style="font-size:15px;">Table for 2 on Saturday, July 18, 2020 at 7:00 pm</p>
	<br>
	<p style="margin: 0; font-size: 14px; text-align: left ;">
		<strong><span style="font-size:15px;">Name:</span></strong>
	</p>
	<br>
	<p style="margin: 0; font-size: 14px; text-align: left;">
		<strong><span style="font-size:15px;">Confirmation # :</span></strong>
	</p>
	<br>

	<div style="padding-top:15px;padding-bottom:20px;">
		<div style="font-family: Arial, sans-serif">
			<div
				style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
				<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
					<span style="font-size:15px;">Apartment number 407,</span>
				</p>
				<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
					<span style="font-size:15px;">City Tower Block B1.</span>
				</p>
				<p style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
					<span style="font-size:15px;">Ajman, UAE.</span>
				</p>
			</div>
		</div>
	</div>
</div>`;



// Listening ports
let port = process.env.PORT; // Environment port
app.listen(port, function () {
    console.log("Server started successfully on port " + port);
});