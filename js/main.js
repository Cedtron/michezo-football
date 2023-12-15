

function submitForm() {
    const name = $('#name').val();
    const email = $('#email').val();
    const subject = $('#subject').val();
    const message = $('#message').val();

    $.ajax({
        type: 'POST',
        url: 'contact.php', // Replace with the actual path to your server-side script
        data: {
            name: name,
            email: email,
            subject: subject,
            message: message
        },
        success: function(response) {
            // Handle the server's response here
            if (response === 'success') {
                // Show Bootstrap alert for successful submission
                $('#submissionAlert').removeClass('alert-danger').addClass('alert-success').show();
                // Optionally, clear the form fields
                $('#contactForm')[0].reset();
            } else {
                // Show Bootstrap alert for errors
                $('#submissionAlert').removeClass('alert-success').addClass('alert-danger').html('<strong>Error:</strong> ' + response).show();
            }
        },
        error: function(error) {
            // Handle errors (e.g., show an error message)
            console.error('Error:', error);
        }
    });
}


$('#registrationForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Your existing form submission logic
    const formData = $(this).serialize();

    $.ajax({
        type: 'POST',
        url: 'process_registration.php', // Replace with the actual path to your server-side script
        data: formData,
        success: function(response) {
            // Handle the server's response here
            if (response === 'success') {
                // Show Bootstrap alert for successful registration
                $('#registrationAlert').removeClass('alert-danger').addClass('alert-success').show();
                // Optionally, clear the form fields
                $('#registrationForm')[0].reset();
                
            } else {
                // Show Bootstrap alert for errors
                $('#registrationAlert').removeClass('alert-success').addClass('alert-danger').html('<strong>Error:</strong> ' + response).show();
            }
        },
        error: function(error) {
            // Handle errors (e.g., show an error message)
            console.error('Error:', error);
        }
    });
});



(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Countdown Timer
    function countDownTimer() {	
        var endTime = new Date("31 December 2023 10:00:00 GMT+00:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (days < "10") {
            days = "0" + days;
        }
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }

        $("#cdt-days").html(days + "<span>-Days-</span>");
        $("#cdt-hours").html(hours + "<span>-Hours-</span>");
        $("#cdt-minutes").html(minutes + "<span>-Mins-</span>");
        $("#cdt-seconds").html(seconds + "<span>-Secs-</span>");

    }

    setInterval(function () {
        countDownTimer();
    }, 1000);


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });
    
})(jQuery);

