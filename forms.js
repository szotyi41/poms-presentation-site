$(document).ready(function () {

    $(".finished").click(function () {

        $(this).fadeToggle("slow", "linear");

    });

    $("#contact-form").unbind('submit').bind('submit', function (e) {

        e.preventDefault();

        if ($('#email').hasClass("invalid") == false) {

            $form = $(this);

            $.ajax({

                type: "POST",
                url: 'https://pomscloud.ie/src/handlers/formHandler.php',
                data: { details: $form.serialize() },
                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Sending e-mail... please wait.</span>").removeClass('finished');

                },
                success: function (response) {

                    window.onbeforeunload = null;

                    console.log(response);

                    if (response == 'Sent') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'></i> <span class='response-message'>E-mail successfully sent.</span>").addClass('finished');

                    } else {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, something went wrong with your e-mail.</span>").addClass('finished');

                    }

                    $('#contact-modal').fadeToggle("slow", "linear");

                    document.getElementById("contact-form").reset();

                },
                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;

                    console.log(xhr.status);
                    console.log(thrownError);


                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, something went wrong. Try again later.</span>").addClass('finished');
                },
                dataType: 'json'

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });

    $("#send-form").unbind('submit').bind('submit', function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        if ($('#email').hasClass("invalid") == false) {

            var url = $(this).attr('action');

            $.ajax({

                type: "POST",
                url: url,
                data: { file: $("#sportVideo").val(), name: $("#last_name").val(), email: $("#email").val(), project: "sport" },

                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }
                    $('#create-sport-video').css("disabled", "true");
                    $('#create-sport-video').addClass('disabled-input');
                    $('#download-sport-video').css("disabled", "true");
                    $('#download-sport-video').addClass('disabled-input');
                    $('#send-sport-video').css("disabled", "true");
                    $('#send-sport-video').addClass('disabled-input');
                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Sending e-mail... please wait.</span>").removeClass('finished');
                },

                success: function (response) {

                    window.onbeforeunload = null;

                    if (response == 'Sent') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'></i> <span class='response-message'>E-mail successfully sent.</span>").addClass('finished');

                    } else {

                        if (response == 'Error with the data') {

                            $("#response").css("display", "block");
                            $('#response').html("<i class='fa fa-times'></i> <span class='error'>Incorrect e-mail address provided.</span>").addClass('finished');

                        } else {

                            $("#response").css("display", "block");
                            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, something went wrong when sending your e-mail - please try again later.</span>").addClass('finished');

                        }

                    }

                    $('#create-sport-video').prop("disabled", false);
                    $('#create-sport-video').removeClass('disabled-input');
                    $('#download-sport-video').prop("disabled", false);
                    $('#download-sport-video').removeClass('disabled-input');
                    $('#send-sport-video').prop("disabled", false);
                    $('#send-sport-video').removeClass('disabled-input');

                },

                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;

                    console.log(xhr.status);
                    console.log(thrownError);

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                }

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });

    $("#send-expo-form").unbind('submit').bind('submit', function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        if ($('#email').hasClass("invalid") == false) {

            var url = $(this).attr('action');

            $.ajax({

                type: "POST",
                url: url,
                data: { file: $("#expoVideo").val(), name: $("#name").val(), email: $("#email").val(), project: "expo" },

                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }
                    $('#create-expo-video').prop("disabled", true).find('.fa').removeClass('fa-video').addClass('fa-spinner').addClass('fa-spin');
                    $('#create-expo-video').addClass('disabled-input');

                    $('#download-expo-video').css("disabled", "true");
                    $('#download-expo-video').addClass('disabled-input');
                    $('#send-expo-video').css("disabled", "true");
                    $('#send-expo-video').addClass('disabled-input');
                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Sending e-mail... please wait.</span>").removeClass('finished');
                },

                success: function (response) {

                    window.onbeforeunload = null;

                    if (response == 'Sent') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'><span class='response-message'>E-mail successfully sent.</span>").addClass('finished');

                    } else {

                        if (response == 'Error with the data') {

                            $("#response").css("display", "block");
                            $('#response').html("<i class='fa fa-times'></i> <span class='error'>Incorrect e-mail address provided.</span>").addClass('finished');

                        } else {

                            $("#response").css("display", "block");
                            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, something went wrong when sending your e-mail - please try again later.</span>").addClass('finished');

                        }

                    }

                    $('#create-expo-video').prop("disabled", false);
                    $('#create-expo-video').removeClass('disabled-input');
                    $('#download-expo-video').prop("disabled", false);
                    $('#download-expo-video').removeClass('disabled-input');
                    $('#send-expo-video').prop("disabled", false);
                    $('#send-expo-video').removeClass('disabled-input');

                },

                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;

                    console.log(xhr.status);
                    console.log(thrownError);

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                }

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });


    $("#sport-form").unbind('submit').bind('submit', function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        if ($('#email').hasClass("invalid") == false) {

            var url = $(this).attr('action');

            $.ajax({

                type: "POST",
                url: url,
                data: { formData: $(this).serialize(), videoData: $('#sport-form').find('input[name="videoData"]').val(), time: $('#time-string').text(), timestamp: current, project: 'sport' },

                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }

                    $('#create-sport-video').css("disabled", "true");
                    $('#create-sport-video').addClass('disabled-input');
                    $('.bt-next').css("disabled", "true");
                    $('.bt-next').addClass('disabled-input');
                    $('.bt-prev').css("disabled", "true");
                    $('.bt-prev').addClass('disabled-input');
                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Generating... please wait, it may take a long time.</span>").removeClass('finished');

                },

                success: function (response) {

                    window.onbeforeunload = null;

                    if (response != 'Error') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'></i> <span class='response-message'>Generation successful.</span>").addClass('finished');

                        $('#download-expo-video, #send-expo-video').prop('disabled', false);

                        var action = response;
                        $("#download").attr("action", action);
                        $("#sportVideo").attr("value", action);

                    } else {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                    }

                },

                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;


                    console.log(xhr.status);
                    console.log(thrownError);

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');


                },

                complete: function (response) {

                    $('#download-sport-video').prop("disabled", false);
                    $('#download-sport-video').removeClass('disabled-input');
                    $('#send-sport-video').prop("disabled", false);
                    $('#send-sport-video').removeClass('disabled-input');
                    $('#create-sport-video').prop("disabled", false);
                    $('#create-sport-video').removeClass('disabled-input');
                    $('.bt-next').prop("disabled", false);
                    $('.bt-next').removeClass('disabled-input');
                    $('.bt-prev').prop("disabled", false);
                    $('.bt-prev').removeClass('disabled-input');

                }

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });


    $("#create-expo-video").click(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        selection = [];

        if ($('#email').hasClass("invalid") == false) {

            selection.push({
                'name': $('#name').val(),
                'email': $('#email').val(),
                'interest_I': $('#interest_I').val(),
                'interest_II': $('#interest_II').val(),
                'person': $('#person').val(),
                'owner': $('#owner').val(),
                'model': $('#model').val(),
                'travelling': $('#travelling').val(),
                'family': $('#family').val(),
                'socializing': $('#socializing').val()
            });

            jsonString = JSON.stringify(selection);

            $.ajax({

                type: "POST",
                url: "./src/Support/handler.php",
                dataType: "json",
                data: { project: 'Expo', id: parseInt(Math.random(1000000000) * 1000000000), select: jsonString },
                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Generating... please wait, it may take a long time.</span>").removeClass('finished');
                    $('#create-expo-video').prop("disabled", true).find('.fa').removeClass('fa-video').addClass('fa-spinner').addClass('fa-spin');
                    $('#create-expo-video').addClass('disabled-input');


                },
                success: function (response) {

                    window.onbeforeunload = null;

                    $('#download-expo-video').prop("disabled", false);
                    $('#download-expo-video').removeClass('disabled-input');
                    $('#send-expo-video').prop("disabled", false);
                    $('#send-expo-video').removeClass('disabled-input');
                    $('#create-expo-video').prop("disabled", false);
                    $('#create-expo-video').removeClass('disabled-input');

                    if (response != 'Error') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'></i> <span class='response-message'>Generation successful.</span>").addClass('finished');

                        $('#download-expo-video, #send-expo-video').prop('disabled', false);

                        var action = response;
                        $("#download").attr("action", action);
                        $("#expoVideo").attr("value", action);

                    } else {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                    }

                },
                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;

                    console.log(xhr.status);
                    console.log(thrownError);

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                }

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });


    $("#create-brand-video").click(function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        selection = [];

        if ($('#email').hasClass("invalid") == false) {

            selection.push({
                'fname': $('#fname').val(),
                'lname': $('#lname').val(),
                'email': $('#email').val(),
                'company': $('#company').val(),
                'interest1': $('#interest1').val(),
                'interest2': $('#interest2').val()
            });

            jsonString = JSON.stringify(selection);

            $.ajax({

                type: "POST",
                url: "https://pomscloud.ie/src/handlers/sportVideoHandler.php",
                dataType: "json",
                data: { project: 'brand', id: parseInt(Math.random(1000000000) * 1000000000), select: jsonString },
                beforeSend: function () {

                    window.onbeforeunload = function () {
                        return true;
                    }

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-spinner fa-spin'></i> <span class='response-message'>Generating... please wait, it may take a long time.</span>").removeClass('finished');
                    $('#create-expo-video').prop("disabled", true).find('.fa').removeClass('fa-video').addClass('fa-spinner').addClass('fa-spin');
                    $('#create-expo-video').addClass('disabled-input');


                },
                success: function (response) {

                    window.onbeforeunload = null;

                    $('#download-brand-video').prop("disabled", false);
                    $('#download-brand-video').removeClass('disabled-input');
                    $('#send-brand-video').prop("disabled", false);
                    $('#send-brand-video').removeClass('disabled-input');
                    $('#create-brand-video').prop("disabled", false);
                    $('#create-brand-video').removeClass('disabled-input');

                    if (response != 'Error') {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-check'></i> <span class='response-message'>Generation successful.</span>").addClass('finished');

                        $('#download-expo-video, #send-expo-video').prop('disabled', false);

                        var action = response;
                        $("#download").attr("action", action);
                        $("#brandVideo").attr("value", action);

                    } else {

                        $("#response").css("display", "block");
                        $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                    }

                },
                error: function (xhr, ajaxOptions, thrownError) {

                    window.onbeforeunload = null;

                    console.log(xhr.status);
                    console.log(thrownError);

                    $("#response").css("display", "block");
                    $('#response').html("<i class='fa fa-times'></i> <span class='error response-message'>Error</span><span class='response-message'>: Generation failed.</span>").addClass('finished');

                }

            });

        } else {

            $("#response").css("display", "block");
            $('#response').html("<i class='fa fa-times'></i> <span class='error'>OOPS, you provided an incorrect e-mail address - please provide a correct one.</span>").addClass('finished');

            console.log("Incorrect email address.");

        }

    });

});
