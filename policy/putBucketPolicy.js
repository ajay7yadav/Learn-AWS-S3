const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
    Bucket : 'bucket-policy-practice',
    Policy : `{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Principle" : "*",
                "Action": "s3.GetObject",
                "Resource": "arn:aws:s3:::bucket-policy-practice/*",
                "Condition": {
                    "StringEquals": {
                        "s3.ExistingObjectTag/public":"yes"
                    }
                }
            }
        ]
    }`
}

s3.putBucketPolicy(params, function(err, data){
    if(err) console.log(err, err.stack);
    else console.log(data);
});
