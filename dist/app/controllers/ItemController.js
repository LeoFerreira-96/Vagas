"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Item = require('../models/Item'); var _Item2 = _interopRequireDefault(_Item);

class ItemController {

  async index(req, res) {
    let searchBy = {};
    console.log("teste", req.query.name)
    if (req.query.name)
    searchBy["name"] = {
      $regex: new RegExp(req.query.name),
      $options: "i",
    };
    const items = await _Item2.default.find(searchBy).populate("items");
    res.json(items);
  }

  async search(req, res) {
    const items = await _Item2.default.findById(req.params.id);
    res.json(items);
  }

  async store(req, res) {
    const item = await _Item2.default.create(req.body);
    res.json(item);
  }

  async update(req, res) {
    const item = await _Item2.default.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  }

  async delete(req, res) {
    const item = await _Item2.default.findByIdAndDelete(req.params.id);
    res.json(item);
  }
}

exports. default = new ItemController();
