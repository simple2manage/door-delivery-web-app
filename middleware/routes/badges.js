module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");
 
  /*Badges list */
  app.get('/api/badges/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.badgesList}`, req, res, requestBody)
  })

  /*Badges view */
  app.get('/api/badges/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.badgesView}/${requestBody.id}`, req, res, requestBody)
  });

   /* Badges Create  */
   app.post('/api/badges/create', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(`${serverRoutes.badgesCreate}`, req, res, requestBody )
  });
  
  /**Badges update */
  app.post('/api/badges/update', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.badgesUpdate}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  });

  /**Badges Change Status */
   app.post('/api/badges/change-status', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.badgesChangeStatus}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  }); 

}
