const AWS = require('aws-sdk');
const s3 = new AWS.S3();

var params = {
    Bucket : "i-hate-aws-123a71"
};
s3.getBucketLocation(params, function(err, data){
    if(err)console.log(err, err.stack);
    else console.log(data);
});