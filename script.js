/* =========================================
   UNIMART WELCOME SCREEN
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* Get buttons */
    const getStarted =
        document.getElementById("getStarted");

    const loginBtn =
        document.getElementById("loginBtn");


    /* =========================================
       GET STARTED
    ========================================= */

    getStarted.addEventListener("click", function () {

        window.location.href = "login.html";

    });


    /* =========================================
       LOGIN
    ========================================= */

    loginBtn.addEventListener("click", function () {

        window.location.href = "login.html";

    });

});
// UniMart welcome page - script.js
// Palitan ang mga file name sa ibaba kung iba ang pangalan ng pages mo.

document.getElementById("getStarted").addEventListener("click", function () {
  window.location.href = "register.html";
});

document.getElementById("loginBtn").addEventListener("click", function () {
  window.location.href = "login.html";
});