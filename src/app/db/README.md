# Import data from JSON to Cloud Firestore (script)
[Source](https://hackernoon.com/filling-cloud-firestore-with-data-3f67d26bd66e)

## Install Firebase Admin Node.js SDK
Install `firebase-admin` npm module locally to the folder of the script.

```bash
$ npm install --save firebase-admin
```
## Get service-key 
To autorize our application we need to export **service key**.

In the **Firebase Console** your project click on the settings wheel next to the Overview section and choose **Users and permissions** option.
![alt text](https://cdn-images-1.medium.com/max/1000/1*091DzZbQuErfgt6XVj7_lg.png)

Choose **Service accounts** tab and fill it with data as shown in the screenshot below. Fill checkbox **Furnish a new private key**, so you will be able to download your key and use it in the script. After creation, you will be asked for the location to save the key.  Save it as `service-key.json` to folder of the script.
![alt text](https://cdn-images-1.medium.com/max/1250/1*LPwC9xX8jr5iSOIxEUTP1w.png)

## Data model

Create file `data.json` which contains your data model. Create it to the folder of the script.
Structure of data model see at [Firebase Structure data](https://firebase.google.com/docs/database/web/structure-data)

## Use JSON to Firebase script  

### Edit script file json-to-firestore.js ###

Edit `databaseURL` with you fire-database name in section _initializeApp_.
```javascript
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://<fire_database_name>.firebaseio.com"
}); 
```
### Run script below ###

```bash
$ node json-to-firestore.js
```

Script relies on few files:

`firebase-admin` — npm module 

`service-key.json` — file we’ve generated in the **Get service-key** section

`data.json` — the data we want to push to our Firestore


