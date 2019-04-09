const express = require('express');
const app = express();
const port = process.env.PORT;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const emailAuth = require('./emailAuth');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('home');
});

app.get('/about', function(req, res){
    res.render('about');
});

app.get('/gallery', function(req, res){
    res.render('gallery');
});

app.get('/projects', function(req, res){
    res.render('projects');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.post('/contact', function(req, res){
    const custOutput = `
        <h3>Thank you for your inquiry, ${req.body.firstName}!</h3>
        <p>We will be in contact with you within 48 business hours.</p>
        <p>Just go on over to: <a href=''>River City Flooring</a> to see our work.</p>
        `;
    const coOutput = `
        <h2>You have a new inquiry!</h2>
        <h4>Lead Details:</h4>
        <p>Name: ${req.body.firstName} ${req.body.lastName}</p>
        <p>Phone #: ${req.body.phone}</p>
        <p>Email: ${req.body.email}</p>
        <p>Est Size: ${req.body.sqft}sqft</p>
        <p>Project Desc: ${req.body.desc}</p>
        <p>Please contact them within 48 business hours.</p>
        `;
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "in-v3.mailjet.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: emailAuth.user, // generated ethereal user
              pass: emailAuth.pass // generated ethereal password
            }
        });
        
        // setup email data with unicode symbols
        let mailOptionsCust = {
            from: '"River City Hardwood" <rivercityhardwoodflooring@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: "Thank you for your inquiry!", // Subject line
            text: "River City Hardwood Thank You", // plain text body
            html: custOutput // html body
        };
        
        // setup email data with unicode symbols
        let mailOptionsCo = {
            from: '"River City Hardwood" <rivercityhardwoodflooring@gmail.com>', // sender address
            to: "tayloralfers@gmail.com", // list of receivers
            subject: "You have a new inquiry", // Subject line
            text: "River City Hardwood Inquiry", // plain text body
            html: coOutput // html body
        };
        
        // send mail with defined transport object
        transporter.sendMail(mailOptionsCust, function(error, info){
            if(error) {
                return console.log(error);
            }
                console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                /*res.send('email has been sent');*/
          });
          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        
        // send mail with defined transport object
        transporter.sendMail(mailOptionsCo, function(error, info){
            if(error) {
                return console.log(error);
            }
                console.log("Message sent: %s", info.messageId);
        // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                res.redirect('/');
          });
});

app.listen(port, function(){
    console.log('Server started...');
})