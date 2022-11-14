const AWS = require('aws-sdk');
const uuid = require('uuid').v4;
const s3 = new AWS.S3();

exports.s3Uploadv2 = async()=>{
    const params = {
        Bucket : process.env.AWS_BUCKET_NAME,
        Key : `uploads/${uuid()}-${file.originalname}`,
        Body : file.buffer
    }
    return await s3.upload(params).promise();
}