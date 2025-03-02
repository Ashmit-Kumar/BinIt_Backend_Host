const NGO = require('../models/ngoSchema'); // Import the NGO model

// Get all NGOs
const getNGOs = async (req, res) => {
    try {
        const ngos = await NGO.find(); // Fetch all NGOs from the database
        res.status(200).json(ngos); // Send the NGOs as a JSON response
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error retrieving NGOs' }); // Error handling
    }
};

// Register a new NGO
const registerNGO = async (req, res) => {
    try {
        const { name, registrationNumber, address, contact, website, establishedYear, missionStatement, areasOfWork } = req.body;

        // Create a new NGO using the data from the request body
        const newNGO = new NGO({
            name,
            registrationNumber,
            address,
            contact,
            website,
            establishedYear,
            missionStatement,
            areasOfWork
        });

        // Save the new NGO to the database
        const savedNGO = await newNGO.save();
        res.status(201).json(savedNGO); // Respond with the newly created NGO
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error registering the NGO' }); // Error handling
    }
};

module.exports = { getNGOs, registerNGO };
