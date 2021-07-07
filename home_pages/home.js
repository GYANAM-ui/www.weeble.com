username = localStorage.getItem('username');
useremail = localStorage.getItem("useremail");

newPageTitle = username + "'s " + ' Weeble';
document.querySelector('title').textContent = newPageTitle;

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function download() {
    window.open('https://freekidsbooks.org/wp-content/uploads/2017/01/Alphabet-Cards-Back-to-Back.pdf');
}

function take_quiz1() {
    window.open('https://quizizz.com/admin/quiz/60e587c7b9ad51001b1f378e');
}