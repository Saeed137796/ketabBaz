const Controller = require('./Controller');
class UserController extends Controller{
    async show(req,res){
        res.send('all books')
    }
}
module.exports = new UserController;