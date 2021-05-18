module.exports = (app, env, rp) => {
  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  var formidable = require("formidable");
  var fs = require('fs')
  const Cryptr = require('cryptr');


  /* Create Categories */
  app.post('/api/categories/create', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.createCategories}`,
      req,
      res,
      requestBody
    )
  });

  /*Category list */
  app.get('/api/categories/list', (req, res) => {

    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.categoriesList}`, req, res, requestBody)
  })

  /*Category view */
  app.get('/api/categories/view', (req, res) => {
    let requestBody = { ...req.query }
    requestCustom.get(`${serverRoutes.ViewCategories}/${requestBody.id}`, req, res, requestBody)
  });

  app.post('/api/categories/update', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.updateCategories}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  }); app.post('/api/categories/change-status', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.categoriesChangeStatus}/${urlQuery.id}`,
      req,
      res,
      requestBody
    )
  }); app.post('/api/categories/delete', (req, res) => {
    let requestBody = { ...req.body }
    let urlQuery = { ...req.query }
    requestCustom.post(
      `${serverRoutes.deleteCategories}`,
      req,
      res,
      requestBody
    )
  });

  app.post('/api/categories/update-photo', (req, res) => {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      let formData = fields;
      if (files.photo) {
        formData.photo = {
          value: fs.createReadStream(files.photo.path),
          options: {
            filename: files.photo.name,
            contentType: files.photo.type
          }
        };
      }
      const url = `categories/update-photo/${req.query.id}`
      requestCustom.formPost(url, req, res, formData);
    });
  });
}
