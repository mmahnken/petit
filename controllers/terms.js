const Term = require('../models').Term;

module.exports = {
  create(req, res) {
    return Term
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then(term => res.status(201).send(term))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Term
    .all()
    .then(terms => res.status(200).send(terms) )
    .catch(error => res.status(400).send(error));
  },
};
