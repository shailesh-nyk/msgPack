var msgpack = require('msgpack');
var fs = require('fs');
var bigger = 'document.json'
var smaller = 'demo.json';

function pack(filename) {
    var file = require(`./${filename}`);
    var documentMsgPack = msgpack.pack(file);
    fs.writeFile('document.msgpack', documentMsgPack, () => {
        var fileSizeInBytes = fs.statSync("document.msgpack")["size"];
        var fileSizeInBytesOld = fs.statSync(filename)["size"]
        console.log('Base File Size :', fileSizeInBytesOld)
        console.log(`New File Size : ${fileSizeInBytes}`)
        console.log(`Improvement : ${100 - (fileSizeInBytes/fileSizeInBytesOld).toFixed(2) * 100.0} %`)
    });
}

function unpack() {
    console.log(msgpack.unpack(fs.readFileSync('document.msgpack')));
}

pack(smaller);

//unpack();