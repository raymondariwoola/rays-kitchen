const imageUrl = "https://rays-kitchen.herokuapp.com/";
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
</div>`;


const reservationEmailFull = (clientName, reservationNumber, persons, date, time, emailAddress) => `<!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">

<head>
	<title></title>
	<meta charset="utf-8" />
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />
	<!--<![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		th.column {
			padding: 0
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		@media (max-width:660px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.image_block img.big {
				width: auto !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}
		}
	</style>
</head>

<body style="background-color: #eceff4; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation"
		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #eceff4;" width="100%">
		<tbody>
			<tr>
				<td>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td style="width:100%;padding-right:0px;padding-left:0px;">
																<div align="center" style="line-height:10px"><img
																		alt="Alternate text" class="big"
																		src="https://rays-kitchen.herokuapp.com/images/kitchen-BG.jpg"
																		style="display: block; height: auto; border: 0; width: 640px; max-width: 100%;"
																		title="Alternate text" width="640" /></div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-left:25px;padding-right:25px;padding-top:40px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:30px;"><strong>Your
																					reservation is
																					confirmed</strong></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:25px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:22px;">Ray's
																				Kitchen</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-left:25px;padding-right:25px;padding-top:5px;padding-bottom:35px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:15px;">Table for
																				${persons} on ${date} at ${time}</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: right;">
																			<strong><span style="font-size:15px;">Name
																					:</span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left;">
																			<span style="font-size:15px;">${clientName}</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content"
										role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: right;">
																			<strong><span
																					style="font-size:15px;">Confirmation
																					# :</span></strong></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;">
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: left;">
																			<span
																				style="font-size:15px;">${reservationNumber}</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<div class="spacer_block"
														style="height:35px;line-height:35px;font-size:1px;"> </div>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="25%">
													<div class="spacer_block"
														style="height:30px;line-height:5px;font-size:1px;"> </div>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; background-color: #f1f2f6; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td
																style="width:100%;padding-right:0px;padding-left:0px;padding-top:20px;">
																<div align="center" style="line-height:10px"><img
																		alt="map"
																		src="https://rays-kitchen.herokuapp.com/images/map-pin.png"
																		style="display: block; height: auto; border: 0; width: 17px; max-width: 100%;"
																		title="Location" width="17" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td style="padding-top:15px;padding-bottom:20px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
																			<span style="font-size:15px;">Apartment
																				number 407,</span></p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
																			<span style="font-size:15px;">City Tower
																				Block B1.</span></p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center; mso-line-height-alt: 22.5px;">
																			<span style="font-size:15px;">Ajman,
																				UAE.</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="25%">
													<div class="spacer_block"
														style="height:30px;line-height:5px;font-size:1px;"> </div>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:50px;text-align:center;">
																<div align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://rays-kitchen.herokuapp.com/myreservations" style="height:42px;width:226px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#da3743"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
																		href="https://rays-kitchen.herokuapp.com/myreservations"
																		style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#da3743;border-radius:4px;width:auto;border-top:1px solid #da3743;border-right:1px solid #da3743;border-bottom:1px solid #da3743;border-left:1px solid #da3743;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
																		target="_blank"><span
																			style="padding-left:45px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
																				style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Modify
																				Reservation</span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:50px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:center;">
																<div align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://rays-kitchen.herokuapp.com/myreservations" style="height:44px;width:233px;v-text-anchor:middle;" arcsize="10%" strokeweight="0.75pt" strokecolor="#DA3743" fill="false"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#da3743; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
																		href="https://rays-kitchen.herokuapp.com/myreservations"
																		style="text-decoration:none;display:inline-block;color:#da3743;background-color:transparent;border-radius:4px;width:auto;border-top:1px solid #DA3743;border-right:1px solid #DA3743;border-bottom:1px solid #DA3743;border-left:1px solid #DA3743;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
																		target="_blank"><span
																			style="padding-left:45px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
																				style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">Cancel
																				Reservation</span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 0px; padding-bottom: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-left:25px;padding-right:25px;padding-bottom:20px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:30px;"><strong>Coming
																					soon to the Menu</strong></span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="20" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<div align="center" style="line-height:10px"><img
																		alt="Menu item" src="https://rays-kitchen.herokuapp.com/images/menu-toast.png"
																		style="display: block; height: auto; border: 0; width: 280px; max-width: 100%;"
																		title="Menu item" width="280" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td>
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Avocado
																			</span></p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Toast</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="20" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<div align="center" style="line-height:10px"><img
																		alt="Menu item" src="https://rays-kitchen.herokuapp.com/images/menu-panini.png"
																		style="display: block; height: auto; border: 0; width: 280px; max-width: 100%;"
																		title="Menu item" width="280" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td>
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Signature
																			</span></p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Panini</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-10"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="20" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<div align="center" style="line-height:10px"><img
																		alt="Alternate text"
																		src="https://rays-kitchen.herokuapp.com/images/menu-cocktail_1.png"
																		style="display: block; height: auto; border: 0; width: 280px; max-width: 100%;"
																		title="Alternate text" width="280" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td>
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Summer </span>
																		</p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span
																				style="font-size:24px;">Cocktail</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="50%">
													<table border="0" cellpadding="20" cellspacing="0"
														class="image_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<div align="center" style="line-height:10px"><img
																		alt="Menu item" src="https://rays-kitchen.herokuapp.com/images/menu-pie.png"
																		style="display: block; height: auto; border: 0; width: 280px; max-width: 100%;"
																		title="Menu item" width="280" /></div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td>
																<div style="font-family: sans-serif">
																	<div
																		style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span style="font-size:24px;">Vanilla Bean
																			</span></p>
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span
																				style="font-size:24px;">Cheesecake</span>
																		</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-11"
						role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
						<tbody>
							<tr>
								<td>
									<table align="center" border="0" cellpadding="0" cellspacing="0"
										class="row-content stack" role="presentation"
										style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000;"
										width="640">
										<tbody>
											<tr>
												<th class="column"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
													width="100%">
													<table border="0" cellpadding="0" cellspacing="0"
														class="button_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:50px;text-align:center;">
																<div align="center">
																	<!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://rays-kitchen.herokuapp.com/#menu" style="height:42px;width:199px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#da3743"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]--><a
																		href="https://rays-kitchen.herokuapp.com/#menu"
																		style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#da3743;border-radius:4px;width:auto;border-top:1px solid #da3743;border-right:1px solid #da3743;border-bottom:1px solid #da3743;border-left:1px solid #da3743;padding-top:5px;padding-bottom:5px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"
																		target="_blank"><span
																			style="padding-left:45px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span
																				style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;">View
																				Full Menu</span></span></a>
																	<!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="35" cellspacing="0"
														class="divider_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<div align="center">
																	<table border="0" cellpadding="0" cellspacing="0"
																		role="presentation"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																		width="100%">
																		<tr>
																			<td class="divider_inner"
																				style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;">
																				<span> </span></td>
																		</tr>
																	</table>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:5px;padding-left:25px;padding-right:25px;padding-top:5px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			<span
																				style="font-size:16px;color:#db3743;">CONNECT
																				WITH US</span></p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="10" cellspacing="0"
														class="social_block" role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
														width="100%">
														<tr>
															<td>
																<table align="center" border="0" cellpadding="0"
																	cellspacing="0" class="social-table"
																	role="presentation"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	width="208px">
																	<tr>
																		<td style="padding:0 10px 0 10px;"><a
																				href="https://www.facebook.com/"
																				target="_blank"><img alt="Facebook"
																					height="32" src="https://rays-kitchen.herokuapp.com/images/facebook.png"
																					style="display: block; height: auto; border: 0;"
																					title="Follow us on Facebook"
																					width="32" /></a></td>
																		<td style="padding:0 10px 0 10px;"><a
																				href="https://www.twitter.com/"
																				target="_blank"><img alt="Twitter"
																					height="32" src="https://rays-kitchen.herokuapp.com/images/twitter.png"
																					style="display: block; height: auto; border: 0;"
																					title="Follow us on Twitter"
																					width="32" /></a></td>
																		<td style="padding:0 10px 0 10px;"><a
																				href="https://www.instagram.com/"
																				target="_blank"><img alt="Instagram"
																					height="32" src="https://rays-kitchen.herokuapp.com/images/instagram.png"
																					style="display: block; height: auto; border: 0;"
																					title="Follow us on Instagram"
																					width="32" /></a></td>
																		<td style="padding:0 10px 0 10px;"><a
																				href="https://www.pinterest.com/"
																				target="_blank"><img alt="Pinterest"
																					height="32" src="https://rays-kitchen.herokuapp.com/images/pinterest.png"
																					style="display: block; height: auto; border: 0;"
																					title="Follow us on Pinterest"
																					width="32" /></a></td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
													<table border="0" cellpadding="0" cellspacing="0" class="text_block"
														role="presentation"
														style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
														width="100%">
														<tr>
															<td
																style="padding-bottom:45px;padding-left:25px;padding-right:25px;padding-top:5px;">
																<div style="font-family: Arial, sans-serif">
																	<div
																		style="font-size: 12px; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2;">
																		<p
																			style="margin: 0; font-size: 14px; text-align: center;">
																			© Ray's Kitchen. All rights reserved 2021</p>
																	</div>
																</div>
															</td>
														</tr>
													</table>
												</th>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>

				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`;


export {newsLetterEmail, welcomeEmail, reservationEmail, reservationEmailFull}