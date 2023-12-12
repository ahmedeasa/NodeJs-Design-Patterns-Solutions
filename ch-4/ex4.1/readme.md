# 4.1 Concatenate Files

## Description

This script is aimed to solve Exercise 4.1 in Chapter 4 of the __Node.js Design Patterns__ book. The exercise is to implement `concatFiles()`, a callback-style function that takes two or more file paths and concatenates their contents into a single output file.

## `concatFiles(dest, cb, ...files)`

This function concatenates the contents of multiple files into a single file.

- `dest` (string): The path to the output file where the concatenated content will be saved.
- `cb` (function): The callback function to be invoked upon completion or error. It follows the Node.js convention with the signature `(error)`. If successful, the contents of the files are concatenated into the output file.
- `files` (string...): Paths to the files to be concatenated.

### Example Usage:

```javascript
concatFiles('resultFile.txt', (err) => {
    if (err) {
        console.error(err);
    }
}, './DummyFile1.txt', './DummyFile2.txt', './DummyFile3.txt');
