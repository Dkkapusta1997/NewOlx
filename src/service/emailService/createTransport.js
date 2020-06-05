import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export async function createTransport() {

    return await nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        auth: {
            user: 'kapigsm@gmail.com', // generated ethereal user
            pass: 'NinjaPower97!' // generated ethereal password
        },
        tls: {rejectUnauthorized: false}
    }));

}