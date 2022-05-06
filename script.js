$(function () {

    $('#login').on('submit', function (e) {

        // login
        $.ajax({
            url: 'http://localhost:3001/login.php?action=login',
            type: 'POST',
            data: JSON.stringify({
                email: $('#login-email').val(),
                password: $('#login-password').val()
            }),
            success: function (data) {
                console.table(data);
                var html = "<pre>" + JSON.stringify(data, null, 2) + "</pre>" +
                    "<hr>" +
                    "<button class='btn btn-primary' id='getuser' data-jwt='" + data.jwt + "'>Get User Detail</button>" +
                    "<hr>" +
                    "<div id='detail-container'></div>";
                $('#result-container').html(html);
                $('#login')[0].reset();
            },
            error: function () {
            }
        });

        return false;
    });

    $('body').on('click', '#getuser', function (e) {
        var jwt = $(this).attr('data-jwt');

        // get user detail
        $.ajax({
            url: './api/user',
            type: 'GET',
            data: {
                jwt: jwt
            },
            success: function (data) {

                if (data.status === 'success') {

                    var lifespan = Number(data.jwt_payload.exp - data.jwt_payload.iat);  // in ms

                    var html = "<p>For this demo JWT will expire after " + lifespan + " seconds.</p>" +
                        "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
                    $('#detail-container').html(html);

                    setTimeout(function () {
                        $('#detail-container').html('<p>JWT expired!</p>');
                    }, lifespan * 1000);

                } else {
                    var html = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
                    $('#detail-container').html(html);
                }

            },
            error: function () {
            }
        });

    });
});

var xhr = $.get("https://api.mojilala.com/v1/stickers/search?q=happy+easter&api_key=dc6zaTOxFJmzC&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

