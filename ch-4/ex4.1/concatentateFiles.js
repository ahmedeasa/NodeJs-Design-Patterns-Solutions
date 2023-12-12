import fs from 'fs';

/**
 * Concatenates the contents of multiple files into a single file.
 *
 * @param {string} dest - The path to the output file where the concatenated content will be saved.
 * @param {function} cb - The callback function to be invoked upon completion or error.
 *                        It follows the Node.js convention with the signature (error).
 *                        If successful, the contents of the files are concatenated into the output file.
 * @param {...string} files - Paths to the files to be concatenated.
 */
export function concatFiles(dest, cb, ...files) {
    // Check if files array is empty
    if (!files || files.length === 0) {
        return cb();
    }

    // Recursive function to iterate over files
    function iterate(index) {
        const filename = files[index];
        fs.readFile(filename, (err, fileContent) => {
            if (err) {
                return cb(err);
            }
            console.log(`Reading file ${filename}`);
            fs.appendFile(dest, fileContent, (err) => {
                if (err) {
                    return cb(err);
                }
            });
            // Check if it's the last file
            if (index === files.length - 1) {
                return finish();
            }
            // Use process.nextTick for asynchronous iteration
            process.nextTick(() => iterate(index + 1));
        });
    }

    // Function to be called after all files are processed
    function finish() {
        console.log(`${files.length} files concatenated, saved in ${dest}`);
        return cb();
    }

    // Start iterating from index 0
    iterate(0);
}

// Example usage:
concatFiles('resultFile.txt', (err) => {
    if (err) {
        console.error(err);
    }
}, './DummyFile1.txt', './DummyFile2.txt', './DummyFile3.txt');
