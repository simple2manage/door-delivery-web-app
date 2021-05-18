module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");

  /*Transaction list */
  app.get('/api/transactions/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.transactionList}`, req, res, requestBody)
  });

 /*Transaction view */
 app.get('/api/transactions/view', (req, res) => {
  let requestBody = { ...req.query }
  requestCustom.get(`${serverRoutes.transactionView}/${requestBody.id}`, req, res, requestBody)
});

}
