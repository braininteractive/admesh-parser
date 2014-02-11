var runAdmesh = require("..\\runAdmesh.js")
var test = require('tap').test
var admeshDir =		"..\\admesh"
var compCubeDirs =	[".\\companion-cube.stl", ".\\companion-cube-2.stl"]


var compareObjects = function(testObj, goodObj) {
	test("SIZES for this stl file match", function(t) {
		t.equal(testObj.x.min, goodObj.x.min)
		t.equal(testObj.y.min, goodObj.y.min)
		t.end()
	})
	
	test("MORE NUMBERS for this stl file match", function(t) {
		t.equal(testObj.parts,				goodObj.parts)
		t.equal(testObj.volume,				goodObj.volume)
		t.equal(testObj.edges.backwards,	goodObj.edges.backwards)
		t.equal(testObj.normalsFixed,		goodObj.normalsFixed)
		t.end()
	})
}


test("run admesh on companion cube 1", function(t) {
	var correctValues_cc = {x:{min:12.825}, y:{min:20.82688}, parts:1,
		volume:0, edges:{backwards:0}, normalsFixed:6}
	
	runAdmesh(admeshDir, compCubeDirs[0], function(err, testObj) {
		t.notOk(err)
		compareObjects(testObj, correctValues_cc)
		t.end()
	})
})


test("run admesh on companion cube 2", function(t) {	
	var correctValues_cc2 = {x:{min:-21.346926}, y:{min:-25.001492}, parts:7,
		volume:33.482048, edges:{backwards:0}, normalsFixed:16}
	
	runAdmesh(admeshDir, compCubeDirs[1], function(err, testObj) {
		t.notOk(err)
		compareObjects(testObj, correctValues_cc2)
		t.end()
	})
})