$(document).ready(function() {
    
// load splash page    
    function startPage() {
        splashPage = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(splashPage);
    }
    
    startPage();
    
//button has been clicked
    $("body").on("click", ".start-button", function(event){
        sound.play();
        generateHTML();
        timerWrapper();
    
    });
    
    $("body").on("click", ".answer", function(event){
        //user has picked an answer
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            //correct answer
            clearInterval(theClock);
            generateWin();
        }
        else {
            //wrong answer!
            clearInterval(theClock);
            generateLoss();
        }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
        sound.play();
        resetGame();
    }); 
    
    }); 
    
    function generateTimeoutLoss() {
        unansweredTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Hold up, heyyy?!  Time's up - the correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/LudaTimeout.jpg'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  
    }
    
    function generateWin() {
        correctTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Holla! You got it: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000);  //
    }
    
    function generateLoss() {
        incorrectTally++;
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Whoop-de-whoop, what?! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/Luda.jpg'>";
        $(".mainArea").html(gameHTML);
        setTimeout(wait, 4000); 
    }
    
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    
    function wait() {
        if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
    }
    
    function timerWrapper() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateTimeoutLoss();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Whoomp, there it is - we're done!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timerWrapper();
    }
    
    var splashPage;
    var gameHTML;
    var counter = 30;

    var questionArray = ["Which of the following artists did <strong>not</strong> collaborate with the rapper Russell Jones, better known as 'The O.D.B.,' to release a song?", 
    "Which of the following songs do <strong>not</strong> contain a sample of Missy Elliott's 'Get Ur Freak On'?", 
    "Which of the following artists did <strong>not</strong> collaborate on the hit song 'Holidae In'?", 
    "The video for Technotronic's triple platinum hit 'Pump Up the Jam' featured Congolese model Felly Kilingi lip synching; who actually performed the vocals?", 
    "Which of the following neighborhoods in Los Angeles is <strong>not</strong> typically associated with the 'West Coast' hip-hop sound?", 
    "Which of these performers would be considered a member of the 'East Coast' sound?", 
    "As of 2018, who is the best selling female rap artist of all time?", 
    "Who among these artists were <strong>not</strong> key members of the iconic group 'A Tribe Called Quest'?", 
    "Whose death is <strong>not</strong> classified as an unsolved homicide?",
    "In the video for 'Let Me Clear My Throat' who is <strong>not</strong> peforming?"];

    var answerArray = [
        ["Mariah Carey", "Busta Rhymes", "Kanye West", "Ludacris"], 
        ["'Right Thurr' by Chingy","'Ugly' by Bubba Sparxx","'The Jump Off' by Lil Kim","'I`m Talking to You' by Busta Rhymes"], 
        ["Snoop Dogg", "Ludacris", "Nelly", "Chingy"], 
        ["Ya Kid K","Foxy Brown","Da Brat","Cheryl 'Salt' James"], 
        ["Compton", "Inglewood", "Watts", "Brentwood"], 
        ["The Notorius B.I.G.","Dr. Dre","Tupac Shakur","Ice Cube"], 
        ["Missy Elliott", "Queen Latifah", "Nicki Minaj", "Lil Kim"], 
        ["'Q Tip' Kamaal Fareed","'Phife Dawg' Malik Taylor","Ali Shaheed Muhammad","Trick, please! They were all in the 'Tribe'"],
        ["Jam Master Jay", "The O.D.B.", "Tupac Shakur", "The Notorius B.I.G."],
        ["Doug E. Fresh", "Big Daddy Kane", "Biz Markie", "DJ Kool"]
    ];

    var imageArray = [
    "<img class='center-block img-right' src='assets/images/ODB.jpg'>", 
    "<img class='center-block img-right' src='assets/images/Missy.jpg'>", 
    "<img class='center-block img-right' src='assets/images/HolidaeIn.jpg'>", 
    "<img class='center-block img-right' src='assets/images/YaKidK.jpg'>", 
    "<img class='center-block img-right' src='assets/images/WestCoast.jpg'>", 
    "<img class='center-block img-right' src='assets/images/BigE.jpg'>", 
    "<img class='center-block img-right' src='assets/images/Nicki.jpg'>", 
    "<img class='center-block img-right' src='assets/images/TCQ.jpg'>", 
    "<img class='center-block img-right' src='assets/images/Murder.jpg'>",
    "<img class='center-block img-right' src='assets/images/DJKool.jpg'>"
    ];

    var correctAnswers = [
    "D. Ludacris", 
    "A. 'Right Thurr' by Chingy", 
    "C. Nelly", 
    "A. Ya Kid K", 
    "D. Brentwood", 
    "A. The Notorius B.I.G.", 
    "C. Nicki Minaj", 
    "D. Trick, please! They were all in the 'Tribe'", 
    "B. The O.D.B.",
    "B. Big Daddy Kane"
    ];

    var questionCounter = 0;
    var selectedAnswer;
    var theClock;
    var correctTally = 0;
    var incorrectTally = 0;
    var unansweredTally = 0;
    var sound = new Audio("assets/sound/button-click.mp3");    