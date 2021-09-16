module.exports = (req, res, next) => {   
   
    res.header('Content-Range', 'posts 0-6/6')    
    next()
}