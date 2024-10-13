const callbackHandler = (req, res) => {
    const callbackData = req.body; // M-Pesa will send the data here
    console.log(callbackData.Body);

    if (!callbackData.Body.stkCallback.CallbackMetadata) {
      console.log(callbackData.Body)
      res.json('ok')
    }
  
    console.log(callbackData.Body.stkCallback.CallbackMetadata)
  };

  module.exports =  callbackHandler 