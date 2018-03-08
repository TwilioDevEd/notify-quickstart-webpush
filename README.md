# Twilio Notify Quickstart for Web Push

This application should give you a ready-made starting point for writing your
own web push app with Twilio Notify. Before we begin, you will need to set up a
web server application that communicates with your web application and Twilio Notify backend.

## Download a Twilio SDK Starter Server project

You can download one of the **web server application** in these languages:

| Language  | GitHub Repo |
| :-------------  |:------------- |
PHP | [sdk-starter-php](https://github.com/TwilioDevEd/sdk-starter-php/)
Ruby | [sdk-starter-ruby](https://github.com/TwilioDevEd/sdk-starter-ruby/)
Python | [sdk-starter-python](https://github.com/TwilioDevEd/sdk-starter-python/)
Node.js | [sdk-starter-node](https://github.com/TwilioDevEd/sdk-starter-node/)
Java | [sdk-starter-java](https://github.com/TwilioDevEd/sdk-starter-java/)

You'll only need to download one of those. Not sure which one to choose?
The [Node.js](https://github.com/TwilioDevEd/sdk-starter-node/) server starter kit
is pretty easy to set up and follow along with.

Follow the directions in the **README** on one of the above servers, and get the web server up
and running to make sure you have everything configured right for the demos you are interested in.

## Setting up the application

The application uses [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) from Google. In order to get this app running, you need to collect the Firebase Sender ID and Web API Key and configure the demo app to your Firebase project. To obtain these keys, go to [Firebase Console](https://console.firebase.google.com/) and open your Project Settings. 

In the `index.html` file, insert your Web API Key and Firebase Sender ID.

	// Initialize Firebase
            var config = {
                apiKey: "<ENTER FIREBASE WEB API KEY HERE>",
                messagingSenderId: "<ENTER FIREBASE SENDER ID HERE>"
            };

In the `firebase-messaging-sw.js` file, you need to add your Firebase Sender ID

	// Initialize the Firebase app in the service worker by passing in the
	// messagingSenderId.
	firebase.initializeApp({
    	'messagingSenderId': '<ENTER FIREBASE SENDER ID HERE>'
	});

Now you are set to go! You will have to start 2 services - web server to host the Web Push App (to serve the index.html) and the “backend” server app, the one that manages the Bindings and Notifications with Twilio.

If you have not already some so, Start up the “backend” server by navigating to sdk-starter-node folder and starting the backend service:

	$ npm start

	> sdk-starter-node@1.0.0 start sdk-starter-node
	> node app.js

	Express server running on *:3000

At this point you should be able to see your service up and running by opening [http://localhost:3000](http://localhost:3000) in browser.

You will also need to fire up a web service of some kind to serve the Web Push App on localhost, there are multiple easy ways to do that. In this example we will use one liner from Python. Go to your Web Push App directory and in terminal window start the web server:


	$ python -m SimpleHTTPServer
	Serving HTTP on 0.0.0.0 port 8000 ...

At this point you should be able to see your Web Push App by opening [http://localhost:8000](http://localhost:8000) in browser.

In your [Web Push App](http://localhost:8000) you will need to create a Binding between user Identity and the browser using the web app. User Identity can be any unique identifier you choose, like GUID. You can find out more about Identity and Bindings in the [Binding resource reference API](https://www.twilio.com/docs/api/notifications/rest/bindings).

*NB:* if you do not see a device token in the Address bar of your Web Push App on the first time the app is launched,  suggest you reload the page. The demo app code is naive and does not handle races between the App asking the permission and successfully obtaining a token. Also worth checking the browser Developer console to get hints for issues.

And finally, visit the Notify page on your **web server application**,
and send a notification to the identity you registered as to receive a push notification in your app.

## License

MIT
