const AWS = require('aws-sdk');
const s3 = new AWS.S3({region : 'ap-south-1'}); // bydefault its create in us region

var params = {
    Bucket : "i-hate-aws-123a71"
};
s3.createBucket(params, function(err, data){
    if(err)console.log(err, err.stack);
    else console.log(data);
});