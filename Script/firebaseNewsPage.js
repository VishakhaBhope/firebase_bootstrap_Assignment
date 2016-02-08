var hash1 = window.location.hash.substring(1);	
var myFirebaseRef = new Firebase("https://trial-demo.firebaseio.com/");
if(hash1=="news-1"){
myFirebaseRef.child("news1").on("value", function(snapshot) { 
	document.getElementById("hash1").innerHTML=snapshot.val();
});
}
else if(hash1=="news-2"){
myFirebaseRef.child("news2").on("value", function(snapshot) { 
	document.getElementById("hash1").innerHTML=snapshot.val();
});
}
if(hash1=="news-3"){
myFirebaseRef.child("news3").on("value", function(snapshot) { 
	document.getElementById("hash1").innerHTML=snapshot.val();
});
}
if(hash1=="news-4"){
myFirebaseRef.child("news4").on("value", function(snapshot) { 
	document.getElementById("hash1").innerHTML=snapshot.val();
});
}