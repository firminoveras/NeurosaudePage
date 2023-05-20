
function bannerSwitcher() {
    next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) next.prop('checked', true);
    else $('.sec-1-input').first().prop('checked', true);
}


function scrollToPolicySection(number) {
    let aim = $('#section-p' + number).position().top + $('#policy').scrollTop();
    $('#policy').scrollTop(aim);
}

var bannerTimer = setInterval(bannerSwitcher, 5000);

$('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000)
});

window.addEventListener('resize', function (event) {
    document.getElementById("section-home").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}, true);
