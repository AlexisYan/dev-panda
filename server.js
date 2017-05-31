const express = require('express');
const app = express();
const path = require('path')
const bodyParser= require('body-parser');

require('isomorphic-fetch');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./public'));

if(process.env.node_env !== 'production') {
  require('dotenv').load();
}

app.post('/venues/meetup', (req, res) => {
  console.log('reqbody venues meetup', req.body)
  const [lat, lon] = req.body.latLon;
  console.log(lat)
  console.log(process.env.MEETUP)
  fetch(`https://api.meetup.com/find/events?key=${process.env.MEETUP}&sign=true&photo-host=public&lon=${lon}&text=tech&lat=${lat}`)
  .then(json => json.json())
  .then(response => {
    console.log(response)
    res.send(response);
  });
});

app.post('/venues/eventbrite', (req, res) => {
  console.log(req.body)
  const [lat, lon] = req.body.latLon;
  fetch(`https://www.eventbriteapi.com/v3/events/search/?q=tech&location.within=20mi&location.latitude=${lat}&location.longitude=${lon}&token=${process.env.EVENTBRITE}`)
  .then(json => json.json())
  .then(response => res.send(response));
});

app.get('/', (req, res) => {
  // const user = req.user && { profileId: req.user.profileId, _id: req.user._id };
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.WEB_PORT, () => console.log(`Server running on port ${process.env.WEB_PORT}`));
