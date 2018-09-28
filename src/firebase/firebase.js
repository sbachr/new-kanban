var config = {
  apiKey: 'AIzaSyAf_rJGhKNy1s5U6e4X1C8BEloG3Ep6lwE',
  authDomain: 'kanban-1cc6d.firebaseapp.com',
  databaseURL: 'https://kanban-1cc6d.firebaseio.com',
  projectId: 'kanban-1cc6d',
  storageBucket: 'kanban-1cc6d.appspot.com',
  messagingSenderId: '749095505282'
}
firebase.initializeApp(config)

var db = firebase.database()

export default db
