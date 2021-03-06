"use strict";

const Log = require("./index");

Log.info("I'm a single string.");
Log.info([], "And I have brothers!", "Hello there!", "Hi.");

let object = {
	number: 123,
	object: {
		0: "asd",
	},
};

Log.info(object);
Log.info("Object", object, "String after object.");

let circural = object;
circural.a = circural;
Log.info("Circural object", circural);

Log.warn("String", "Text string that is long enough.");

Log.warn(["Multiple", "Tags"], "I support multiple tags.");

Log.success("Array", [0, 1, 2, 3, 4, 5]);

// Error with stack
let err = new Error("Oops, something went wrong. Whoopsy daisy...");
Log.error("Error", err);
