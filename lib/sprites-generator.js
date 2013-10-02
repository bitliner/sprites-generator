var Builder = require('node-spritesheet').Builder,
	commands = require('./commands'),
	fs = require('fs'),
	deferred = require('deferred')
	, path=require('path');

var options = {}


askParams().then(function(options) {
	console.log('1',options)
	var b = new Builder(options);
	console.log(options)
	b.build(function() {
		console.log('terminated')
	})
}, function(err){
	console.log('err',err)
})

function askParams() {
	var def = deferred()

	commands.askInputFolder().then(function(inputFolder) {

		options.inputFolder = path.resolve(inputFolder)
		options.outputDirectory=inputFolder

		commands.askOutputImage().then(function(outputImage) {

			options.outputImage = outputImage


			commands.askOutputCss().then(function(outputCss) {

				options.outputCss = outputCss

				commands.askSelector().then(function(selector) {

					options.selector = selector

					listFilesOf(options.inputFolder).then(function(files) {
						options.images = files


						def.resolve(options)


					}, function(err){
						console.log('err',err)
					})

				})
			})
		})
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
		def.resolve(files.map(function(el){return path.resolve(folder,el)}))
	});
	return def.promise;
}