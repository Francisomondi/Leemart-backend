const axios = require("axios");
const moment = require("moment");


const stkController = async(req,res)=>{
    const url = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";
  const phone = req.body.phone.substring(1)
  const amount = req.body.amount
 //console.log({phone, amount})

 const timestamp = moment().format("YYYYMMDDHHmmss");
      

  const shortcode = process.env.BUSINESS_SHORT_CODE
  const passkey = process.env.PASS_KEY

  const password = new Buffer.from(
    shortcode +
    passkey +
    timestamp
  ).toString("base64");

 axios
 .post(
   url,
   {
     BusinessShortCode: shortcode ,
     Password: password,
     Timestamp: timestamp,
     TransactionType: "CustomerBuyGoodsOnline",
     Amount: amount,
     PartyA: `254${phone}`,
     PartyB: shortcode,
     PhoneNumber: `254${phone}`,
     CallBackURL: "https://mydomain.com/path",
     AccountReference: `254${phone}`,
     TransactionDesc: "Mpesa Daraja API stk push test",
   },
   {
     headers: {
       Authorization: auth,
     },
   }
 ).then((response)=>{
  console.log(response.data)
  res.status(200).json(data);
 }).catch(error=>{
  console.log(error.message)
  res.status(400).json(error.message)
 })

  res.json({phone, amount})
}

module.exports = stkController