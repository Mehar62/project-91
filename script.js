
player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    number_1 = document.getElementById("num1").value;
    number_2 = document.getElementById("num2").value;

    answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + " X " + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    row = question_number + input_box + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
}