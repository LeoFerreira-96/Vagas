import Item from "../models/Item";

class ItemController {

  async index(req, res) {
    let searchBy = {};
    console.log("teste", req.query.name)
    if (req.query.name)
    searchBy["name"] = {
      $regex: new RegExp(req.query.name),
      $options: "i",
    };
    const items = await Item.find(searchBy).populate("items");
    res.json(items);
  }

  async search(req, res) {
    const items = await Item.findById(req.params.id);
    res.json(items);
  }

  async store(req, res) {
    const item = await Item.create(req.body);
    res.json(item);
  }

  async update(req, res) {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(item);
  }

  async delete(req, res) {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.json(item);
  }
}

export default new ItemController();
