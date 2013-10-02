var Builder = require('node-spritesheet').Builder,
	commands = require('./commands'),
	fs = require('fs'),
	deferred = require('deferred'),
	path = require('path');

var options = {}


askParams().then(function(options) {
	console.log('1', options)
	var b = new Builder(options);
	console.log(options)
	b.build(function() {
		console.log('terminated')
	})
}, function(err) {
	console.log('err', err)
})

function askParams() {
	var def = deferred(),
		options = {},
		thisFolderName = path.resolve('./').match(/[^\/]+$/g)[0];


	options.inputFolder = path.resolve('./')
	options.outputDirectory = options.inputFolder
	options.outputImage = thisFolderName + '.png'
	options.outputCss = thisFolderName + '.css'
	options.selector = '.' + thisFolderName

	listFilesOf(options.inputFolder).then(function(files) {
		options.images = files
		def.resolve(options)
	}, function(err) {
		console.log('err', err)
	})



	return def.promise;
}



function listFilesOf(folder) {
	var def = deferred()
	fs.readdir(folder, function(err, files) {
		if(err) {
			return def.reject(err)
		}
		console.log('Images:', files)
		def.resolve(files.filter(function(el){return el.match(/\.png$/g)!=null }).map(function(el) {
			return path.resolve(folder, el)
		}))
	});
	return def.promise;
}