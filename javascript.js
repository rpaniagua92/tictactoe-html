var computer = 1; //initial the game with the computer
var gamer = "X"; //symbol of the current player

$(document).ready(function () {
	
$(".startGame").on("click", function(){
	
	reset();
	
	if((this).id === "onePlayer"){ //if the game is with the computer
		computer = 1;
	}
	
	if((this).id === "twoPlayers"){ //if the game is with another player
		computer = 0;
	}
	
	$("#startMessage").show().delay(3000).fadeOut(); //hide the start message after 3 seconds
});

$(".option").on("click", function(){ //click in some space
	
	if($(this).val() === ""){ //validate if is not fill
		
		$(this).val(gamer); //fill with the respective symbol
		$(this).css("color", "green");
		var bool = checkIfWin(); //check if the player win
		
		if(bool !== 1 && notDraw() !== 1){ //validate if is not the end of the game or is a draw
		if(computer === 1) //if the next is the computer
		{	gamer = "O";
			makeMove(); //make the move of the computer
			checkIfWin(); //check if the computer win
			gamer = "X"
			}
			
		if(computer === 0) //if the next is an anothe player
		{	if (gamer === "X"){ //switch the symbol for the next player
			gamer = "O"
			}
			else if (gamer === "O"){
			$(this).css("color", "blue");
			gamer = "X"
			}
		}
	}
}
});

function checkIfWin()
{ 	var player="You"; //the player for the win message

	if(gamer === "O" && computer === 1)
	player = "Computer";
	
	if(computer === 0)
	{ if (gamer === "O")
		player = "Player 2";
		else
		player = "Player 1";
	}
	var space1, space2, space3; //the win spaces

  //validate if have one combination for win
  if(((space1 = $("#one")).val() === gamer && (space2 = $("#two")).val() === gamer && (space3 = $("#three")).val() === gamer) ||
	((space1 = $("#four")).val() === gamer && (space2 = $("#five")).val() === gamer && (space3 = $("#six")).val() === gamer) ||
	((space1 = $("#seven")).val() === gamer && (space2 = $("#eight")).val() === gamer && (space3 = $("#nine")).val() === gamer) ||
	((space1 = $("#one")).val() === gamer && (space2 = $("#five")).val() === gamer && (space3 = $("#nine")).val() === gamer) ||
	((space1 = $("#one")).val() === gamer && (space2 = $("#four")).val() === gamer && (space3 = $("#seven")).val() === gamer) ||
	((space1 = $("#two")).val() === gamer && (space2 = $("#five")).val() === gamer && (space3 = $("#eight")).val() === gamer) ||
	((space1 = $("#three")).val() === gamer && (space2 = $("#six")).val() === gamer && (space3 = $("#nine")).val() === gamer) ||
	((space1 = $("#one")).val() === gamer && (space2 = $("#five")).val() === gamer && (space3 = $("#nine")).val() === gamer) ||
	((space1 = $("#three")).val() === gamer && (space2 = $("#five")).val() === gamer && (space3 = $("#seven")).val() === gamer))
  {
	  space1.css("color", "red");
	  space2.css("color", "red");
	  space3.css("color", "red");
	  alert(player + " Win!")
	  reset(); //restart the game
	  return 1;
  }
 return 0;
}

function makeMove()
{
	var space;
	
	//check if can be a combination for win
	if(($("#one").val() === "O" && $("#two").val() === "O" && (space = $("#three")).val() === "")||
	($("#two").val() === "O" && $("#three").val() === "O" && (space = $("#one")).val() === "") ||
	($("#four").val() === "O" && $("#five").val() === "O" && (space = $("#six")).val() === "") ||
	($("#five").val() === "O" && $("#six").val() === "O" && (space = $("#four")).val() === "") ||
	($("#seven").val() === "O" && $("#eight").val() === "O" && (space = $("#nine")).val() === "") ||
	($("#eight").val() === "O" && $("#nine").val() === "O" && (space = $("#seven")).val() === "") ||
	($("#one").val() === "O" && $("#five").val() === "O" && (space = $("#nine")).val() === "") ||
	($("#eight").val() === "O" && $("#nine").val() === "O" && (space = $("#one")).val() === "") ||
	($("#three").val() === "O" && $("#five").val() === "O" && (space = $("#seven")).val() === "") ||
	($("#seven").val() === "O" && $("#five").val() === "O" && (space = $("#three")).val() === "") ||
	($("#one").val() === "O" && $("#three").val() === "O" && (space = $("#two")).val() === "") ||
	($("#four").val() === "O" && $("#six").val() === "O" && (space = $("#five")).val() === "") ||
	($("#seven").val() === "O" && $("#nine").val() === "O" && (space = $("#eight")).val() === "") ||
	($("#one").val() === "O" && $("#seven").val() === "O" && (space = $("#four")).val() === "") ||
	($("#two").val() === "O" && $("#eight").val() === "O" && (space = $("#five")).val() === "") ||
	($("#three").val() === "O" && $("#nine").val() === "O" && (space = $("#six")).val() === "") ||
	($("#one").val() === "O" && $("#five").val() === "O" && (space = $("#nine")).val() === "") ||
	($("#four").val() === "O" && $("#seven").val() === "O" && (space = $("#one")).val() === "") ||
	($("#five").val() === "O" && $("#eight").val() === "O" && (space = $("#two")).val() === "") ||
	($("#six").val() === "O" && $("#nine").val() === "O" && (space = $("#three")).val() === "") ||
	($("#one").val() === "O" && $("#four").val() === "O" && (space = $("#seven")).val() === "") ||
	($("#two").val() === "O" && $("#five").val() === "O" && (space = $("#eight")).val() === "") ||
	($("#three").val() === "O" && $("#six").val() === "O" && (space = $("#nine")).val() === "") ||
	($("#one").val() === "O" && $("#nine").val() === "O" && (space = $("#five")).val() === "") ||
	($("#three").val() === "O" && $("#seven").val() === "O" && (space = $("#five")).val() === ""))
  {
	  space.val("O").css("color", "blue");
  }
  
  //check if can avoid a win combination of the player 
  else {if(($("#one").val() === "X" && $("#two").val() === "X" && (space = $("#three")).val() === "")||
	($("#two").val() === "X" && $("#three").val() === "X" && (space = $("#one")).val() === "") ||
	($("#four").val() === "X" && $("#five").val() === "X" && (space = $("#six")).val() === "") ||
	($("#five").val() === "X" && $("#six").val() === "X" && (space = $("#four")).val() === "") ||
	($("#seven").val() === "X" && $("#eight").val() === "X" && (space = $("#nine")).val() === "") ||
	($("#eight").val() === "X" && $("#nine").val() === "X" && (space = $("#seven")).val() === "") ||
	($("#one").val() === "X" && $("#five").val() === "X" && (space = $("#nine")).val() === "") ||
	($("#eight").val() === "X" && $("#nine").val() === "X" && (space = $("#one")).val() === "") ||
	($("#three").val() === "X" && $("#five").val() === "X" && (space = $("#seven")).val() === "") ||
	($("#seven").val() === "X" && $("#five").val() === "X" && (space = $("#three")).val() === "") ||
	($("#one").val() === "X" && $("#three").val() === "X" && (space = $("#two")).val() === "") ||
	($("#four").val() === "X" && $("#six").val() === "X" && (space = $("#five")).val() === "") ||
	($("#seven").val() === "X" && $("#nine").val() === "X" && (space = $("#eight")).val() === "") ||
	($("#one").val() === "X" && $("#seven").val() === "X" && (space = $("#four")).val() === "") ||
	($("#two").val() === "X" && $("#eight").val() === "X" && (space = $("#five")).val() === "") ||
	($("#three").val() === "X" && $("#nine").val() === "X" && (space = $("#six")).val() === "") ||
	($("#one").val() === "X" && $("#five").val() === "X" && (space = $("#nine")).val() === "") ||
	($("#four").val() === "X" && $("#seven").val() === "X" && (space = $("#one")).val() === "") ||
	($("#five").val() === "X" && $("#eight").val() === "X" && (space = $("#two")).val() === "") ||
	($("#six").val() === "X" && $("#nine").val() === "X" && (space = $("#three")).val() === "") ||
	($("#one").val() === "X" && $("#four").val() === "X" && (space = $("#seven")).val() === "") ||
	($("#two").val() === "X" && $("#five").val() === "X" && (space = $("#eight")).val() === "") ||
	($("#three").val() === "X" && $("#six").val() === "X" && (space = $("#nine")).val() === "") ||
	($("#one").val() === "X" && $("#nine").val() === "X" && (space = $("#five")).val() === "") ||
	($("#three").val() === "X" && $("#seven").val() === "X" && (space = $("#five")).val() === ""))
  {
	  space.val("O").css("color", "blue");
  }
    else
  {
    otherMove(); //make any other move
  }
  }
}

function otherMove()
{
  var space;
  
  //check what space is available
  if($("#five").val() === "")
  {
	  (space = $("#five")).val("O");
  }
  else if($("#one").val() === "")
  {
	  (space = $("#one")).val("O");
  }
  else if($("#nine").val() === "")
  {
    (space = $("#nine")).val("O");
  }
  else if($("#six").val() === "")
  {
    (space = $("#six")).val("O");
  }
  else if($("#two").val() === "")
  {
    (space = $("#two")).val("O");
  }
  else if($("#eight").val() === "")
  {
    (space = $("#eight")).val("O");
  }
  else if($("#three").val() === "")
  {
    (space = $("#three")).val("O");
  }
  else if($("#seven").val() === "")
  {
    (space = $("#seven")).val("O");
  }
  else if($("#four").val() === "")
  {
    (space = $("#four")).val("O");
  }
  space.val("O").css("color", "blue");
}

function notDraw() //check if is a draw
{
  if ($("#one").val() !== "" && $("#two").val() !== "" && $("#three").val() !== "" &&
		$("#four").val() !== "" && $("#five").val() !== "" && $("#six").val() !== "" &&
		$("#seven").val() !== "" && $("#eight").val() !== "" && $("#nine").val() !== ""){
	   alert ("Draw. Play again!");
	   reset();
	  return 1;
  }
	  else
	  return 0;
}

function reset() //restart all the variables and the board
{
  $(".option").val("").css("color", "black"); 
  gamer = "X";
  computer = 1;
}
	
});
