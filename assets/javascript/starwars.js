$(document).ready(function() {

    var CharacterSelect = false;
    var character = 0;
    var enemypicked = false;
    var enemyHealth = 100;
    var enemyPower = 100;
    var characterPower;
    var characterHealth;
    var snokeDefeated = false;
    var lukeDefeated = false;
    var yodaDefeated = false;
    var maceDefeated = false;
    var restart = false;
    var counter = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    $("#CharacterOneImage").click(function () {
        $("#attack").show();
        if (CharacterSelect === false){
            $("#CharacterOne").hide();
            CharacterSelect = true;
            $("#heading").html("Choose your Opponent");
            $("#CharacterTwo").css("margin-left", "26vw");
            character = 1;
            characterPower = 10;
            characterHealth = 100;
            $("#CharacterOneText").append("<br><br><p id='characterPower'></p>");
            $("#CharacterOneText").append("<br><p id='characterHealth'></p>");
            $("#characterHealth").html("Health: " +characterHealth);
            $("#characterPower").html("Power: " +characterPower);
        }
        else if (character === 2) {
            enemyHealth = 100;
            enemyPower = 10;
            $("#heading").html("Attack your enemy!");
            $("#CharacterOneText").append("<br><br><p id='enemyPower'></p>");
            $("#CharacterOneText").append("<br><p id='enemyHealth'></p>");
            $("#enemyHealth").html("Health: " +enemyHealth);
            $("#enemyPower").html("Power: " + enemyPower);
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterOne").css("margin-left", "59vw");
            $("#CharacterTwo").css("margin-left", "26vw");
            $("#CharacterTwo").show();
            $("#CharacterThree").hide();
            $("#CharacterFour").hide();
            enemypicked = 1;
        }
        else if (character === 3) {
            enemyHealth = 100;
            enemyPower = 10;
            $("#heading").html("Attack your enemy!");
            $("#CharacterOneText").append("<br><br><p id='enemyPower'></p>");
            $("#CharacterOneText").append("<br><p id='enemyHealth'></p>");
            $("#enemyHealth").html("Health: " +enemyHealth);
            $("#enemyPower").html("Power: " + enemyPower);
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterOne").css("margin-left", "59vw");
            $("#CharacterThree").css("margin-left", "26vw");
            $("#CharacterThree").show();
            $("#CharacterTwo").hide();
            $("#CharacterFour").hide();
            enemypicked = 1;
        }
        else if (character === 4) {
            enemyHealth = 100;
            enemyPower = 10;
            $("#heading").html("Attack your enemy!");
            $("#CharacterOneText").append("<br><br><p id='enemyPower'></p>");
            $("#CharacterOneText").append("<br><p id='enemyHealth'></p>");
            $("#enemyHealth").html("Health: " +enemyHealth);
            $("#enemyPower").html("Power: " + enemyPower);
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterOne").css("margin-left", "59vw");
            $("#CharacterFour").css("margin-left", "26vw");
            $("#CharacterFour").show();
            $("#CharacterTwo").hide();
            $("#CharacterThree").hide();
            enemypicked = 1;
        }
    });

    $("#CharacterTwoImage").click(function () {
        $("#attack").show();
        if (CharacterSelect === false){
        $("#CharacterTwo").hide();
        CharacterSelect = true;
        $("#heading").html("Choose your Opponent");
        $("#CharacterOne").css("margin-left", "26vw");
        character = 2;
        characterPower = 80;
        characterHealth = 70;
        $("#CharacterTwoText").append("<br><br><p id='characterPower'></p>");
        $("#CharacterTwoText").append("<br><p id='characterHealth'></p>");
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
        }
        else if (character === 1) {
            enemyHealth = 70;
            enemyPower = 15;
            $("#heading").html("Attack your enemy!");
            $("#CharacterTwoText").append("<br><br><p id='enemyPower2'></p>");
            $("#CharacterTwoText").append("<br><p id='enemyHealth2'></p>");
            $("#enemyHealth2").html("Health: " +enemyHealth);
            $("#enemyPower2").html("Power: " + enemyPower);
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterTwo").css("margin-left", "59vw");
            $("#CharacterOne").css("margin-left", "26vw");
            $("#CharacterOne").show();
            $("#CharacterThree").hide();
            $("#CharacterFour").hide();
            enemypicked = 2;
        }
        else if (character === 3) {
            enemyHealth = 70;
            enemyPower = 15;
            $("#heading").html("Attack your enemy!");
            $("#CharacterTwoText").append("<br><br><p id='enemyPower2'></p>");
            $("#CharacterTwoText").append("<br><p id='enemyHealth2'></p>");
            $("#enemyHealth2").html("Health: " +enemyHealth);
            $("#enemyPower2").html("Power: " + enemyPower);
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterTwo").css("margin-left", "59vw");
            $("#CharacterThree").css("margin-left", "26vw");
            $("#CharacterThree").show();
            $("#CharacterOne").hide();
            $("#CharacterFour").hide();
            enemypicked = 2; 
        }
        else if (character === 4) {
            enemyHealth = 70;
            enemyPower = 15;
            $("#heading").html("Attack your enemy!");
            $("#CharacterTwoText").append("<br><br><p id='enemyPower2'></p>");
            $("#CharacterTwoText").append("<br><p id='enemyHealth2'></p>");
            $("#enemyHealth2").html("Health: " +enemyHealth);
            $("#enemyPower2").html("Power: " + enemyPower);
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterTwo").css("margin-left", "59vw");
            $("#CharacterFour").css("margin-left", "26vw");
            $("#CharacterFour").show();
            $("#CharacterOne").hide();
            $("#CharacterThree").hide();
            enemypicked = 2; 
        }
    });

    $("#CharacterThreeImage").click(function () {
        $("#attack").show();
        if (CharacterSelect === false){
        $("#CharacterThree").hide();
        CharacterSelect = true;
        $("#heading").html("Choose your Opponent");
        $("#CharacterOne").css("margin-left", "26vw");
        character = 3;
        characterPower = 20;
        characterHealth = 105;
        $("#CharacterThreeText").append("<br><br><p id='characterPower'></p>");
        $("#CharacterThreeText").append("<br><p id='characterHealth'></p>");
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
        }
        else if (character === 2) {
            enemyHealth = 150;
            enemyPower = 20;
            $("#heading").html("Attack your enemy!");
            $("#CharacterThreeText").append("<br><br><p id='enemyPower3'></p>");
            $("#CharacterThreeText").append("<br><p id='enemyHealth3'></p>");
            $("#enemyHealth3").html("Health: " +enemyHealth);
            $("#enemyPower3").html("Power: " + enemyPower);
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterThree").css("margin-left", "59vw");
            $("#CharacterTwo").css("margin-left", "26vw");
            $("#CharacterTwo").show();
            $("#CharacterOne").hide();
            $("#CharacterFour").hide();
            enemypicked = 3;  
        }
        else if (character === 1) {
            enemyHealth = 150;
            enemyPower = 20;
            $("#heading").html("Attack your enemy!");
            $("#CharacterThreeText").append("<br><br><p id='enemyPower3'>heyyyy</p>");
            $("#CharacterThreeText").append("<br><p id='enemyHealth3'></p>");
            $("#enemyHealth3").html("Health: " +enemyHealth);
            $("#enemyPower3").html("Power: " + enemyPower);
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterThree").css("margin-left", "59vw");
            $("#CharacterOne").css("margin-left", "26vw");
            $("#CharacterOne").show();
            $("#CharacterTwo").hide();
            $("#CharacterFour").hide();
            enemypicked = 3;  
        }
        else if (character === 4) {
            enemyHealth = 150;
            enemyPower = 20;
            $("#heading").html("Attack your enemy!");
            $("#CharacterThreeText").append("<br><br><p id='enemyPower3'></p>");
            $("#CharacterThreeText").append("<br><p id='enemyHealth3'></p>");
            $("#enemyHealth3").html("Health: " +enemyHealth);
            $("#enemyPower3").html("Power: " + enemyPower);
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterThree").css("margin-left", "59vw");
            $("#CharacterFour").css("margin-left", "26vw");
            $("#CharacterFour").show();
            $("#CharacterTwo").hide();
            $("#CharacterOne").hide();
            enemypicked = 3;  
        }
    });

    $("#CharacterFourImage").click(function () {
        $("#attack").show();
        if (CharacterSelect === false){
        $("#CharacterFour").hide();
        CharacterSelect = true;
        $("#heading").html("Choose your Opponent");
        $("#CharacterOne").css("margin-left", "26vw");
        character = 4;
        characterPower = 70;
        characterHealth = 50;
        $("#CharacterFourText").append("<br><br><p id='characterPower'></p>");
        $("#CharacterFourText").append("<br><p id='characterHealth'></p>");
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
        }
        else if (character === 2) {
            enemyHealth = 50;
            enemyPower = 30;
            $("#heading").html("Attack your enemy!");
            $("#CharacterFourText").append("<br><br><p id='enemyPower4'></p>");
            $("#CharacterFourText").append("<br><p id='enemyHealth4'></p>");
            $("#enemyHealth4").html("Health: " +enemyHealth);
            $("#enemyPower4").html("Power: " + enemyPower);
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterTwo").css("position", "absolute");
            $("#CharacterFour").css("margin-left", "59vw");
            $("#CharacterTwo").css("margin-left", "26vw");
            $("#CharacterTwo").show();
            $("#CharacterOne").hide();
            $("#CharacterThree").hide();
            enemypicked = 4;   
        }
        else if (character === 3) {
            enemyHealth = 50;
            enemyPower = 30;
            $("#heading").html("Attack your enemy!");
            $("#CharacterFourText").append("<br><br><p id='enemyPower4'></p>");
            $("#CharacterFourText").append("<br><p id='enemyHealth4'></p>");
            $("#enemyHealth4").html("Health: " +enemyHealth);
            $("#enemyPower4").html("Power: " + enemyPower);
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterThree").css("position", "absolute");
            $("#CharacterFour").css("margin-left", "59vw");
            $("#CharacterThree").css("margin-left", "26vw");
            $("#CharacterThree").show();
            $("#CharacterOne").hide();
            $("#CharacterTwo").hide();
            enemypicked = 4;  
        }
        else if (character === 1) {
            enemyHealth = 50;
            enemyPower = 30;
            $("#heading").html("Attack your enemy!");
            $("#CharacterFourText").append("<br><br><p id='enemyPower4'></p>");
            $("#CharacterFourText").append("<br><p id='enemyHealth4'></p>");
            $("#enemyHealth4").html("Health: " +enemyHealth);
            $("#enemyPower4").html("Power: " + enemyPower);
            $("#CharacterFour").css("position", "absolute");
            $("#CharacterOne").css("position", "absolute");
            $("#CharacterFour").css("margin-left", "59vw");
            $("#CharacterOne").css("margin-left", "26vw");
            $("#CharacterOne").show();
            $("#CharacterThree").hide();
            $("#CharacterTwo").hide();
            enemypicked = 4;  
        }
    });


$("#attack").click(function () {
    
    if (enemypicked === 1) {
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        if (character === 2) {
            characterPower = characterPower + 35;
            if (enemyHealth <= 0 && maceDefeated === false && yodaDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").show();
                $("#CharacterThree").show();
                $("#heading").html("Skywalker has been defeated! Choose your next foe!");
                $("#CharacterThree").css("margin-left", "35vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 3) {
            characterPower = characterPower + 5;
            if (enemyHealth <= 0 && snokeDefeated === false && yodaDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterTwo").show();
                $("#heading").html("Skywalker has been defeated! Choose your next foe!");
                $("#CharacterTwo").css("margin-left", "35vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").hide();
                $("#CharacterTwo").show();
                $("#CharacterTwo").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 4) {
            characterPower = characterPower * 2;
            if (enemyHealth <= 0 && maceDefeated === false && snokeDefeated == false) {
                $("#CharacterOne").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterTwo").show();
                $("#heading").html("Skywalker has been defeated! Choose your next foe!");
                $("#CharacterTwo").css("margin-left", "35vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").hide();
                $("#CharacterTwo").show();
                $("#CharacterTwo").css("margin-left", "42vw");
                lukeDefeated = true;
                $("#attack").hide();
            }
        }
        $("#enemypower").html("Power: " +enemyPower);
        $("#enemyHealth").html("Health: " +enemyHealth);
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }

    if (enemypicked === 2) {
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        if (character === 1) {
            characterPower = characterPower + 40;
            if (enemyHealth <= 0 && maceDefeated === false && yodaDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").show();
                $("#CharacterThree").show();
                $("#heading").html("Snoke has been defeated! Choose your next foe!");
                $("#CharacterThree").css("margin-left", "35vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 3) {
            characterPower = characterPower + 5;
            if (enemyHealth <= 0 && lukeDefeated === false && yodaDefeated === false) {
                $("#CharacterThree").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").show();
                $("#CharacterOne").show();
                $("#heading").html("Snoke has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Luke is up next! May the force be with you!");
                $("#CharacterThree").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 4) {
            characterPower = characterPower * 2;
            if (enemyHealth <= 0 && lukeDefeated === false && maceDefeated === false) {
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterOne").show();
                $("#CharacterThree").show();
                $("#heading").html("Snoke has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Skywalker is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                snokeDefeated = true;
                $("#attack").hide();
            }
        }
        $("#enemyPower2").html("Power: " +enemyPower);
        $("#enemyHealth2").html("Health: " +enemyHealth);
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }

    if (enemypicked === 3) {
        console.log(enemyHealth);
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        if (character === 2) {
            characterPower = characterPower + 35;
            if (enemyHealth <= 0 && lukeDefeated === false && yodaDefeated === false) {
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterFour").show();
                $("#heading").html("Mace has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                maceDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Master Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Skywalker is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 1) {
            characterPower = characterPower + 40;
            if (enemyHealth <= 0 && snokeDefeated === false && yodaDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterTwo").show();
                $("#heading").html("Mace has been defeated! Choose your next foe!");
                $("#CharacterTwo").css("margin-left", "35vw");
                maceDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Yoda is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && yodaDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").show();
                $("#CharacterFour").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 4) {
            characterPower = characterPower * 2;
            if (enemyHealth <= 0 && lukeDefeated === false && snokeDefeated === false) {
                $("#CharacterFour").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterTwo").show();
                $("#heading").html("Mace has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                maceDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").hide();
                $("#CharacterTwo").show();
                $("#CharacterTwo").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Skywalker is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                maceDefeated = true;
                $("#attack").hide();
            }
        }
        $("#enemyPower3").html("Power: " +enemyPower);
        $("#enemyHealth3").html("Health: " +enemyHealth);
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }

    if (enemypicked === 4) {
        enemyHealth = enemyHealth - characterPower;
        characterHealth = characterHealth - enemyPower;
        if (character === 2) {
            characterPower = characterPower + 35;
            if (enemyHealth <= 0 && lukeDefeated === false && maceDefeated === false) {
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterOne").show();
                $("#CharacterThree").show();
                $("#heading").html("Yoda has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Skywalker is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 1) {
            characterPower = characterPower + 40;
            if (enemyHealth <= 0 && snokeDefeated === false && maceDefeated === false) {
                $("#CharacterOne").hide();
                $("#CharacterFour").hide();
                $("#CharacterTwo").show();
                $("#CharacterThree").show();
                $("#heading").html("Yoda has been defeated! Choose your next foe!");
                $("#CharacterTwo").css("margin-left", "35vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Master Windu is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterTwo").hide();
                $("#CharacterFour").hide();
                $("#CharacterThree").show();
                $("#CharacterThree").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && maceDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterTwo").show();
                $("#CharacterTwo").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
        }
        if (character === 3) {
            characterPower = characterPower + 5;
            if (enemyHealth <= 0 && lukeDefeated === false && snokeDefeated === false) {
                $("#CharacterThree").hide();
                $("#CharacterFour").hide();
                $("#CharacterOne").show();
                $("#CharacterTwo").show();
                $("#heading").html("Yoda has been defeated! Choose your next foe!");
                $("#CharacterOne").css("margin-left", "35vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
            else if (enemyHealth <= 0 && lukeDefeated === true) {
                $("#heading").html("Snoke is up next! May the force be with you!");
                $("#CharacterOne").hide();
                $("#CharacterThree").hide();
                $("#CharacterFour").hide();
                $("#CharacterTwo").show();
                $("#CharacterTwo").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }

            else if (enemyHealth <= 0 && snokeDefeated === true) {
                $("#heading").html("Skywalker is up next! May the force be with you!");
                $("#CharacterFour").hide();
                $("#CharacterTwo").hide();
                $("#CharacterThree").hide();
                $("#CharacterOne").show();
                $("#CharacterOne").css("margin-left", "42vw");
                yodaDefeated = true;
                $("#attack").hide();
            }
        }
        $("#enemyPower4").html("Power: " +enemyPower);
        $("#enemyHealth4").html("Health: " +enemyHealth);
        $("#characterHealth").html("Health: " +characterHealth);
        $("#characterPower").html("Power: " +characterPower);
    }

    if (characterHealth <=0) {
        $("#heading").html("You have been Defeated! Try Again!");
        $("#CharacterOne").show();
        $("#CharacterTwo").show();
        $("#CharacterThree").show();
        $("#CharacterFour").show();
        $("#CharacterOneText").empty();
        $("#CharacterOneText").html("Luke Skywalker");
        $("#CharacterTwoText").empty();
        $("#CharacterTwoText").html("Snoke");
        $("#CharacterThreeText").empty();
        $("#CharacterThreeText").html("Mace Windu");
        $("#CharacterFourText").empty();
        $("#CharacterFourText").html("Yoda");
        $("#CharacterOne").css("float", "left");
        $("#CharacterTwo").css("float", "left");
        $("#CharacterThree").css("float", "left");
        $("#CharacterFour").css("float", "left");
        $("#CharacterOne").css("margin-left", "16vw");
        $("#CharacterTwo").css("margin-left", "0");
        $("#CharacterThree").css("margin-left", "0");
        $("#CharacterFour").css("margin-left", "0");
        $("#CharacterOne").css("position", "relative");
        $("#CharacterTwo").css("position", "relative");
        $("#CharacterThree").css("position", "relative");
        $("#CharacterFour").css("position", "relative");
        $("#attack").html("Attack");
        $("#defeatedLuke").hide();
        $("#defeatedMace").hide();
        $("#defeatedSnoke").hide();
        $("#defeatedYoda").hide();
        $("#defeatedEnemies").hide();
        counter = 0;
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        CharacterSelect = false;
        character = 0;
        enemypicked = false;
        enemyHealth = 100;
        enemyPower = 100;
        characterPower;
        characterHealth;
        snokeDefeated = false;
        lukeDefeated = false;
        yodaDefeated = false;
        maceDefeated = false;
    }

    if (restart === true) {
        $("#heading").html("Try with a new character!");
        $("#CharacterOne").show();
        $("#CharacterTwo").show();
        $("#CharacterThree").show();
        $("#CharacterFour").show();
        $("#CharacterOneText").empty();
        $("#CharacterOneText").html("Luke Skywalker");
        $("#CharacterTwoText").empty();
        $("#CharacterTwoText").html("Snoke");
        $("#CharacterThreeText").empty();
        $("#CharacterThreeText").html("Mace Windu");
        $("#CharacterFourText").empty();
        $("#CharacterFourText").html("Yoda");
        $("#CharacterOne").css("float", "left");
        $("#CharacterTwo").css("float", "left");
        $("#CharacterThree").css("float", "left");
        $("#CharacterFour").css("float", "left");
        $("#CharacterOne").css("margin-left", "16vw");
        $("#CharacterTwo").css("margin-left", "0");
        $("#CharacterThree").css("margin-left", "0");
        $("#CharacterFour").css("margin-left", "0");
        $("#CharacterOne").css("position", "relative");
        $("#CharacterTwo").css("position", "relative");
        $("#CharacterThree").css("position", "relative");
        $("#CharacterFour").css("position", "relative");
        $("#CharacterOneText").show();
        $("#CharacterTwoText").show();
        $("#CharacterThreeText").show();
        $("#CharacterFourText").show();
        $("#attack").html("Attack");
        $("#defeatedLuke").hide();
        $("#defeatedMace").hide();
        $("#defeatedSnoke").hide();
        $("#defeatedYoda").hide();
        $("#defeatedEnemies").hide();
        counter = 0;
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        CharacterSelect = false;
        character = 0;
        enemypicked = false;
        enemyHealth = 100;
        enemyPower = 100;
        characterPower;
        characterHealth;
        snokeDefeated = false;
        lukeDefeated = false;
        yodaDefeated = false;
        maceDefeated = false;
        restart = false;
    }

    if (characterHealth !== 0 && yodaDefeated === true && lukeDefeated === true && snokeDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterTwo").hide();
        $("#CharacterThree").show();
        $("#CharacterFour").hide();
        $("#CharacterThreeText").hide();
        $("#CharacterThree").css("margin-left", "42vw");
        $("#attack").show();
        restart = true;
        $("#attack").html("NEW GAME");

    }

    if (characterHealth !== 0 && yodaDefeated === true && lukeDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterThree").hide();
        $("#CharacterTwo").show();
        $("#CharacterFour").hide();
        $("#CharacterTwo").css("margin-left", "42vw");
        $("#CharacterTwoText").hide();
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");


    }

    if (characterHealth !== 0 && snokeDefeated === true && lukeDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterOne").hide();
        $("#CharacterThree").hide();
        $("#CharacterFour").show();
        $("#CharacterTwo").hide();
        $("#CharacterFour").css("margin-left", "42vw");
        $("#CharacterFourText").hide();
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");


    }

    if (characterHealth !== 0 && snokeDefeated === true && yodaDefeated === true && maceDefeated === true) {
        $("#heading").html("You are the most powerful force user in the galaxy!");
        $("#CharacterTwo").hide();
        $("#CharacterThree").hide();
        $("#CharacterOne").show();
        $("#CharacterFour").hide();
        $("#CharacterOne").css("margin-left", "42vw");
        restart = true;
        $("#attack").show();
        $("#attack").html("NEW GAME");
        $("#CharacterOnerText").hide();

    }

    if (lukeDefeated === true){
        $("#defeatedEnemies").show();
        $("#defeatedLuke").show();
        if (a === 0) {
            counter = counter + 1;
        }
        a = 1;
        if (counter === 1){
            $("#defeatedEnemies").css("left", "42%");
        }
        if (counter === 2){
            $("#defeatedEnemies").css("left", "36%");
        }
        if (counter === 3){
            $("#defeatedEnemies").css("left", "27%");
        }
    }

    if (maceDefeated === true){
        $("#defeatedEnemies").show();
        $("#defeatedMace").show();
        if (b === 0) {
            counter = counter + 1;
        }
        b = 1;
        if (counter === 1){
            $("#defeatedEnemies").css("left", "42%");
        }
        if (counter === 2){
            $("#defeatedEnemies").css("left", "36%");
        }
        if (counter === 3){
            $("#defeatedEnemies").css("left", "27%");
        }
    }

    if (yodaDefeated === true){
        $("#defeatedEnemies").show();
        $("#defeatedYoda").show();
        if (c === 0) {
            counter = counter + 1;
        }
        c = 1;
        if (counter === 1){
            $("#defeatedEnemies").css("left", "42%");
        }
        if (counter === 2){
            $("#defeatedEnemies").css("left", "36%");
        }
        if (counter === 3){
            $("#defeatedEnemies").css("left", "27%");
        }
    }

    if (snokeDefeated === true){
        $("#defeatedEnemies").show();
        $("#defeatedSnoke").show();
        if (d === 0) {
            counter = counter + 1;
        }
        d = 1;
        if (counter === 1){
            $("#defeatedEnemies").css("left", "42%");
        }
        if (counter === 2){
            $("#defeatedEnemies").css("left", "34.5%");
        }
        if (counter === 3){
            $("#defeatedEnemies").css("left", "27%");
        }
    }
    console.log(counter);
    
});



});

