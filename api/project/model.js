// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects');
}

function getProjectById(project_id) {
    return db('projects')
        .where('project_id', project_id)
        .first();
}

function createProject(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => {
            return getProjectById(id)
        })
}

module.exports = {
    getProjects,
    getProjectById,
    createProject
}