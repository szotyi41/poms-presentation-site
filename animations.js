var transitionType = ' cubic-bezier(0.175, 0.885, 0.32, 1.0)';
var speedoBounce = false;
var robotArriveTime = 5000;

$(document).ready(function () {
    init();
    animate();
    $('select').formSelect();
});

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

function activateSliders(sliderIndex) {
    const sliderWidth = $(`#slider-process-${sliderIndex}`).attr('data-width');
    const sliderValue = parseInt($(`#slider-indicator-${sliderIndex}`).attr('data-value'));

    if(sliderWidth.trim() == '' || parseInt(sliderWidth) == 0 || isNaN(sliderValue) || sliderValue == '' || sliderValue == 0){
        document.querySelector(`#slider-process-${sliderIndex}`).parentNode.parentNode.style.opacity = '0';
    }else{
        runSliders(sliderIndex, sliderValue, sliderWidth);
    }
}

function validateHTMLLists() {
    const pomsAdvantagesList = [...document.querySelectorAll('#pomsAdvatages li')];
    const agencyBenefitsList = [...document.querySelectorAll('#agencyBenefits li')];
    const advertiserBenefitsList = [...document.querySelectorAll('#advertiserBenefits li')];

    
    loopArray(concatArrays([pomsAdvantagesList, agencyBenefitsList, advertiserBenefitsList]));
}

function loopArray(htmlListItems) {
    htmlListItems.map( listItem => {
        if(listItem.innerText.trim() == '') {
            listItem.parentNode.removeChild(listItem);
        }
    });
}

function concatArrays(arrays) {
    let concatedArray = [];
    for(let i = 0; i < arrays.length; i++) {
        concatedArray.push(...arrays[i])
    }
    return concatedArray;
}

function videoIframeCheckIfFailed(){
    const videoIframe = document.querySelector('.video-iframe');
    let secondsCounter = 0;
    let interval;

    interval = setInterval( () => {
        if(secondsCounter === 1){
            videoIframe.parentNode.style.opacity = 0;
            clearInterval(interval);
        }
        
        secondsCounter++;
    }, 1000);
    
    videoIframe.addEventListener('load', () => {
        clearInterval(interval);
        secondsCounter = 0;
    });
}

function animate() {

    // Get counter Number
    const counterContainer = document.querySelector('#counter');
    let counterNumber = parseInt(counterContainer.getAttribute('data-counter-value'));
    
    // Counter Number validation
    if(isNaN(counterNumber) || counterNumber == '' || counterNumber < 0) {
        // Hide container if not a correct number
        counterContainer.parentNode.style.display = 'none';
        counterNumber = 0;
    }
    const counterStep = Math.ceil(counterNumber / 400);

    // Iframe Validation
    videoIframeCheckIfFailed();

    // HTML LISTS Validation
    validateHTMLLists();

    //Validate iframe

    // Robot arrive
    setTimeout(() => $('#robot-sleep-image').css({ opacity: 1, top: '0px' }), 1000);

    // Show left card
    setTimeout(() => {
        $('#card-sliders').css({ opacity: 1, transform: 'scale(1)' });
        $('.label-left').css({ opacity: 1 });
    }, 1000 + robotArriveTime);

    // Slide down logo placement
    setTimeout(() => $('#card-brand-logo').css({ opacity: 1, transform: 'scale(1)' }), 2000 + robotArriveTime);

    // Show brand logo
    setTimeout(() => {
        $('.card-brand-logo-image').css({ opacity: 1 });
    }, 3000 + robotArriveTime);

    // Run sliders
    setTimeout(() => $('#slider-paragraph').css({ opacity: 1, transform: 'scale(1)' }), 4000 + robotArriveTime);

    setTimeout(() => activateSliders(1), 5000 + robotArriveTime);
    setTimeout(() => activateSliders(2), 7000 + robotArriveTime);
    setTimeout(() => activateSliders(3), 9000 + robotArriveTime);

    // setTimeout(() => runSliders(1, 15213, 80), 5000 + robotArriveTime);
    // setTimeout(() => runSliders(2, 12, 90), 7000 + robotArriveTime);
    // setTimeout(() => runSliders(3, 2, 70), 9000 + robotArriveTime);

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
    setTimeout(() => {
        $('#robot-arms-right').fadeIn(500);
        $('.label-right').css({ opacity: 1 });
    }, 16000 + robotArriveTime);

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
