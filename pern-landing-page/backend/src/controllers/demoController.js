const { Contact } = require("../../models");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: "All fields are required" 
      });
    }

    // Save to database
    const contact = new Contact({ name, email, message });
    await contact.save();

    console.log("Contact form submission saved:", contact.toJSON ? contact.toJSON() : contact);
    
    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully!",
      id: contact._id
    });
  } catch (error) {
    console.error("Demo form error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({ 
      success: true, 
      contacts 
    });
  } catch (error) {
    console.error("Get contacts error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Server error" 
    });
  }
};

