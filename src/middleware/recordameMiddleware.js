function recordameMiddleware(req, res, next) {
    
    if (req.cookies.recordame != undefined &&
        req.session.userLogged == undefined) {
            if (errors.isEmpty()) {
                let usersJSON = fs.readFileSync('baseUsers.json', {
                    encoding: 'utf-8'
                });
                let users;
                if (usersJSON == "") {
                    users = [];
                } else {
                    users = JSON.parse(usersJSON);
                }
                let userToLogin
                
                for (let i= 0; i< users.length; i++ ){
                    if (users[i].email == req.cookies.recordame){
                        {
                            userToLogin = users[i];
                            break;
                        }
                    }
                    
                    req.session.userLogged = userToLogin;
                }
            }
            
        }
        next();
    }
    
    module.exports = recordameMiddleware;