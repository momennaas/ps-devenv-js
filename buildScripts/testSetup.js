require("babel-register")();

// Disable webpack features that Mocha does not understand
require.extensions[".css"] = function(){};