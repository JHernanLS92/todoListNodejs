const jwt = require('jsonwebtoken');
require('dotenv').config();
//funcion next sirve para pasar al sigueinte middleware
const authMiddleware = (req, res, next) => {
    let { authorization: token } = req.headers;
    token = token.replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET ,
     {algorithms: 'HS512'},
        (err, decoded) => {
            if(err) {
                res.status(400).json({ error: "invalid token", message: "El token no es valido o ya expiro, envia un token correcto"});
            }else{
                console.log(decoded );
                next();
            }
        }    
    );
   
}

module.exports = authMiddleware;