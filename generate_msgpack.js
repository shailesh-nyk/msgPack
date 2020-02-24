var msgpack = require('msgpack');
var fs = require('fs');
//var jsonObj = require('./document.json');
var jsonObj = require('./demo.json');

var documentMsgPack = msgpack.pack(jsonObj);

fs.writeFile('document.msgpack', documentMsgPack, () => {

});

