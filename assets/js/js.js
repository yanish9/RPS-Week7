


var wins =0 ;
var losses= 0;

var player;

var database = firebase.database();

var divScore = $(".score");





function displayOptions (argument) {
	
	var paper = $("<div><br>");
	paper.addClass("paper btn");
	paper.text("Paper");
	var scissors = $("<div>");
	scissors.addClass("scissors btn");
	scissors.text("scissors");
	var rock = $("<div>");
	rock.addClass("rock btn");
	rock.text("rock");

	var div = $("<div class='opt'>");
	div.append(paper);
	div.append("<br>");
	div.append(scissors);
	div.append("<br>");
	div.append(rock);

if (player == "player1") {
	$(".one>.box").append(div);
}
else if (player == "player2") 
{
	$(".two>.box").append(div);	
}

console.log(player);

}

function startGame () {
	

}


database.ref("users/player1").onDisconnect().remove();
database.ref("users/player2").onDisconnect().remove();


database.ref().on("child_added", PlayersReady , errors);



function PlayersReady (snapshot) {

console.log(snapshot.val());

console.log("wa"+snapshot.child("player2").exists());
	//if (snapshot.child("player1").exists() ) {
	
if (snapshot.child("player1").exists() && snapshot.child("player2").exists()) {

console.log("2");

$(".one>.box>.name").text(snapshot.val().player1.name);

divScore.append("Wins "+ snapshot.val().player1.wins + " Losses "+ snapshot.val().player1.losses);


$(".two>.box>.name").text(snapshot.val().player2.name);


//	ref().removeEventListener(listen);
}



}


function updateScore (argument) {
	
	

}


database.ref().on("child_added", ok, errors);

function ok (argument) {

	console.log("Playerrrrrssssss"  + argument.val());
	// body... 
}

 
$(".nameButton").on("click", okName);

function okName (argument) {

var name = $("#name").val();


// database.ref("users").on("value", updateUI, errors);






var ref = database.ref("users");
ref.once("value")
  .then(function(snapshot) {
    var a = snapshot.exists();  // true
    if (!snapshot.child("player1").exists()) {
   console.log(name);

   database.ref("users/player1").set({
   	name:name,
   	wins:wins,
   	losses:losses
   });

player = "player1";
 $(".one>.box>.name").text(name);
displayOptions();

}



else
{

database.ref("users/player2").set({
   	name:name,
   	wins:wins,
   	losses:losses
   });

player = "player2";
 $(".two>.box>.name").text(name);
 displayOptions();
}


console.log(snapshot.val());

  });


 
}
 










	var database = firebase.database();


	database.ref().on("child_added", changed, errors);

	function changed (snap) {

console.log(snap.val().name);

if (snap.val().name != "") {

		$("#list").append("<br>"+snap.val().name);

}



	}




	function errors (err) {
		console.log(err.code);
	}

	var store;

	$(".button").on("click", add);

	function add (argument) {
		var word = $("#word").val();

		store = word;

		database.ref().push({
			name: word
		});

		
		/*	database.ref().push({
			name: ""
		});		

			database.ref().push({
			name: word
		});*/
	

		// body... 
	}


