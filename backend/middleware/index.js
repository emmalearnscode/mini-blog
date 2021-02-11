module.exports = {
  logger: (req,res,next) => {
    console.log(`${req.method} ${req.path}  Payload: ${JSON.stringify(req.body)} `)
    next()
  },

  checkHeaders: (req,res,next) => {
    switch(req.method){
      case 'PATCH':
      case 'POST':
        if(req.headers['content-type'] !== 'application/json'){
          res.status(400).json({error: 'Missing header Content-Type: application/json'})
          return        
        }
      default:
      }
      next()
      
  },

  catchAll: (req,res,next) => {
    res.status(404).json({error: `Endpoint ${req.method} ${req.path} does not exist`})
  }
}