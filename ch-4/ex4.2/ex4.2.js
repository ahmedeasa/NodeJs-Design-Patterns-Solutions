import fs from 'fs'
import path from 'path'
import async from 'async'

/**
 * A callback-style function that takes, as the input, the path to a directory in the local filesystem 
 * and asynchronously iterates over all the subdirectories to eventually return a list of all the files discovered.
 *
 * @param {string} dir - The path to the directory to be searched.
 * @param {function} cb - The callback function to be invoked upon completion or error.
 *                        It follows the Node.js convention with the signature (error, result).
 *                        If successful, the result is an array of file paths discovered.
 */
export function listNestedFiles(dir, cb) {
    /**
     * Recursively processes the items in the directory and its subdirectories.
     * @private
     */
    function processItemsList() {
        // Filter directories from the current result items
        let dirs = resultItems.filter(item => item.isDirectory());

        // Create an array of functions, each fetching items from a subdirectory
        let funcs = dirs.map(dir => (callback) => getDirectoryItems(path.join(dir.path, dir.name), callback));

        // Execute the functions in parallel
        async.parallel(funcs, (err, newItems) => {
            if (err) {
                return cb(err);
            }

            // Filter files from the current result items
            resultItems = resultItems.filter(item => item.isFile());

            // Concatenate the new items and continue processing if there are still directories
            if (newItems.length > 0) {
                resultItems = resultItems.concat(...newItems);
            }

            // If there are still directories, continue processing; otherwise, invoke the callback
            if (resultItems.some(item => item.isDirectory())) {
                processItemsList();
            } else {
                cb(null, resultItems.map(item => path.join(item.path, item.name)));
            }
        });
    }

    // Initial array to store the result items
    let resultItems = [];

    // Fetch items from the specified directory
    getDirectoryItems(dir, (err, items) => {
        if (err) {
            return cb(err);
        }

        // If there are items, initialize the resultItems array
        if (items.length > 0) {
            resultItems = items;
        }

        // Start the recursive processing of items
        processItemsList();
    });
}

/**
 * Fetches items (files and directories) from a given directory.
 *
 * @param {string} dir - The path to the directory.
 * @param {function} cb - The callback function to be invoked with the items or an error.
 */
function getDirectoryItems(dir, cb) {
    fs.readdir(dir, { withFileTypes: true }, (err, files) => {
        if (err) {
            return cb(err);
        }

        cb(null, files);
    });
}

// Example usage:
listNestedFiles("./testDirectory", (err, items) => {
    if (err) {
        console.error(err);
    }
    console.log(items);
});
