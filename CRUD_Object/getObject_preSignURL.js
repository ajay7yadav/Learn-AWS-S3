const AWS = require('aws-sdk');
const s3 = new AWS.S3({signatureVersion : 'v4', region : "ap-south-1"});

const params = {
    Bucket : 'i-hate-aws-123a71',
    Key : 'index.html',
    Expires : 20  // you can set your time but default time is 3600 sec.
};

const url = s3.getSignedUrl('getObject',params);

console.log('The URL is', url);