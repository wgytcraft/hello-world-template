module.exports = function(host, res, req, error, version, ejs,config){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('hello world!')
	res.end();
}
