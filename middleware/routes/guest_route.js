module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");


  /*Guest list */
  app.get('/api/guests/list', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.guestList}`, req, res, requestBody)
  })

  /*Category view */
  app.get('/api/guests/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.guestView}/${requestBody.id}`, req, res, requestBody)
  });

  app.post('/api/guests/change-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.guestChangeStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });

  app.post('/api/guests/approve-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.guestApproveStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });


}
