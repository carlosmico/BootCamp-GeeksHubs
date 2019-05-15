//FIX IMPORT ERROR MODULE
var express = require("express");

//TEST OF CMath File
var arg1 = process.argv[2];
var arg2 = process.argv[3];


import { PI } from "./CMath";
import { sqrt } from "./CMath";
import { square } from "./CMath";

console.log(PI);
console.log(sqrt(+arg1));
console.log(square(+arg2));