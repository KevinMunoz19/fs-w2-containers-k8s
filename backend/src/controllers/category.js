const Category = require('../models/category');

module.exports.createCategory = async (req, res, next) => {
  const args = [
    req.person.person,    // person
    req.body.name,        // name
    req.body.description  // description
  ];
  try {
    await Category.create(args);
    res.status(200).json({ messsage: 'Category created successfully!' });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};

module.exports.getCategory = async (req, res, next) => {
  const args = [
    req.person.person,    // person
    Number(req.params.id) // category
  ];
  try {
    const query_result = await Category.findById(args);
    res.status(200).json({ data: query_result.rows });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};

module.exports.getCategories = async (req, res, next) => {
  const args = [ req.person.person ];
  try {
    const query_result = await Category.fetchAll(args);
    res.status(200).json({ data: query_result.rows });
  } catch (error) {
    res.status(400).json({ messsage: error });
  }
};
