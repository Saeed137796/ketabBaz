const Controller = require('./Controller');
class UserController extends Controller{
    async login(req,res){
        res.send('login')
    }
}
module.exports = new UserController;