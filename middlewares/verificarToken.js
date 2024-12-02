const verificarToken = (req, res, next) => {
    const token = req.header('x-token'); 
  
    if (!token) {
      return res.status(403).json({ 
        msg: 'No hay token en la solicitud'
      });
    }
  

    const tokenSinBearer = token.split(' ')[1]; 

    jwt.verify(tokenSinBearer, process.env.JWT_SECRET || 'mi_secreto', (err, decoded) => {
      if (err) {
 
        return res.status(401).json({
          msg: 'Token no válido',
          error: err.message  
        });
      }
      
     
      req.usuarioId = decoded.uid;
      next(); 
    });
  };
  