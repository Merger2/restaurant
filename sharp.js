/* eslint-disable no-undef */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

async function resizeImages() {
  const images = fs.readdirSync(target);

  for (const image of images) {
    const extname = path.extname(image).toLowerCase();

    // Cek apakah gambar memiliki ekstensi yang valid (jpg, jpeg, png, gif, dll)
    if (['.jpg', '.jpeg', '.png', '.gif'].includes(extname)) {
      try {
        // Resize gambar besar
        await sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
            `${destination}/${path.basename(image, extname)}-large${extname}`
          ));

        // Resize gambar kecil
        await sharp(`${target}/${image}`)
          .resize(480)
          .toFile(path.resolve(
            `${destination}/${path.basename(image, extname)}-small${extname}`
          ));
      } catch (err) {
        console.error(`Error processing image: ${image}`, err);
      }
    }
  }
}

// Menjalankan fungsi
resizeImages();
