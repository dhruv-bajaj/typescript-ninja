"use strict";
// use tsc --init to make a tsconfig.json file
// set root dir as src and outDir as public
// so all ts files will be in src and compiled js will be put in public by itself
// use tsc only to compile the files. compiler knows files are in src folder.
// add
// "include":["src"]
// in config file to compile ts files present in src folder only.
console.log("hello in test.ts");
