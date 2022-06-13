const sgmail = require('@sendgrid/mail');
const { response } = require('express');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


sgmail.setApiKey("SG.FN73eWCtSEGlLovFgm-6vg.CyXLFZwIem99hv1wcKytmLt8gRX7TZKcyFcRmlgfh9g");



/*sgmail.setApiKey('SG.FN73eWCtSEGlLovFgm-6vg.CyXLFZwIem99hv1wcKytmLt8gRX7TZKcyFcRmlgfh9g')
app.post('/api/order', async function order(req, res) {
const msg = {
  to: "nadinenashttt@gmail.com", 
  from: "martrabbits@gmail.com", 
  subject: "order update",
  text: "order created",
 
  
}});

sgmail.send(msg).then(response =>console.log('emailsent'))
.catch(error=> console.log(error.msg))*/








app.post('/api/order', async function order(req, res) {
  var email = req.body.email;
  const message = {
    to:email,
    from: 'martrabbits@gmail.com',
    subject: 'order update',
    text: " your order is created",
  };
  await sgmail.send(message,(error, response) => {
    if(error) {
        console.log(error);
    }
    else{
        console.log(response);
       
    }
 });
  return res.json(message);
});


app.listen(3000);







