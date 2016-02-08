var myFirebaseRef = new Firebase("https://trial-demo.firebaseio.com/");
myFirebaseRef.child("sub-news1").on("value", function(snapshot) {
    
	document.getElementById("news-1").innerHTML=snapshot.val();
});
myFirebaseRef.child("sub-news2").on("value", function(snapshot) {
  document.getElementById("news-2").innerHTML=snapshot.val();
});
myFirebaseRef.child("sub-news3").on("value", function(snapshot) {
  document.getElementById("news-3").innerHTML=snapshot.val();
});
myFirebaseRef.child("sub-news4").on("value", function(snapshot) {
  document.getElementById("news-4").innerHTML=snapshot.val();
});