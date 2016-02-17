$(document).ready(function() {


    //this controls the menu dropdown
    $("#menuBtn").click(function() {
        $("#menu").toggleClass("slide");
    })

    //jQuery .load() function loads an html page and the script.js file
    //when time traveller is clicked on menu, travel.html
    //contents get loaded into the body of index.html
    //script.js also gets loaded and visited
    $('#travel').click(function() {
        $('body').load('travel.html', function() {
            $.getScript('script.js');
        })
        $("#travel").addClass("visited");
    })
    $('#home').click(function() {
        $('body').load('about.html', function() {
            $.getScript('script.js')
        })
        $("#home").addClass("visited");
    })

    /*$('#signup').click(function() {

        $('body').load('home.html', function() {
            $.getScript('script.js')
        })
    });*/

    //this add formatting to the phone number field on login form
    $('#phoneNumber').focusout(function() {
        text = $(this)[0].value
        $(this)[0].value = text.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    });

    //validation for the new user sign up - checks if input field is empty, sends an alert if it is
    $('#signup').click(function() {
        error = "";

        if ($('#userName').val() == 0) {
            error += "Please provide a username\n";
        }
        if ($('#address').val() == 0) {
            error += "Please provide an address\n";
        }
        if ($('#postalCode').val() == 0) {
            error += "Please provide a valid postal code\n";
        }
        if ($('#phoneNumber').val() == 0) {
            error += "Please provide a valid phone number\n";
        }
        if (error.length > 0) {
            alert(error);
        } else {
            $('body').load('home.html', function() {
                $.getScript('script.js')
            })
        }
    });

});
