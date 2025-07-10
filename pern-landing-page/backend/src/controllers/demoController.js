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
    const contact = await Contact.create({
      name,
      email,
      message
    });

    console.log("Contact form submission saved:", contact.toJSON());
    
    res.status(200).json({ 
      success: true, 
      message: "Message sent successfully!",
      id: contact.id
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
    const contacts = await Contact.findAll({
      order: [['createdAt', 'DESC']]
    });
    
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

