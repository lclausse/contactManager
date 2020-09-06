// Dépendances
const fs = require('fs')
// Middleware de logging
module.exports.logging = (req,res,next)=>{
    var start = new Date();
	req.on('end',()=>{
		var date = start.getDate()+'-'+(start.getMonth()+1)+'-'+start.getFullYear()+' '+start.getHours()+':'+start.getMinutes()+':'+start.getSeconds();
		var responseTime = (new Date - start)+'ms';
		if(res.getHeader('Content-Length')){
			var responseLength = res.getHeader('Content-Length')/1000+'ko';
		}else{
			var responseLength = '0ko';
		}
		console.log(date+' \x1b[91m'+res.statusCode+'\x1b[0m \x1b[95m'+responseTime+'\x1b[0m \x1b[93m'+responseLength+'\x1b[0m \x1b[92m'+req.ip+'\x1b[0m \x1b[94m'+req.method+'\x1b[0m \x1b[96m'+req.url+'\x1b[0m');
		fs.appendFile('./requests.log',date+' '+res.statusCode+' '+responseTime+' '+responseLength+' '+req.ip+' '+req.method+' '+req.url+'\n',(err)=>{
			if(err) console.log(err);
		});
	})
	next();
}
// Middleware qui configure les headers
module.exports.setHeaders = (req, res, next)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.setHeader('Access-Control-Max-Age', 60 * 60 * 24 * 365);
	next();
}
