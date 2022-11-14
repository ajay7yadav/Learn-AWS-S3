const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
    Bucket : 'i-hate-aws-123a71',
    Key : 'Photo.jpeg'
};

s3.deleteObject(params, (err, data)=>{
    if(err) console.log(err, err.stack);
    else console.log(data);
});

