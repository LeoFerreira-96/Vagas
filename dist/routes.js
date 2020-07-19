"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _errorHandler = require('./middlewares/errorHandler'); var _errorHandler2 = _interopRequireDefault(_errorHandler);
var _ItemController = require('./app/controllers/ItemController'); var _ItemController2 = _interopRequireDefault(_ItemController);

const routes = _express.Router.call(void 0, );

routes.use(_errorHandler2.default);
routes.get("/items", _ItemController2.default.index);
routes.get("/items/:id", _ItemController2.default.search);
routes.post("/items", _ItemController2.default.store);
routes.put("/items/:id", _ItemController2.default.update);
routes.delete("/items/:id", _ItemController2.default.delete);

exports. default = routes;
