const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
    Bucket : 'bucket-policy-practice'
}

s3.getBucketPolicy(params, function(err, data){
    if(err) console.log(err, err.stack);
    else console.log(data);
});
