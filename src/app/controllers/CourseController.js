const Course = require('../models/Course');
const { mongooseToObject } = require('../../until/mongoose');

class CourseController {

    //GET /course/:slug
    show(req, res, next){
        
        Course.findOne({ slug: req.params.slug })
            .then( course => {
                res.render('courses/show', { course:mongooseToObject(course) })
            })
            .catch(next)
    }

    //GET /course/create
    create(req, res, next){
        
        res.send('course create')
    }
}

module.exports = new CourseController;