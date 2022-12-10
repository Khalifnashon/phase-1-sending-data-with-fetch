// Challenge
// Write your code here
const userData = {
    name: "Steve",
    email: "steve@steve.com",
  };


function submitData( name, email ) {
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(userData)
        })
        .then( function ( response ) {
            return response.json()
        })
        .then( function ( object ) {
            document.body.innerHTML = object[ "id" ]
        })
        .catch( function ( error ) {
        document.body.innerHTML = error.message
        })
  }
  













// Add your code here
// Construct a POST Request Using fetch()
// fetch(destinationURL, configurationObject);
// configuration object contains: method (POST), header. body


/* const configurationObject = {
  method: "POST", // HTTP verb
  headers: {  // metadata or information about the data we want to send
    "Content-Type": "application/json", // data format we are using and accepting
    Accept: "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
};
 */
// Sending the post request
/* fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) { // handling responses in fetch
        // (response object ) this is what the destination server sent back to us
        // This object has a built-in method, json(), that converts the body of the 
        // response from JSON to a plain old JavaScript object
        return response.json();
    })
    .then(function (object) {
    console.log(object);
    }); */
// The JSON server is sending back the data we sent, along with a new piece of data, an id, 
// created by the server



/* We can make our code a bit more general by splitting out the body of our request into 
a variable:

const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject);
 */

// method: "POST" is missing from the object below
/* const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    }); */

