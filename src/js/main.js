$(document).ready(function () {
    var countEl = 100;
    var tl = new TimelineMax();
    var arrayEl;
    var classes = ["black", "red"];

    var w = $(window).width();
    var h = $(window).height();

    tl.from('h1', 1, {scale: 0, ease: Back.easeOut.config(1.7)});

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }


    for (var i = 0; i <= countEl; i++) {
        var newEl = ('<div class="el '+ classes[~~(Math.random()*classes.length)] +'" style="left: ' + getRandomArbitrary(0, w) + 'px; transform: rotate('+ getRandomArbitrary(0, 360) +'deg)"></div>');
        $('body .els').append(newEl);
        i++;
    }

    arrayEl = $('.el').toArray();

    TweenMax.set(arrayEl, {y: -80});
    arrayEl.sort(function(){return 0.5-Math.random()});
    TweenMax.staggerTo(arrayEl, 10, {y: h + 200, rotation: Math.random() * 360, ease: Sine.easeInOut, repeat: -1}, 0.3);

});