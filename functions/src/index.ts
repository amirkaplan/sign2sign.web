import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const updateWindowPlaylist = functions.https.onRequest((request, response) => {

    admin.firestore().doc('players/257091c3-c58d-a1e8-47d4-582aa916c8df').get().then(snapshot => {
        const data = snapshot.data();
        response.send(data);
    }).catch(error => {
        console.log(error);
        response.status(500).send(error);
    });

    // response.send("Hello from Firebase!");
});
