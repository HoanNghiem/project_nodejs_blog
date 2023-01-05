const AdminAcc = require('../models/AdminAcc');
const Course = require('../models/Course');

class AdminController {
        
    //GET admin
    login(req, res, next) {
        res.render('admin/login')
    }

    // POST /admin/index
    index(req, res, next){
        Course.findOne({username: req.body.username}, (err,result) => {
            if(result.password == req.body.password){
                console.log('login success')
                res.render('admin/index')
            } else{
                console.log('login fail')
            }
            
        })
       
    }

    
}


module.exports = new AdminController;