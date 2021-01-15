function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numbertoChoice(RdmtoRpsInt());

    results = decideWinner(humanChoice, botChoice);//[0,1] human lost | bot won
    console.log(results);

    message = finalMessage(results);// {'message':'You won!','color:green'}
    console.log(message);
    rpsFrontend(yourChoice.id, botChoice.id, message);
} 
function RdmtoRpsInt() {
    return Math.floor(Math.random() * 3);

}
function numbertoChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, ComputerChoice) {
    var rpsdatabase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
       
    };
    var yourscore = rpsdatabase[yourChoice, ComputerChoice];
    var computerscore = rpsdatabase[ComputerChoice, yourChoice];
    return [yourscore, ComputerChoice];
}
function finalMessage(yourscore, computerscore) {
    if(yourscore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    }else if(yourscore === 0.5) {
        return { 'message': 'You tied!', 'color': 'yellow' };
    }else{ 
        return { 'message': 'You Won!', 'color': 'green' };
    }

}
function rpsFrontend(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
   
    humanDiv.innerHTML = "<img src= '" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>";
    messageDiv.innerHTML = "<h1 style ='color" + finalMessage['color'] + ";font-size:60px; padding:30px; '>" + finalMessage['message']+ "</h1>";
    botDiv.innerHTML = "<img src= '" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
   



}