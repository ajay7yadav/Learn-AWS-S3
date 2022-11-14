const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
    Bucket : 'aws-cors-practice'
}

s3.putBucketCors(params, function(err, data){
    if(err) console.log(err, err.stack);
    else console.log(data);
});