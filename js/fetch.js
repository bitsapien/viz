  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBV3hN8yECFq0y_awa4_UdddnuFaNNsKcg",
    authDomain: "viz-persist.firebaseapp.com",
    databaseURL: "https://viz-persist.firebaseio.com",
    projectId: "viz-persist",
    storageBucket: "viz-persist.appspot.com",
    messagingSenderId: "33839284530"
  };
  firebase.initializeApp(config);
var database = firebase.database(); 



function fetch_resource(name){
  var u = [];
  database.ref(name+'/').orderByChild('id').once('value').then(function(snapshot) {
    s = snapshot.val();
    for(var i=1;i<s.length;i++){
    	if(s[i]){
      		u.push(s[i]);
    	}
  }
  });
  return u;
}
var	users       = fetch_resource('users');
var	groups      = fetch_resource('groups');
var	likes       = fetch_resource('likes');
var	user_likes  = fetch_resource('user_likes');
var	user_groups = fetch_resource('user_groups');

var refresh_data = function(){
	users       = fetch_resource('users');
	groups      = fetch_resource('groups');
	likes       = fetch_resource('likes');
	user_likes  = fetch_resource('user_likes');
	user_groups = fetch_resource('user_groups');
}
