module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");



  /*Category view */
  app.get('/api/coupons/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.couponView}/${requestBody.id}`, req, res, requestBody)
  });

  app.post('/api/coupons/change-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.couponChangeStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });




}
