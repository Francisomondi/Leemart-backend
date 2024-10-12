const callbackHandler = (req, res) => {
    const callbackData = req.body; // M-Pesa will send the data here
    console.log(callbackData);
  
    // Process the callback data as needed
    res.status(200).json({
      success: true,
      message: "Callback received successfully"
     
    });
  };

  module.exports =  callbackHandler 