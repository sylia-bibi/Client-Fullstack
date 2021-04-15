const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const sgMail = require('@sendgrid/mail')

app.use(bodyParser.json())


app.post('/', (req, res) => {
    sgMail.setApiKey(process.env.API_SENDGRID);
            let msg = {
                to:"cyliabibi2017@gmail.com",
                from:req.body.email,
                subject:`${req.body.subject} from ${req.body.firstName} `,
                text:req.body.message


            }

            sgMail.send(msg)
            .then(() => {
               return res.status(200).json({'message':'email send'})
                
            })
            .catch(err => {
                return res.status(400).json({'err': err})
                
            })

})

module.exports = {
    path: "api/send-email",
    handler:app 
}