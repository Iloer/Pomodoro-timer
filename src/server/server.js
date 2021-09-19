import express from 'express'
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';
import compression from 'compression';

//const express = require('express')

const app = express();
const port = process.env.PORT || 3002;

app.use(compression())
app.use('/static', express.static('./dist/client'))

app.get('/auth', (req, res) => {
  //https://www.reddit.com/api/v1/access_token
  //grant_type=authorization_code&code=CODE&redirect_uri=URI
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    //`grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://skillbox-ivan-reddit.herokuapp.com/auth`,
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3002/auth`,
    {
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.SECRET,
      },
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  )
  .then(({data}) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
    );
  })
  .catch(console.log);
  console.log(`auth code - ${req.query.code}`);
})

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
})

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});