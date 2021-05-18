module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");

  /*Category list */
  app.get('/api/subscriptions/list-subscribers', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.SubscribersList}`, req, res, requestBody)
  })

  /*Category view */
  app.get('/api/subscriptions/view-subscribers', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.SubscribersView}/${requestBody.id}`, req, res, requestBody)
  });




}
