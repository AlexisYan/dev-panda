const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

require('isomorphic-fetch');

process.env.ENV !== 'production' && require('dotenv').load();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));


app.post('/venues/meetup', (req, res) => {
  const [lat, lon] = req.body.latLon;
  fetch(`https://api.meetup.com/find/events?key=${process.env.MEETUP}&sign=true&photo-host=public&lon=${lon}&text=tech&lat=${lat}`)
  .then(json => json.json())
  .then(response => res.send(response));
});

app.post('/venues/eventbrite', (req, res) => {
  const [lat, lon] = req.body.latLon;
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=tech&location.within=20mi&location.latitude=${lat}&location.longitude=${lon}&token=${process.env.EVENTBRITE}`)
  .then(json => json.json())
  .then(response => res.send(response));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
