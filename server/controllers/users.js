const User = require('../models').User;

/**
 * The req parameter is the incoming request from the client.
 * The res parameter is the response we are preparing to send
 * back to the client in response to their request.
 */
module.exports = {
  create(req, res) {
    return User
      .create({
        first: req.body.first,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .all()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  }
};