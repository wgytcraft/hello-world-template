module.exports = function(host, res, req, error, version, ejs){
  console.log(req.originalUrl)
	res.send('hello world!')
}
