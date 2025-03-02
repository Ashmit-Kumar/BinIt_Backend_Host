const AWS = require('aws-sdk'); // Import AWS SDK
const multer = require('multer'); // Middleware for handling multipart/form-data
const multerS3 = require('multer-s3'); // Integration of multer with S3

// AWS S3 configuration
const s3 = new AWS.S3({
    region: process.env.aws_region,
    accessKeyId: process.env.aws_access_Id,
    secretAccessKey: process.env.aws_access_key
});

// Set up multer for file handling with S3 storage
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME, // Your bucket name from AWS
        acl: 'public-read', // Allows public read access to files
        contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set file type
        key: function (req, file, cb) {
            cb(null, `reports/${Date.now()}_${file.originalname}`); // Define the file name in S3
        }
    })
});

// Export middleware for single file upload
module.exports = upload.single('image'); // You can adjust the field name 'image' as required
