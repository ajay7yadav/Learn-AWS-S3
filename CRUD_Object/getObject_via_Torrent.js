const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const fs = require('fs');

const params = {
    Bucket : 'i-hate-aws-123a71',
    Key : 'Photo.jpeg'
};

// The torrent request is not supported in this region  :: | so that you got an error !

s3.getObjectTorrent(params, (err, data)=>{
    if(err) console.log(err, err.stack);
    else console.log(data);  // you recived data in buffor fromate to convert we use "fs" module
});