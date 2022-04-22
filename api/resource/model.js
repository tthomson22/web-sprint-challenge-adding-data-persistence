// build your `Resource` model here
const db = require('../../data/dbConfig')

function getResources() {
    return db('resources');
}

function getResourceById(resource_id) {
    return db('resources')
        .where('resource_id', resource_id)
        .first();
}

function createResource(resource) {
    return db('resources')
        .insert(resource)
        .then(([id]) => {
            return getResourceById(id)
        })
}

module.exports = {
    getResources,
    getResourceById,
    createResource
}