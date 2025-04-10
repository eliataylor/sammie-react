const fs = require('fs');
const sharp = require('sharp');

// Load the JSON file
const florul = require('../src/florul.json');

// Function to update image dimensions
const updateImageDimensions = async () => {
    const updatedImages = await Promise.all(
        florul.images.map(async (image) => {
            if (!image.width || !image.height) {
                if (image.src.startsWith('/')) {
                    try {
                        const metadata = await sharp(`./public${image.src}`).metadata();
                        return {
                            ...image,
                            width: metadata.width,
                            height: metadata.height,
                        };
                    } catch (error) {
                        console.error(`Error processing image: ${image.src}`, error);
                        return image; // Return the original image if there's an error
                    }
                } else {
                    console.log(`Image source does not start with '/': ${image.src}`);
                }
            }
            return image; // Return the original image if dimensions already exist
        })
    );

    // Update the JSON file
    florul.images = updatedImages;
    fs.writeFileSync('../src/florul.json', JSON.stringify(florul, null, 2));
    console.log('Image dimensions updated successfully!');
};

// Run the function
updateImageDimensions();
