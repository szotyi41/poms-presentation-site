var transitionType = ' cubic-bezier(0.175, 0.885, 0.32, 1.0)';

$(document).ready(function() {
    init();
    animate();
});

function init() {
    // Cards
    $('#robot-section .card').css({opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType});

    // Brand logo
    $('#card-brand-logo').css({opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType});

    // Init sliders
    $('.slider-container').css({opacity: 0, transition: 'all 1s ' + transitionType});
    $('.slider-process-container').css({width: 0, transition: 'all 2s ' + transitionType});
    $('.slider-indicator').css({left: 0, transition: 'all  2s ' + transitionType}).text(0);

    // Bubble image
    $('#card-bubble-image').css({opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType});

    // Stickers
    $('.card-sticker').css({opacity: 0, transform: 'scale(0)', transition: 'all 1s ' + transitionType});

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
    // Show left card
    setTimeout(() => $('#card-sliders').css({opacity: 1, transform: 'scale(1)'}), 1000);

    // Show left arm
    setTimeout(() => $('#robot-arms-left').fadeIn(500), 1000);

    // Show brand logo
    setTimeout(() => $('#card-brand-logo').css({opacity: 1, transform: 'scale(1)'}), 2000);
    setTimeout(() => runSliders(1, 15213), 3000);
    setTimeout(() => runSliders(2, 12), 5000);
    setTimeout(() => runSliders(3, 2), 7000);

    setTimeout(() => $('.robot-arm').css({opacity: 1, transition: 'all 1s ' + transitionType}));

    // Wake up robot
    setTimeout(() => {
        $('#robot-wake-image').css({opacity: 1});
        $('#robot-sleep-image').css({opacity: 0});
    }, 8000);

    // Card Engagement
    setTimeout(() => $('#card-engagement').css({transform: 'scale(1)', opacity: 1}), 9000);

    // Show right arm
    setTimeout(() => $('#robot-arms-right').fadeIn(500), 9500);

    // Show card bubble image
    setTimeout(() => $('#card-bubble-image').css({transform: 'scale(1)', opacity: 1}), 9500);

    // Circle Progress
    setTimeout(() => {
        var circle = $('.circle-progress');
        circle.circleProgress({
            value: 0,
            startAngle: -Math.PI / 4 * 5,
            lineCap: 'round',
            size: 112
        }).on('circle-animation-progress', function(event, progress) {
            $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
        });

        setTimeout(function() { circle.circleProgress('value', 0.75); }, 1);        
    }, 10000);

    // Show stickers
    setTimeout(() => runStickers(1), 10500);
    setTimeout(() => runStickers(2), 11000);
    setTimeout(() => runStickers(3), 11500);

    // Counter
    setTimeout(() => {
        var digitsElement = $('#counter');
        var digitsNumber = 0;
        var counterInterval = setInterval(function() {            
            if (digitsNumber >= 11538) {
                digitsNumber = 11538;
                clearInterval(counterInterval);
            }

            var digitsString = parseInt(digitsNumber).format();
            var digitsHtml = Array.from(digitsString).map(digit => {
                return digit === ',' ? 
                    '<div class="digit">,</div>' :
                    '<div class="digit card-small">' + digit + '</div>';
            }).join('');

            digitsElement.html(digitsHtml);
            digitsNumber += 50;
        }, 1);
    }, 12000);

}


function runSliders(sliderIndex, sliderNumberTarget) {
    $('#slider-container-' + sliderIndex).css({transform: 'scale(1)', opacity: 1});
    setTimeout(() => {
        var sliderIndicator = $('#slider-indicator-' + sliderIndex);
        var sliderNumberDivide = 400;
        $('#slider-process-' + sliderIndex).animate({width: '80%'}, 300);
        sliderIndicator.animate({left: '80%'}, 300);
        var interval = setInterval(function() {
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
    sticker.css({opacity: 1, transform: 'scale(1)'});
}

Number.prototype.format = function(n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
