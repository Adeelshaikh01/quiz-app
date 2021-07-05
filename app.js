var Questions = [
    {
        Qindex: 1,
        question: "Which tag inserts a line horizontally on your web page?",
        options: ["<hr>", "<line>", "<line direction='horizontal'>", "<tr>"],
        answer: "<hr>"
    },
    {
        Qindex: 2,
        question: "What should be the first tag in any HTML document?",
        options: ["<head>", "<title>", "<html>", "<document>"],
        answer: "<document>"
    },
    {
        Qindex: 3,
        question: "Which tag allows you to add a row in a table?",
        options: ["<td>", "<cr>", "<th>", "<tr>"],
        answer: "<tr>"
    },
    {
        Qindex: 4,
        question: "How can you make an e-mail link?",
        options: ["<a href=”xxx@yyy ”>", "<mail href=”xxx@yyy ”>", "<mail>xxx@yyy </mail>", " <a href=”mailto:xxx@yyy ”>"],
        answer: " <a href=”mailto:xxx@yyy ”>"
    },
    {
        Qindex: 5,
        question: "Which tag inserts a line horizontally on your web page?",
        options: ["<hr>", "<line>", "<line direction='horizontal'>", "<tr>"],
        answer: "20"
    },

    
]


// ========= getting and setting username to heading ==============

function valueGet(){
    var heading = document.getElementById("validationCustom01");
    localStorage.setItem("userName", heading.value);
}

var x = localStorage.getItem("userName");
var y = document.getElementById("userHeading");
y.innerText = "Welcome " + x +" to quiz page";

// ===================================================
