const express = require('express');
const route = express.Router();

const service = require('../services/render');

route.get('/', service.HomeRoutes);

route.get('/add-user', service.add_user);

route.get('/update-user', service.update_user);

module.exports = route;