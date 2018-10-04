const express = require('express');
const router = express.Router();
const retrieveControllers = require('../../utils/retrieveControllers');
const path = require('path');

const controllers = retrieveControllers(path.basename(__filename).split('.')[0]);
const userMiddleware = require('../../controllers/userMiddleware');

//  Projects API
router.post('/', userMiddleware, controllers.newProject);
router.get('/', controllers.retrieveProjects);
router.get('/:projectId', controllers.retrieveProject);
router.patch('/:projectId', controllers.updateProject);

module.exports = router;
