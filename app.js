var Jimp = require("jimp");
const fs = require('fs');

fs.readFile('name.json', (err, data) => {
	if (err) throw err;
	let list_name = JSON.parse(data);
	
	for (let i = 0; i < list_name.length; i++) {
		let name = list_name[i]
		let image = {};

		Jimp.read('template.png')
		.then(imageResponse => {
			image = imageResponse
			return Jimp.loadFont(Jimp.FONT_SANS_128_BLACK);
		})
		.then(font => {
			return image.print(
				font,
				0,
				100,
				{
					text: name,
					alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
					alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE
				},
				image.bitmap.width,
				image.bitmap.height
				);
			})
			.then(image => {
				console.log(`Success exported ${name} at ${(new Date())}`)
				return image.writeAsync(`img/${i+1}-nbc-aniv-${name}.png`);
			})
		}
	});