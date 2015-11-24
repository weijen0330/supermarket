document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Creates a 1000 * 600 canvas at (0, 50)
    var paper = Raphael(0, 50, 1000, 600);
    var backgroundColor = "#001E00";
    var welcomeMsg = document.getElementById("welcome");

    // Displays the details about the grocery
    // and hides the welcome message
    function msgSwap(id) {
        document.getElementById(id).style.display = "block";
        welcomeMsg.style.display = "none";
    }

    // Displays the welcome message
    // and hides the details about the grocery
    function reverseMsgSwap(id) {
        document.getElementById(id).style.display = "none";
        welcomeMsg.style.display = "block";
    }

    // Draws and animates an aisle.
    function aisleConstructor(startX, startY, fillColorHex, animateColorHex, id) {
        // the last number rounds out the sharp angles of the four corners
        var aisle = paper.rect(startX, startY, 40, 400, 10);
        aisle.attr("fill", fillColorHex);
        // gives the shapes white outline
        aisle.attr("stroke", "#fff");
        // changes the color of the aisle when user mouses over
        aisle.mouseover(function() {
           aisle.animate({fill: animateColorHex}, 500);
            msgSwap(id);
        });
        // changes the color of the aisle back when user mouses out
        aisle.mouseout(function() {
            aisle.animate({fill: fillColorHex}, 500);
            reverseMsgSwap(id);
        });
    }

    // Draws and animates a circular food bar
    function circleBarConstructor(startX, startY, animateColorHex, id) {
        var bar = paper.circle(startX, startY, 70);
        bar.attr("stroke", "#fff");
        // transform takes in a transformation string. The first two numbers indicate how big you would like the shape to be scaled.
        bar.mouseover(function() {
            bar.animate({fill: animateColorHex, transform:"S1.2,1.2," + startX +"," + startY}, 1000, "elastic");
            msgSwap(id);
        });
        // transform the shape back to its original size when the user mouses out.
        bar.mouseout(function() {
            bar.animate({fill: backgroundColor, transform:"S1,1," + startX +"," + startY}, 1000, "elastic");
            reverseMsgSwap(id);
        });
    }

    // Draws and animates a square produce bar
    function produceConstructor(startX, startY, animateColorHex, id) {
        var produce = paper.rect(startX, startY, 80, 80);
        produce.attr("stroke", "#fff");
        produce.mouseover(function() {
            produce.animate({fill: animateColorHex}, 1000);
            msgSwap(id);
        });
        produce.mouseout(function() {
            produce.animate({fill: backgroundColor}, 1000);
            reverseMsgSwap(id);
        });
    }
    aisleConstructor(50, 150, "#A5F2F3", "#000080", "icecream");
    aisleConstructor(130, 150, "#A5F2F3", "#000080", "seafood");
    aisleConstructor(210, 150, "#A5F2F3", "#000080", "meat");
    circleBarConstructor(400, 250, "#EE2C2C", "hotcase");
    circleBarConstructor(400, 450,"#55AB55", "saladbar");
    produceConstructor(560, 180, "ff0000", "apples");
    produceConstructor(640, 180, "ffa500", "oranges");
    produceConstructor(560, 260, "421c52", "grapes");
    produceConstructor(640, 260, "999966", "avocados");
    produceConstructor(560, 340, "4f86f7", "blueberries");
    produceConstructor(640, 340, "ff8243", "mangoes");
});