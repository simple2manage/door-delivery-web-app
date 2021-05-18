module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");

  /*Order list */
  app.get('/api/orders/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.orderList}`, req, res, requestBody)
  })

  /*Order view */
  app.get('/api/orders/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.orderView}/${requestBody.id}`, req, res, requestBody)
  });
// order refund
  app.post('/api/experiences/cancel-order', (req, res) => {
    let requestBody = { ...req.body }
    requestCustom.post(
      `${serverRoutes.orderRefund}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  }); 


}
