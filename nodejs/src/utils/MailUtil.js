const mailer = require("nodemailer")

const sendingMail = async (to,subject,text)=>{
    const transporter = mailer.createTransport({
        service:"gmail",
        auth:{
            user:"rahul.rahulgohel2091@gmail.com",
            pass:"maaj pnty cndi udvs"

        }
    })

    const mailOption = {
        from:"rahul.rahulgohel2091@gmail.com",
        to:to,
        subject:subject,
        html:text
    }
    const mailresponse = await transporter.sendMail(mailOption)
    return mailresponse


}

module.exports = {
    sendingMail
}


