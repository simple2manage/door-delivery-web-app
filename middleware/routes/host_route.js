module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");


  /*Host list */
  app.get('/api/hosts/list', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.hostList}`, req, res, requestBody)
  })

  /*Host view */
  app.get('/api/hosts/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.hostView}/${requestBody.id}`, req, res, requestBody)
  });
  /*Host change status*/
  app.post('/api/hosts/change-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.hostChangeStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });
  /*Host approve status*/
  app.post('/api/hosts/approve-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.hostApproveStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });


}
