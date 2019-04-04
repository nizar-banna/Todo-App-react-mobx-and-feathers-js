// Initializes the `item` service on path `/item`
const createService = require('feathers-knex');
const createModel = require('../../models/item.model');
const hooks = require('./item.hooks');
const filters = require('./item.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'item',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/item', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('item');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
