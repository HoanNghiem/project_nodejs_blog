const Course = require('../models/Course');
const { mutipleMongooseToOpject } = require('../../until/mongoose');

class SiteController {
    //GET /
    index(req, res, next) {
        // // callback funt
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else{
        //         res.status(400).json({error: 'error'})
        //     }
        // });


        // promise
        Course.find({})
            .then(courses => {
                // courses =courses.map(course => course.toObject())

                res.render('home', {
                    courses: mutipleMongooseToOpject(courses)
                });
            })
            .catch(next);


        // res.render('home');
    }

    //GET /search
    search(req, res){
        res.render('search')
    }
}

module.exports = new SiteController;