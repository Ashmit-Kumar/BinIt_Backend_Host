const Report = require('../models/report'); // Import the Report model
const upload = require('../middleware/uploadMiddleware'); // Import the upload middleware

// Get all reports
const getReports = async (req, res) => {
    try {
        const reports = await Report.find(); // Fetch all reports from the database
        res.status(200).json(reports); // Send the reports as a JSON response
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving reports' }); // Error handling
    }
};

// Post a new report with image upload
const postReports = async (req, res) => {
    // First, ensure that a file is uploaded using the uploaded middleware
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error uploading image to S3', error: err.message });
        }

        // Proceed with report creation after successful upload
        try {
            const { areaType, city, state, pincode, latitude, longitude } = req.body;
            const image = req.file ? req.file.location : null; // URL of the image in S3

            // Create a new report using the data from the request body
            const newReport = new Report({
                areaType,
                city,
                state,
                pincode,
                latitude,
                longitude,
                image // Store the S3 URL of the image
            });

            // Save the new report to the database
            const savedReport = await newReport.save();
            res.status(201).json(savedReport); // Respond with the newly created report
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error creating the report' }); // Error handling
        }
    });
};

module.exports = { getReports, postReports };
