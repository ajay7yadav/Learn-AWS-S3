const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
    Bucket : 'myfirst-bucket-a7'
}

s3.getBucketAcl(params, function(err, data){
    if(err) console.log(err, err.stack);
    else console.log(data);
});
