$( document ).ready(function() {
   // Computer selects a random number to be shown at the start of the game
    var Random=Math.floor(Math.random()*101+19)
    // Number should be should be between 19 - 120
    //
    $('#randomNumber').text(Random);
    // Writing random number to the randomNumber id to the html file
    //
    // *** Global Variables *** //
    // Each jewel starts with randon number, so the math.floor function is attached

    var jewelBlue= Math.floor(Math.random()*11+1)
    var jewelGreen= Math.floor(Math.random()*11+1)
    var jewelRed= Math.floor(Math.random()*11+1)
    var jewelYellow= Math.floor(Math.random()*11+1)
    // Random number has to be between 1 - 12

    // user total score
    var userTotalScore= 0; 

    // wins and losses
    var wins= 0;
    var losses = 0;

    // wins losses with .text function so it gets written to their #IDs to the html file
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    
    //function to reset the game, goes through all the steps, creating random 


  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        jewelBlue= Math.floor(Math.random()*11+1);
        jewelGreen= Math.floor(Math.random()*11+1);
        jewelRed= Math.floor(Math.random()*11+1);
        jewelYellow= Math.floor(Math.random()*11+1);
        userTotalScore= 0;
        $('#finalTotal').text(userTotalScore);
        } 
  //adds the wins to the userTotalScore
  function youWin(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //adds the losses to the userTotalScore
  function youLoose(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels, starting with blue Jewel
    $('#one').on ('click', function(){
      userTotalScore = userTotalScore + jewelBlue;
      console.log("New userTotalScore= " + userTotalScore);
      $('#finalTotal').text(userTotalScore); 
            //sets win/lose conditions for the 4 crystals
            // if user total score is equal to the random number, then you win
            // if user total score is greater than randon numner, then you loose

          if (userTotalScore === Random){
            youWin();
          }
          else if ( userTotalScore > Random){
         youLoose();
          }   

     // same on clicl/win/loose logic for the rest of the jewels
    })  
    $('#two').on ('click', function(){
      userTotalScore = userTotalScore + jewelGreen;
      console.log("New userTotalScore= " + userTotalScore);
      $('#finalTotal').text(userTotalScore); 
          if (userTotalScore === Random){
            youWin();
          }
          else if ( userTotalScore > Random){
         youLoose();
          } 
    })  
    $('#three').on ('click', function(){
      userTotalScore = userTotalScore + jewelRed;
      console.log("New userTotalScore= " + userTotalScore);
      $('#finalTotal').text(userTotalScore);
 
            if (userTotalScore === Random){
            youWin();
          }
          else if ( userTotalScore > Random){
         youLoose();
          } 
    })  
    $('#four').on ('click', function(){
      userTotalScore = userTotalScore + jewelYellow;
      console.log("New userTotalScore= " + userTotalScore);
      $('#finalTotal').text(userTotalScore); 
        
            if (userTotalScore === Random){
            youWin();
          }
          else if ( userTotalScore > Random){
         youLoose();
          }
    });   
});    
