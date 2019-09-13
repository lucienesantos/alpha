const htmlTagNames = require("html-tag-names");
const svgTagNames = require("svg-tag-names");

export const tagNames = htmlTagNames
  .concat(svgTagNames)
  .filter((tag, index, array) => array.indexOf(tag) === index);
