

import axios from 'axios';
import readline from 'readline';


const API_KEY = 'qdzyiQdxW6tZbHy0rQB5cB5exM1AaKhI1ShvKDEh';
const endpointURL = 'https://api.cohere.ai/v1/generate';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function makeAPIRequest(userInput) {
  try {
    const response = await axios.post(endpointURL, {
      prompt: userInput,
    }, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    
    // Handle the response
    console.log(response.data.generations[0].text);
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
  }
}

rl.question('Enter your input: ', (userInput) => {
  makeAPIRequest(userInput);
  rl.close();
});
