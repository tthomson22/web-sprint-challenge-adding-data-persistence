// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            const projectList = projects.map(project => {
                return{
                    project_name: project.project_name,
                    project_description: project.project_description,
                    project_completed: Boolean(project.project_completed)
                }
            })
            res.status(200).json(projectList)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Project.createProject(req.body)
        .then(createdProject => {
            res.status(200).json({
                project_name: createdProject.project_name,
                project_description: createdProject.project_description,
                project_completed: Boolean(createdProject.project_completed)
            })
        })
        .catch(next)
})

module.exports = router;