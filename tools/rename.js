#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Convert fs functions to promise-based versions
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const rename = promisify(fs.rename);

// Start directory - default to current directory
const startDir = process.argv[2] || '.';

// Function to convert filename to alphanumeric lowercase
function toAlphanumericLowercase(filename) {
  // Get the base name and extension
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);

  // Convert base to alphanumeric lowercase
  const newBase = base.toLowerCase().replace(/[^a-z0-9]/g, '_');

  // Convert extension to lowercase (keep the dot)
  const newExt = ext.toLowerCase();

  // Return the new filename (handle empty base case)
  return newBase ? `${newBase}${newExt}` : `unnamed${newExt}`;
}

// Main recursive function to process directories
async function processDirectory(dirPath) {
  try {
    // Read directory contents
    const items = await readdir(dirPath);

    // Process each item
    for (const item of items) {
      const itemPath = path.join(dirPath, item);

      try {
        const stats = await stat(itemPath);

        if (stats.isDirectory()) {
          // Recursively process subdirectories
          await processDirectory(itemPath);
        } else if (stats.isFile()) {
          // Process files
          const dir = path.dirname(itemPath);
          const newName = toAlphanumericLowercase(item);
          const newPath = path.join(dir, newName);

          // Only rename if the name would actually change
          if (item !== newName) {
            try {
              console.log(`Renaming: ${itemPath} → ${newPath}`);
              await rename(itemPath, newPath);
            } catch (renameError) {
              // Handle cases where destination file already exists
              if (renameError.code === 'EEXIST') {
                console.error(`Cannot rename ${itemPath}: destination already exists`);
              } else {
                console.error(`Error renaming ${itemPath}: ${renameError.message}`);
              }
            }
          }
        }
      } catch (itemError) {
        console.error(`Error processing ${itemPath}: ${itemError.message}`);
      }
    }
  } catch (dirError) {
    console.error(`Error reading directory ${dirPath}: ${dirError.message}`);
  }
}

// Start the process
console.log(`Starting to rename files in ${path.resolve(startDir)}`);
processDirectory(startDir)
  .then(() => console.log('File renaming completed.'))
  .catch(err => console.error(`Fatal error: ${err.message}`));
