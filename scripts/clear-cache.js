const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
const cacheFolderPath = path.join(nodeModulesPath, '.cache');

if (fs.existsSync(cacheFolderPath)) {
    fs.rm(cacheFolderPath, { recursive: true }, (err) => {
        if (err) {
            console.error('Error deleting cache folder:', err);
        } else {
            console.log('Cache folder deleted successfully');
        }
    });
} else {
    console.error('Error deleting cache folder: cache folder not found');
}
