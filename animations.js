var transitionType = ' cubic-bezier(0.175, 0.885, 0.32, 1.0)';
var counterNumber = 11538;
var counterStep = 20;
var speedoBounce = false;

var robotArriveTime = 5000;

// Get parameters from url
var url = new URL(window.location.href);
var person = url.searchParams.get('personid');


$(document).ready(function () {
    init();
    animate();

    $('select').formSelect();

    // If url has personid paramter open it in maps
    if (person) {
        openPerson(person);
    } else {
        openPerson(1000);
    }

    $(window).on('resize', function() {
        replaceOpenedPerson();
    });

    $('.contact-person:not(.opened)').on('click', function() {
        openPerson($(this).attr('data-personid'));
    });
});

function openPerson(id) {

    var person = $('#person-' + id);

    // Close all
    $('.contact-person').each(function (i, element) {
        var elem = $(element);
        if (elem.attr('id') !== 'person-' + id) {
            console.log(elem.attr('id'));
            elem.removeClass('opened').animate({
                left: elem.attr('data-left') + '%',
                top: elem.attr('data-top') + '%',
            }, 300);
        }
    });

    // Open with id
    if (person) {
        person.addClass('opened');
        person.css({top: '', left: ''});
        replaceOpenedPerson();
    }
}

function replaceOpenedPerson() {
    console.log(window.innerWidth)
    if (window.innerWidth < 800) {
        $('.contact-person.opened').animate({left: '50%', bottom: '-260px'}, 300);
        return;
    }

    if (window.innerWidth < 1200) {
        $('.contact-person.opened').animate({left: '50%', bottom: '-128px'}, 300);
        return;
    } 

    $('.contact-person.opened').animate({left: '50%', bottom: '0px'}, 300);
}

function init() {
    // Cards
    $('#robot-section .card').css({ opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType });

    // Brand logo
    $('#card-brand-logo').css({ opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType });

    // Init sliders
    $('.slider-container').css({ opacity: 0, transition: 'all 1s ' + transitionType });
    $('.slider-process-container').css({ width: 0, transition: 'all 2s ' + transitionType });
    $('.slider-indicator').css({ left: 0, transition: 'all  2s ' + transitionType }).text(0);

    // Bubble image
    $('#card-bubble-image').css({ opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType });

    // Stickers
    $('.card-sticker').css({ opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType });

    // Counter
    $('#counter').html(`                    
        <div class="digit card-small">0</div>
        <div class="digit card-small">0</div>
        <div class="digit card-small">0</div>
        <div class="digit">,</div>
        <div class="digit card-small">0</div>
        <div class="digit card-small">0</div>
        <div class="digit card-small">0</div>`
    );
}

function animate() {

    // Robot arrive
    setTimeout(() => $('#robot-sleep-image').css({ opacity: 1, top: '0px' }), 1000);

    // Show left card
    setTimeout(() => $('#card-sliders').css({ opacity: 1, transform: 'scale(1)' }), 1000 + robotArriveTime);

    // Slide down logo placement
    setTimeout(() => $('#card-brand-logo').css({ opacity: 1, transform: 'scale(1)' }), 2000 + robotArriveTime);

    // Show brand logo
    setTimeout(() => {
        $('.card-brand-logo-image').css({ opacity: 1 });
        $('#card-brand-logo').css({ backgroundColor: '#e54973' });
    }, 3000 + robotArriveTime);

    // Run sliders
    setTimeout(() => $('#slider-paragraph').css({ opacity: 1, transform: 'scale(1)' }), 4000 + robotArriveTime);
    setTimeout(() => runSliders(1, 15213, 80), 5000 + robotArriveTime);
    setTimeout(() => runSliders(2, 12, 90), 7000 + robotArriveTime);
    setTimeout(() => runSliders(3, 2, 70), 9000 + robotArriveTime);

    // Wake up robot
    setTimeout(() => {
        $('#robot-wake-image').css({ opacity: 1 });
        $('#robot-sleep-image').css({ opacity: 0 });
    }, 11000 + robotArriveTime);

    // Show left arm
    setTimeout(() => $('#robot-arms-left').fadeIn(500), 13000 + robotArriveTime);

    // Card Engagement
    setTimeout(() => $('#card-engagement').css({ transform: 'scale(1)', opacity: 1 }), 15000 + robotArriveTime);

    // Show right arm
    setTimeout(() => $('#robot-arms-right').fadeIn(500), 16000 + robotArriveTime);

    // Show runners
    setTimeout(() => $('.card-engagement-image').css({ opacity: 1 }), 17000 + robotArriveTime);

    // Show card bubble image
    setTimeout(() => $('#card-bubble-image').css({ transform: 'scale(1)', opacity: 1 }), 18000 + robotArriveTime);

    // Circle Progress
    setTimeout(() => {
        var circle = $('.circle-progress');
        $('.circle-progress-label').css({ opacity: 1 });
        circle.circleProgress({
            value: 0,
            startAngle: -Math.PI / 4 * 5,
            lineCap: 'round',
            size: 112,
            animation: { duration: 800, easing: 'circleProgressEasing' },
            fill: {
                gradient: ['#3d8bfa','#c13e6f']
            }
        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
        });

        setTimeout(function () { 
            circle.circleProgress('value', 0.7);

            setTimeout(function() {

                setInterval(function () {
                    if (speedoBounce) {
                        circle.circleProgress('value', 0.7);
                    } else {
                        circle.circleProgress('value', 0.75);
                    }
                    speedoBounce =! speedoBounce;
                }, 1000);
            }, 1000);

        }, 1);
    }, 19000 + robotArriveTime);

    // Show stickers
    setTimeout(() => runStickers(1), 20500 + robotArriveTime);
    setTimeout(() => runStickers(2), 21000 + robotArriveTime);
    setTimeout(() => runStickers(3), 21500 + robotArriveTime);

    // Counter
    setTimeout(() => {
        var digitsElement = $('#counter');
        var digitsNumber = 0;
        var counterInterval = setInterval(function () {
            if (digitsNumber >= counterNumber) {
                digitsNumber = counterNumber;
                clearInterval(counterInterval);
            }

            var digitsString = parseInt(digitsNumber).format();
            var digitsHtml = Array.from(digitsString).map(digit => {
                return digit === ',' ?
                    '<div class="digit">,</div>' :
                    '<div class="digit card-small">' + digit + '</div>';
            }).join('');

            digitsElement.html(digitsHtml);
            digitsNumber += counterStep;
        }, 1);
    }, 22000 + robotArriveTime);

}


function runSliders(sliderIndex, sliderNumberTarget, slideToPercent) {
    $('#slider-container-' + sliderIndex).css({ transform: 'scale(1)', opacity: 1 });
    setTimeout(() => {
        var sliderIndicator = $('#slider-indicator-' + sliderIndex);
        var sliderNumberDivide = 400;
        $('#slider-process-' + sliderIndex).animate({ width: slideToPercent + '%' }, 300);
        sliderIndicator.animate({ left: slideToPercent + '%' }, 300);
        var interval = setInterval(function () {
            sliderIndicator.text(Math.round(sliderNumberTarget / sliderNumberDivide).format());
            if (sliderNumberDivide === 1) {
                clearInterval(interval);
            }
            sliderNumberDivide--;
        }, 1);
    }, 300);
}

function runStickers(stickerIndex) {
    var sticker = $('#card-sticker-' + stickerIndex);
    sticker.css({ opacity: 1, transform: 'scale(1)' });
}

Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
