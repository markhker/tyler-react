import firebase from 'firebase/app'
import 'firebase/database'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { FirebaseConfig } from './keys'
const myFirebaseApp = firebase.initializeApp(FirebaseConfig)

export const rsf = new ReduxSagaFirebase(myFirebaseApp)
