module.exports = function(host, res, req, error, version, ejs){
  console.log(req.path)
	res.send('hello world!')
}
