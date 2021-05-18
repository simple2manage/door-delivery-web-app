module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');
  const fs = require("fs");
  
  /* Create Coupons */
  app.post('/api/coupons/create', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.createCoupons}`,
      req,
      res,
      requestBody
    )
  });

  /*Coupons list */
  app.get('/api/coupons/list', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.couponsList}`, req, res, requestBody)
  })

  /*Update Coupons */
  app.post('/api/coupons/update', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.updateCoupons}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  });

  /*Delete Coupons */
  app.post('/api/coupons/delete', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.deleteCoupons}`,
      req,
      res,
      requestBody
    )
  });


}
