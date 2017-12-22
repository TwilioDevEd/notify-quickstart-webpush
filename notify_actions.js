//.js sample code snippets from https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript
function postRequest(url, data) {
    var XHR = new XMLHttpRequest();
    var urlEncodedData = "";
    var urlEncodedDataPairs = [];
    var name;
  
    // Turn the data object into an array of URL-encoded key/value pairs.
    for(name in data) {
      urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
  
    // Combine the pairs into a single string and replace all %-encoded spaces to 
    // the '+' character; matches the behaviour of browser form submissions.
    urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');
  
    // Define what happens on successful data submission
    XHR.addEventListener('load', function(event) {
      console.log(XHR.responseText);
      alert(XHR.responseText);
    });
  
    // Define what happens in case of error
    XHR.addEventListener('error', function(event) {
      alert('ERROR:' + XHR.responseText);
    });
  
    // Set up our request
    XHR.open('POST', url);
  
    // Add the required HTTP header for form data POST requests
    XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Finally, send our data.
    XHR.send(urlEncodedData);
  }

function register(identity, address){
    var url = "http://127.0.0.1:3000/register";
    
    data = {
        'identity': identity,
        'address': address,
        'binding_type': 'fcm'
    }
    postRequest(url, data);
}

