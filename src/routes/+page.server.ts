// import type { Actions } from '@sveltejs/kit';
// import nodemailer from 'nodemailer';

// import config from '../config';

// const transporter = nodemailer.createTransport({
// 	host: 'smtpout.secureserver.net',
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		user: config.emailSender,
// 		pass: config.emailPassword,
// 	},
// });

// export const actions: Actions = {
// 	default: async (event) => {
// 		const formData = Object.fromEntries(await event.request.formData());
// 		const { firstname, lastname, subject, email, message } = formData;

// 		const emailBody = `
// 			<h3>${firstname} ${lastname.toString()}</h3>
// 			<h4>${email.toString()}</h4>
// 			<p>${message.toString()}</p>
// 		`;

// 		const mailOptions = {
// 			from: config.emailSender,
// 			to: config.emailSender,
// 			subject: ''.concat(subject.toString()),
// 			html: emailBody,
// 		};

// 		try {
// 			await transporter.sendMail(mailOptions);
// 			return {
// 				status: 200,
// 				body: { message: 'Email sent successfully' },
// 			};
// 		} catch (error) {
// 			return {
// 				status: 500,
// 				body: { message: 'Failed to send email' },
// 			};
// 		}
// 	},
// };
