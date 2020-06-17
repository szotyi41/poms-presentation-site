import * as helpers from "./js/helpers.js";
import * as random from "./js/random-template-values-generator/random.js";

/**
 * Enable / disable an element.
 * 
 * @since 1.0.0
 * 
 * @param {string}  elem      An element (provided by class / id) to be toggled.
 * @param {boolean} value     The toggle value.
 * @param {string}  type      The element type.
 * @param {string}  disabled  The element class prefix.
 */
function toggle(elem, value, type = 'input', disabled = 'disabled') {
    var disabled = 'disabled';
    var disabledClass = `${disabled}-${type}`
    
    $(elem).prop(disabled, value);

    if (value) {
        $(elem).addClass(disabledClass);
    } else {
        $(elem).removeClass(disabledClass);
    } 
}

/**
 * Show element with an optional delay and fade in.
 * 
 * @since 1.0.0
 * 
 * @param {string} elemId An element id.
 * @param {string} delay  A delay duration in miliseconds.
 * @param {string} fadeIn A fade in duration in miliseconds.
 */
function showElem(elemId, delay = null, fadeIn = null) {

    if (delay) {
        if (fadeIn) $("#" + elemId).delay(delay).fadeIn(fadeIn);
        else $("#" + elemId).delay(delay);
    } else {
        $("#" + elemId).show();
    }
}

/**
 * Hide element with an optional delay and fade out.
 * 
 * @since 1.0.0
 * 
 * @param {string} elemId  An element id.
 * @param {string} delay   A delay duration in miliseconds.
 * @param {string} fadeOut A fade out duration in miliseconds.
 */
function hideElem(elemId, delay = null, fadeOut = null) {

    if (delay) {
        if (fadeOut) $("#" + elemId).delay(delay).fadeOut(fadeOut);
        else $("#" + elemId).delay(delay);
    } else {
        $("#" + elemId).hide();
    }
}

/**
 * Remove the href (and optionally, the download) attribute
 * 
 * @since 1.0.0
 * 
 * @param {string}  elem       A link element (provided by class / id)
 * @param {boolean} isDownload Remove the download attribute if the link has a download
 */
function removeHref(elem, isDownload = false) {
    if (isDownload) $(elem).removeAttr('download');
    $(elem).removeAttr('href');
}

/**
 * Set / reset the video (and optionally the e-mail and video link) container.
 * 
 * If `resize` is passed as a display type then the container will only be resized.
 * 
 * @since 1.0.0
 */
function setVideoContainer(height = "auto", display= "none") {
    $("#generated-video-container").css("height", height);

    if (display != 'resize') {
        $("#generated-video-player").css("display", display);

        if (display == 'none') {
            toggleDisplay('#email-container', false);
            toggleDisplay('#video-link-container', false);
        }
    }
}

/**
 * Load a video file in the container.
 * 
 * @since 1.0.0
 * 
 * @param {string} source A video file source.
 * @param {string} id     A video element.
 */
function loadVideo(source, id = 'generated-video') {
    var video = document.getElementById(id);
    video.src = source;
    video.load();
    
    toggleDisplay("#video-link-container");
    setVideoContainer("500px", "block");
    setVideoDownloadLink(source);

    document.querySelector('#scroll-anchor').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Set a video's download link.
 * 
 * @since 1.0.0
 * 
 * @param {string} source A video file source.
 * @param {string} id     A video download link element id.
 */
function setVideoDownloadLink(source, id = "download-expo-video_link") {
    var filename = source.split(/[\\\/]/).pop();
    var downloadLink = document.getElementById(id);
    
    downloadLink.setAttribute("href", source);

    $("#" + id).attr("download", filename);            
    $("#expoVideo").attr("value", source);
}

/**
 * Toggle an element display.
 * 
 * @since 1.0.0
 * 
 * @param {string}  elem  An element (provided by class / id) to be toggled.
 * @param {boolean} value The toggle display value.
 */
function toggleDisplay(elem, value = false) {
    var display = (! value) ? 'none' : 'block';
    $(elem).css("display", display);
}

$(document).ready(function () {

    $(".finished").click(function () {
        $(this).fadeToggle("slow", "linear");
    });

    /** Toggle the e-mail send button on e-mail field change */
    $('#email').change(function (e) {
        if (document.getElementById("email").value == "") {
            toggle(".send-expo-video", true);
        } else {
            toggle(".send-expo-video", false);
        }
    });

    /** Fill the template form with a random person & selections */
    $("#random-expo-video").click(function (e) {
        e.preventDefault();

        /** Get form inputs */
        var inputs = document.querySelectorAll("input[type=text]");
        
        /** Get template base fields from the form inputs */
        let fields = random.fields(inputs);

        /** Get a random selection of fields values */
        let selections = random.selection(fields);
             
        let gender = null;

        /** Fill the form with the random selections */
        for (let [key, value] of Object.entries(selections)) {
            let element = document.getElementById(key);
            element.value = value;
            element.dispatchEvent(new Event('change'));
            
            /** Focus on the `#id` field after each form input is filled */
            $('#' + key).focus();

            if (key === 'person') gender = value.split("_")[1];
        }

        /** Create a random person */
        let person = random.person(gender);

        /** Focus on the `name` field after the form is filled */
        document.getElementById("name").value = person.firstName;
        $('#name').focus();

        toggle(".send-expo-video", true);
        toggle("#download-expo-video", true);
        toggle("#download-expo-video_link", true);

        removeHref("#download-expo-video_link", true);
        setVideoContainer();
    });

    /** Create a video from a form selection */
    $("#create-expo-video").click(function (e) {
        e.preventDefault();

        var selection = [];

        /** Name validation */
        if (! $('#name').val()) {
            $('#response')
                .css("display", "block")
                .html(helpers.setResponse(
                    'Please fill out the name field', 
                    ['info', 'response-message'], 
                    ['fa', 'fa-exclamation-triangle']
                ))
                .delay(5000).fadeOut(400);
            $('#name').focus();
            
            return;
        }

        /** Get selections from form */
        selection.push({
            'name': $('#name').val(),
            'email': $('#email').val(),
            'interest_I': $('#interest_I').val(),
            'interest_II': $('#interest_II').val(),
            'person': $('#person').val(),
            'owner': $('#owner').val(),
            'model': $('#model').val(),
            'journey': $('#journey').val(),
            'family': $('#family').val(),
            'socializing': $('#socializing').val()
        });

        var jsonString = JSON.stringify(selection);

        $.ajax({

            type: "POST",
            url: "./src/Support/handler.php",
            dataType: "json",
            data: { project: 'Expo', id: parseInt(Math.random(1000000000) * 1000000000), select: jsonString },
           
            beforeSend: function () {
                window.onbeforeunload = function () {
                    return true;
                }

                $('#response')
                    .css("display", "block")
                    .html(helpers.setResponse(
                        'Generating... Please wait!', 
                        ['info', 'response-message'], 
                        ['fa', 'fa-spinner', 'fa-spin']
                    ));

                setVideoContainer();

                toggle(".send-expo-video", true);
                toggle("#create-expo-video", true);
                toggle("#download-expo-video", true);
                toggle("#download-expo-video_link", true);
            },
            success: function (response) {

                window.onbeforeunload = null;

                if (response.error) {
                    $('#response')
                        .css("display", "block")
                        .html(helpers.setResponse(
                            'OOPS! The generation failed!', 
                            ['error', 'response-message'], 
                            ['fa', 'fa-times']
                        ));
                } else {
                    $('#response')
                        .css("display", "block")
                        .html(helpers.setResponse(
                            'Success!', 
                            ['success', 'response-message'], 
                            ['fa', 'fa-check']
                        ));

                    toggle("#download-expo-video", false);
                    toggle(".send-expo-video", false);
                    toggle("#create-expo-video", false);

                    loadVideo(response);
                    showElem("hd-img", 0, 1000);
                    showElem("video-bottom-container", 0, 1000);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {

                window.onbeforeunload = null;

                $('#response')
                    .css("display", "block")
                    .html(helpers.setResponse(
                        'OOPS! Something failed - please try again!', 
                        ['error', 'response-message'], 
                        ['fa', 'fa-times']
                    ));
            },
            complete() {
                hideElem("response", 5000, 400);
                toggle("#create-expo-video", false);
            }

        });
    });

    /** Get back to the video container */
    $(".back_link").click(function (e) {
        toggleDisplay("#video-link-container");
        toggleDisplay("#email-container");
        setVideoContainer("500px", "block")
        toggle(".send-expo-video", false);

        document.querySelector('#scroll-anchor').scrollIntoView({ behavior: 'smooth' });
    });

    /** Download the video */
    $("#download-expo-video").click(function (e) {
        var expoVideoLink = document.getElementById("download-expo-video_link");
        expoVideoLink.click();

        toggleDisplay("#email-container");
        toggleDisplay("#generated-video-player");
        toggleDisplay("#video-link-container", true);
        setVideoContainer("150px", "resize");

        var downloadLink = document.getElementById("download_link");
        var file = $(expoVideoLink).attr("href").replace(/^.*[\\\/]/, '');
        downloadLink.setAttribute("href", "/projects/src/Support/downloadHandler.php?file=" + file);
    });

    /** Send an e-mail with the video */
    $(".send-expo-video").click(function (e) {
        e.preventDefault(); 

        toggleDisplay("#generated-video-player");
        toggleDisplay("#video-link-container");
        toggleDisplay("#email-container", true);
        setVideoContainer("180px", "resize");
        
        if (! $('#email').val()) {
            toggle(".send-expo-video", true);

            return;
        }

        var selection = [];

        selection.push({
            'name': $('#name').val(),
            'email': $('#email').val(),
            'path': $('#download-expo-video_link').attr('href')
        });

        var jsonString = JSON.stringify(selection);

        $.ajax({

            type: "POST",
            url: "./src/Support/emailHandler.php",
            data: { project: 'Expo', select: jsonString },

            beforeSend: function () {
                window.onbeforeunload = function () {
                    return true;
                }
            },
            success: function (response) {
                window.onbeforeunload = null;

                if (response.error) {
                    $('#response')
                        .css("display", "block")
                        .html(helpers.setResponse(
                            'OOPS! The e-mail was not sent!', 
                            ['error', 'response-message'], 
                            ['fa', 'fa-times']
                        ));
                } else {
                    $('#response')
                        .css("display", "block")
                        .html(helpers.setResponse(
                            'E-mail sent!', 
                            ['success', 'response-message'], 
                            ['fa', 'fa-check']
                        ));
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                window.onbeforeunload = null;

                $('#response')
                    .css("display", "block")
                    .html(helpers.setResponse(
                        'OOPS! Something went wrong - please try again!', 
                        ['error', 'response-message'], 
                        ['fa', 'fa-times']
                    ));
            },
            complete() {
                hideElem("response", 5000, 400);
                $("#email").val("");
                toggle(".send-expo-video", true);
            }
        });
    });

    /** Get video current play time */
    $(function () {
        $('#currentTime').html($('#generated-video-player').find('video').get(0).load());                      
        $('#currentTime').html($('#generated-video-player').find('video').get(0).play());
    });

    /** 
     * Set video current play time.
     * 
     * The current time format is `00:00:00.000` and video duration play step is 40ms.
     */
    setInterval(function () {
        var current_time = $('#generated-video-player').find('video').get(0).currentTime.toFixed(3);
        var leading_zero = "";

        if (current_time < 10) leading_zero = "0";

        $('#currentTime').html("00:00:" + leading_zero + current_time);
        $('#totalTime').html($('#generated-video-player').find('video').get(0).duration.toFixed(3));    
    },40)
});
