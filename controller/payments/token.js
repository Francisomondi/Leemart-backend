const axios = require('axios');
const Buffer = require('buffer').Buffer;


// Function to fetch the access token from Daraja API
const getAccessToken = async () => {
    const consumer_key = "5ECWqSvl5LCC1PG8EUIItkFobtbgwIXakUvvFQQIp7F9WGse"
    const consumer_secret = "fHnejKYAaPh1PU5HZZRFXKyHD7lgkAAO0l02xnifAddsHSTeQUz7FCjOf42GAQa9";
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials'
   const auth =
    "Basic " +
    new Buffer.from(consumer_key + ":" + consumer_secret).toString("base64"); 
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: auth,
      }
    });

    const accessToken = response.data.access_token; // The access token
    console.log('Access Token:', accessToken);
    return accessToken;

  } catch (error) {
    console.error('Error generating access token:', error.response ? error.response.data : error.message);
  }
};

// Call the function to fetch the access token
getAccessToken();


module.exports = getAccessToken