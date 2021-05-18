module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");

  /*Experience list */
  app.get('/api/experiences/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${'/experiences/list'}`, req, res, requestBody)
  })

   /*Experience view */
   app.get('/api/experiences/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.experienceView}/${requestBody.id}`, req, res, requestBody)
  });

   /*Experience_template view */
   app.get('/api/experiences/templates/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.experienceTemplateView}/${requestBody.id}`, req, res, requestBody)
  });

   /*Experience_template change status*/
   app.post('/api/experiences/templates/change-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.experienceTemplateChangeStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });


   /*Experience_template approve status*/
   app.post('/api/experiences/templates/approve-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.experienceTemplateApproveStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });

 


  /* List  Template*/
  app.get('/api/experiences/templates/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${'/experiences/templates/list'}`, req, res, requestBody)
  })

   /** Experience Rating List */
   app.get('/api/experiences/rating-list', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.experienceRatingList}`, req, res, requestBody)
  });

   /** Experience Rating Change Status */
   app.post('/api/experiences/change-rating-status', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.ratingChangeStatus}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });

  /** Experience Template Update */
  app.post('/api/experiences/templates/update', (req, res) => {
    let requestBody = { ...req.body }

    requestCustom.post(
      `${serverRoutes.experienceTemplateUpdate}/${requestBody.id}`,
      req,
      res,
      requestBody
    )
  });
}
