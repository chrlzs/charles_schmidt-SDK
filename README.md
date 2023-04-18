#TODO: Get your API key here: https://the-one-api.dev/sign-up

#Installing

import RingSDK from "../src/lib/ringSDK";

const ring = new RingSDK({
    accessToken: "[YOUR API_KEY]"
});

#Installing for extending / additions / improvements

Edit .env file with your API key you received from the #TODO

API_KEY="[ GET YOUR API KEY HERE: https://the-one-api.dev/sign-up ]"

This should now look like this:

API_KEY="Rjw-***********_****"

Next, run:

npm install

For tests, run: 

npm run test

Instantiate your client in index.js

import RingSDK from "../src/lib/ringSDK";

const ring = new RingSDK({
    accessToken: "[YOUR API_KEY]"
});



