import { Newsletter } from "../models/Newsletter.js";

export const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // Check if the email is already subscribed
    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: "Email is already subscribed" });
    }

    // Create a new subscription
    const newSubscription = new Newsletter({ email });
    await newSubscription.save();

    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    res.status(500).json({ message: "Server error" });
  }
};
