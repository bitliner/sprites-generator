var deferred=require('deferred')
, program = require('promptly');



module.exports.askOutputDirectory=function(){
	var def=deferred()
	program.prompt('Output directory:', function(err,outputDirectory){
		console.log(outputDirectory);
		def.resolve(outputDirectory)
	})
	return def.promise
}

module.exports.askOutputImage=function(){
	var def=deferred()
	program.prompt('Output image:', function(err,outputImage){
		console.log(outputImage,err);
		def.resolve(outputImage)
	})
	return def.promise
}

module.exports.askOutputCss=function(){
	var def=deferred()
	console.log('ola')
	program.prompt('Output css:', function(err,outputCss){
		console.log(outputCss,err);
		def.resolve(outputCss)
	})
	return def.promise
}

module.exports.askSelector=function(){
	var def=deferred()
	program.prompt('Selector css:', function(err,selectorCss){
		console.log(selectorCss);
		def.resolve(selectorCss)
	})
	return def.promise
}

module.exports.askInputFolder=function(){
	var def=deferred()
	program.prompt('Input folder:', function(err,inputFolder){
		console.log(inputFolder);
		def.resolve(inputFolder)
	})
	return def.promise
}







