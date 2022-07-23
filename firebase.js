import {initializeApp,cert} from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"
import {credentials} from "./credentials.js"

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

// ready to do anything with the database
console.log("Database is ready")

db.collection("movies").get()
.then(moviesCollection => {
    moviesCollection.docs.forEach(movie => {
        console.log(movie.data())
    })
})
.catch(err => {
    console.error(err)
})