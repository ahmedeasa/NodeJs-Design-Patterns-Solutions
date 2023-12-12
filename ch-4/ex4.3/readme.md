# 4.3 Recursive File Search

## Description

This script addresses Problem 4.3 in Chapter 4 of the __Node.js Design Patterns__ book. The problem statement is outlined as follows:
> "Write `recursiveFind()`, a callback-style function that takes a path to a directory in the local filesystem and a keyword. The function must find all the text files within the given directory that contain the given keyword in the file contents. The list of matching files should be returned using the callback when the search is completed. If no matching file is found, the callback must be invoked with an empty array."

## `recursiveFind(dir, keyword, cb)`

This function asynchronously searches for text files containing a specified keyword within a given directory and its subdirectories. It utilizes the `getDirectoryItems` function to retrieve the contents of a directory, processes them to separate files and directories, and then recursively explores the subdirectories. The final result is an array of file paths that match the provided keyword. The function follows the callback pattern, returning any errors encountered or the array of matching file paths upon successful execution.

## `getDirectoryItems(dir, cb)`

An auxiliary function responsible for reading the contents of a specified directory asynchronously. It uses the `fs.readdir` method with the `withFileTypes` option to obtain file information. The callback pattern is used to handle errors or return the list of items within the directory.

## `fileMatches(filePath, keyword, callback)`

Another auxiliary function that checks if a given file contains a specific keyword. It reads the file content using `fs.readFile` and checks for the presence of the keyword. The result is returned through the callback function.

### Example Usage:

```javascript
recursiveFind("./MainDirectory", "elephant", (err, items) => {
    if (err) {
        console.error(err);
    }
    console.log(items);
});
```

### Example Result

```json 
[
  'MainDirectory\\File2.txt',
  'MainDirectory\\File4.txt',
  'MainDirectory\\NestedDirectory2\\File2.txt',
  'MainDirectory\\NestedDirectory2\\File4.txt' 
]
```