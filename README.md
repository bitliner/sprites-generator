=======
sprites-generator
=================

Tool to generate sprite images.


## Usage

* move all the images in a folder, let's call this folder `example`
* cd in `example`
* run `spites-generator`

After running the command, in the same folder there will be the following file
* `example.png`: the image result
* `example.css`: the style for the sprites

In `example.css` you can see the used selectors.

Enjoy!

## Installation

```
npm install -g sprites-generator
```

## Requirements

Requires [ImageMagick](http://www.imagemagick.org), available via HomeBrew (`$ sudo brew install ImageMagick`) or MacPorts: (`$ sudo port install ImageMagick`).

## Notes

Based on [node-spritesheet](https://raw.github.com/richardbutler/node-spritesheet)





