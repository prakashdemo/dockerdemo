'use strict';
module.exports = function(app) {
  var docker = require('../controllers/dockerController');

  // docker Routes
  app.route('/tasks')
    .get(docker.list_all_tasks)
    .post(docker.create_a_task);


  app.route('/tasks/:taskId')
    .get(docker.read_a_task)
    .put(docker.update_a_task)
    .delete(docker.delete_a_task);
};
