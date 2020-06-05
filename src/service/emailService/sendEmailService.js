import {createTransport} from "./createTransport"

export async function sendEmail(offer,email) {

    const transporter = await createTransport();
    const contentMessage=createContentMessage(offer);
    const message=createMessage(contentMessage,email);

    let info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
}

function createContentMessage(offer){
    return `<p> Masz nowe ogloszenie szefie  </p>
                            <h3> ${offer.title}
                                ${offer.price} zł </h3>
                            <a href= ${offer.link}>${offer.link}</a>     
        `;
}

function createMessage(message,email){
   return  {
        from: 'kapigsm@gmail.com',
            to: email,
        subject: 'Masz nową perełke !!! - OLX',
        text: "Czesc",
        html: message
    }
}

