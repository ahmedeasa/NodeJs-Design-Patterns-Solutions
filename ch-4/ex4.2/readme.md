# 4.1 List files recursively

## Description

This script is aimed to solve Problem 4.2 in Chapter 4 of the __Node.js Design Patterns__ book.\
The problem statement is as follows: 
>"Write `listNestedFiles()`, a callback-style function that takes, as the input, the path to a directory in the local filesystem and that asynchronously iterates over all the subdirectories to eventually return a list of all the files discovered."

## `listNestedFiles(dir, cb)`

This function asynchronously lists all files within a specified directory and its subdirectories. It utilizes the `getDirectoryItems` function to retrieve the contents of a directory, processes them to separate files and directories, and then recursively explores the subdirectories. The final result is an array of file paths. The function employs the callback pattern, returning any errors encountered or the array of file paths upon successful execution.

## `getDirectoryItems(dir, cb)`

An auxiliary function responsible for reading the contents of a specified directory asynchronously. It uses the `fs.readdir` method with the `withFileTypes` option to obtain file information. The callback pattern is used to handle errors or return the list of items within the directory.



### Example Usage:

```javascript
listNestedFiles("./testDirectory", (err, items) => {
    if (err) {
        console.error(err);
    }
    console.log(items);
});
```
### Example Result

The result of running the script on the "testDirectory" is:

```json
[
  'testDirectory\\File1.txt',
  'testDirectory\\File2.txt',
  'testDirectory\\Subdirectory1\\File3.txt',
  'testDirectory\\Subdirectory1\\File4.txt',
  'testDirectory\\Subdirectory2\\File5.txt',
  'testDirectory\\Subdirectory2\\File6.txt'
]
```
