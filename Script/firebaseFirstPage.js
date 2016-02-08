var myFirebaseRef = new Firebase("https://trial-demo.firebaseio.com/");
myFirebaseRef.child("news1").on("value", function(snapshot) {
    
	document.getElementById("news-1").innerHTML=snapshot.val();
});
myFirebaseRef.child("news2").on("value", function(snapshot) {
  document.getElementById("news-2").innerHTML=snapshot.val();
});
myFirebaseRef.child("news3").on("value", function(snapshot) {
  document.getElementById("news-3").innerHTML=snapshot.val();
});
myFirebaseRef.child("news4").on("value", function(snapshot) {
  document.getElementById("news-4").innerHTML=snapshot.val();
});
