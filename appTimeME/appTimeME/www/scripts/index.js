// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // I think loading or creation of JSON should be called in here

        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // Implementing menu buttons
        // exit button implementation
        var exitButton = document.querySelector("#menuExit");
        exitButton.addEventListener("click", exitApp, false);

        // create your morning routine button
        var createMorningRoutineButton = document.querySelector("#menuCreateYourMorningRoutine");
        createMorningRoutineButton.addEventListener("click", createYourMorningRoutine, false);

        // set alarm button
        var setAlarmButton = document.querySelector("#menuSetAlarm");
        setAlarmButton.addEventListener("click", setAlarm, false);

        // change background button
        var changeBackgroundButton = document.querySelector("#menuChangeBackground");
        changeBackgroundButton.addEventListener("click", ChangeBackground, false);


      
        //Buttons inside CREATE MORNING ROUTINE
        var backToMenuFromCreateButton = document.querySelector("#backToMenuFromCreate");
        backToMenuFromCreateButton.addEventListener("click", backToMenuFromCreateFunc, false);

        var addAnotherTimerButton = document.querySelector("#addTimer");
        addAnotherTimerButton.addEventListener("click", addAnotherTimer, false);

        var clearRoutineButton = document.querySelector("#clearRoutine");
        clearRoutineButton.addEventListener("click", clearRoutineFunc, false);

        // Buttons inside SET ALARM
        var backToMenuFromAlarm = document.querySelector("#backToMenuFromAlarm");
        backToMenuFromAlarm.addEventListener("click", backToMenuFromAlarmFunc, false);

        // Buttons inside CHANGE BACKGROUND
        var backToMenuFromBackground = document.querySelector("#backToMenuFromBackground");
        backToMenuFromBackground.addEventListener("click", backToMenuFromBackgroundFunc, false);



        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var element = document.getElementById("deviceready");
        element.innerHTML = 'Device Ready';
        element.className += ' ready';

    };


    // MAIN MENU FUNCTIONS
    function exitApp(e) {
        navigator.app.exitApp();
    }

    function createYourMorningRoutine(e){
        $('#pgMenu').removeClass('centerPage').addClass('leftPage');
        $('#pgCreateRoutine').removeClass('rightPage').addClass('centerPage');
    }

    function setAlarm(e) {
        $('#pgMenu').removeClass('centerPage').addClass('leftPage');
        $('#pgSetAlarm').removeClass('rightPage').addClass('centerPage');
    }

    function ChangeBackground(e) {
        $('#pgMenu').removeClass('centerPage').addClass('leftPage');
        $('#pgChangeBackground').removeClass('rightPage').addClass('centerPage');
    }


    //CREATE YOUR MORNING ROUTINE FUNCTIONS
    function backToMenuFromCreateFunc(e) {
        $('#pgMenu').removeClass('leftPage').addClass('centerPage');
        $('#pgCreateRoutine').removeClass('centerPage').addClass('rightPage');
    }


    function addAnotherTimer(e) {
        $("appendTimersHere").hide().fadeIn('1000').append('<input type="text" name="timers[]" value="New Task"/>' +
            '<input type="number" name="minutes[]" value=1 /> '+
            '<input type="text" name="timers[]" value="Comments"/><br />');
    }


    function clearRoutineFunc(e) {
        $("appendTimersHere").children().remove();
    }

    //SET ALARM FUNCTIONS
    function backToMenuFromAlarmFunc(e) {
        $('#pgMenu').removeClass('leftPage').addClass('centerPage');
        $('#pgSetAlarm').removeClass('centerPage').addClass('rightPage');
    }

    //CHANGE BACKGROUND FUNCTIONS
    function backToMenuFromBackgroundFunc(e) {
        $('#pgMenu').removeClass('leftPage').addClass('centerPage');
        $('#pgChangeBackground').removeClass('centerPage').addClass('rightPage');
    }



    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();