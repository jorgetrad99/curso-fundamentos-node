const sharp = require('sharp');

sharp('kumon.png').resize(80).grayscale().toFile('resized.png');
