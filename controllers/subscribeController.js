const Subscription = require('../models/subscriptionSchema');

const subscribe= async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    try {
        // If using a database model for subscriptions:
        const newSubscription = new Subscription({ email });
        await newSubscription.save();

        res.status(200).json({ message: "Subscription successful!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error subscribing to news" });
    }
}
const getSubscribe = async (req, res) => {
    try {
        // Fetch all subscriptions from the database
        const subscriptions = await Subscription.find();

        // If there are no subscriptions
        if (subscriptions.length === 0) {
            return res.status(404).json({ message: "No subscriptions found" });
        }

        // Return the list of subscriptions
        res.status(200).json({ subscriptions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error fetching subscriptions" });
    }
};

module.exports={subscribe,getSubscribe};