module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");

  app.post('/api/subscriptions/create', (req, res) => {
    let requestBody = { ...req.body }
    requestCustom.post(
      `${serverRoutes.subscriptionCreate}`,
      req,
      res,
      requestBody
    )
  });

  app.post('/api/subscriptions/update', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.subscriptionUpdate}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  });

  app.get('/api/subscriptions/list', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.subscriptionList}`, req, res, requestBody)
  });

  /*Category view */
  app.get('/api/subscriptions/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.subscriptionView}/${requestBody.id}`, req, res, requestBody)
  });

  app.post('/api/subscriptions/change-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.subscriptionChangestatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });

  app.post('/api/subscriptions/approve-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.subscriptionApprovestatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });




}
