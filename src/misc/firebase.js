import firebase from 'firebase/app';

const config = {
  apiKey: 'AIzaSyC88ZMPqmpXvH6pFXEQncCcICNCMyzBUaQ',
  authDomain: 'realtime-chat-app-65611.firebaseapp.com',
  databaseURL: 'https://realtime-chat-app-65611-default-rtdb.firebaseio.com',
  projectId: 'realtime-chat-app-65611',
  storageBucket: 'realtime-chat-app-65611.appspot.com',
  messagingSenderId: '827119961685',
  appId: '1:827119961685:web:53e8f98250c66e017c76dc',
};

const app = firebase.initializeApp(config);
