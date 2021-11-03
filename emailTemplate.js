const newsLetterEmail = (clientName) => `<p>Hi ${clientName}, here you have today news.</p>`
const welcomeEmail = (clientName, username) => `<p>Welcome ${clientName}, your username is ${username}.</p>`
const reservationEmail = (clientName, reservationNumber, persons, date, time, emailAddress) => `<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
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
	<p style="font-size:15px;">Table for ${persons} on ${date} at ${time}</p>
	<br>
	<p style="margin: 0; font-size: 14px; text-align: left ;">
		<strong><span style="font-size:15px;">Name: </span>${clientName}</strong>
	</p>
	<br>
	<p style="margin: 0; font-size: 14px; text-align: left;">
		<strong><span style="font-size:15px;">Reservation # : </span>${reservationNumber}</strong>
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
</div>`

export {newsLetterEmail, welcomeEmail, reservationEmail}