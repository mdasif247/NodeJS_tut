const path=require('node:path');

// diff methods in path module

console.log(__filename); // will log path to our file
console.log(__dirname);  // will log path to our folder

console.log(path.basename(__filename)); // will return filename from path
console.log(path.basename(__dirname));

console.log(path.extname(__filename)); // will return extension name of file

console.log(path.isAbsolute(__filename)); // will return true if our path is absolute

console.log(path.parse(__filename)); // will return details of path as object

console.log(path.format(path.parse(__filename)));

console.log(path.join("folder1","folder2","filename")); // will create a path or join to existing path

console.log(path.join(__filename,"asif")); 

console.log(path.resolve("folder1","folder2","folder3")); // will directly add to our dir

console.log(path.resolve("folder1","folder2","../index.js"));