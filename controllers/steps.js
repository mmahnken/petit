const Step = require('../models').Step;

module.exports = {
  create(req, res) {
    console.log(req.body);
    return Step
      .create({
        name: req.body.name,
        counts: req.body.counts,
        notes: req.body.notes,
        order: req.body.order,
        termId: req.body.termId,
        combinationId: req.body.combinationId,
      })
      .then(step => res.status(201).send(step))
      .catch(error => res.status(400).send(error));
  },
};
