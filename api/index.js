const sgmail = require('@sendgrid/mail');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors=require ('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ 
  origin:"*"
}))

sgmail.setApiKey(process.env.SENDGRID_API_KEY);

/*app.post('/api/payment', async function payments(req, res) {
  const message = {
    to: req.body.email,
    from: 'martrabbits@gmail.com',
    subject: 'payment confirmation',
    text: "thank you for using rabbitsmart!we've successfully processed your payment "
  };
  await sgmail.send(message);
  return res.json(message);
});


app.post('/api/ship', async function shipping(req, res) {
  const message = {
    to: req.body.email,
    from: 'martrabbits@gmail.com',
    subject: 'shipping update',
    text: " your order is being shipped"
  };
  await sgmail.send(message);
  return res.json(message);
});*/

app.post('/api/order', async function order(req, res) {
  const message = {
    to: req.body.email,
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
app.get('/',(req,res)=> {res.send('succces')})

app.listen(3000);
