function renderSlide1() {
    localStorage.setItem("score", 0);
    var audio = new Audio('../resources/Audio/LMSTest_VO_S1.mp3');
    audio.play();
    $("#welcome-text").hide();
    $("#welcome-text").fadeIn(1000);

    var liStrings = ["Ensure your final product will work the way you need it, where you need it.",
                    "Verify the successful integration of your new custom built Designing Digitally, Inc. training.",
                    "Confirm the functionality of SCORM between this test course and your LMS."];
    var i = 1;
    liStrings.forEach(function() {
        animateBulletPoints(i);
        i++;
    });

    function animateBulletPoints(c) {
        var delay = 0;
        if(c === 1) {
            delay = 6500;
        } else if (c === 2) {
            delay = 11000;
        } else if (c === 3) {
            delay = 16000;
        }
        setTimeout(function(){
            var spans = '<span>' + liStrings[c-1].split('').join('</span><span>') + '</span>';
            $('#li-' + c).show();
            $(spans).hide().appendTo('#li-' + c).each(function (j) {
                $(this).delay(20 * j).css({
                    display: 'inline',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 100);
            });
        }, delay);
    }
}

function renderSlide2() {
    var audio = new Audio('../resources/Audio/LMSTest_VO_S2.mp3');
    audio.play();
}

var dragSuccess = false;

function allowDrop(ev) {
    ev.preventDefault();
}

function showDropZone(ev) {
    ev.preventDefault();
    $('.draggable-zone').addClass('active');
}

function hideDropZone(ev) {
    ev.preventDefault();
    $('.draggable-zone').removeClass('active');
}

function dragCake(ev) {
    ev.dataTransfer.setData("text", 'cake');
    dragSuccess = false;
}

function dropOnPlatform(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(data === 'cake') {
        dragSuccess = true;
        $('.draggable-zone').removeClass('active');
        $('.content').prepend($('<img>',{src:'../resources/Graphics/Slide%20Contents/Cake.png', class: 'dragged-cake'}));
        $('#cake').css('visibility', 'hidden');
    }
}

function checkDragSuccess() {
    if(dragSuccess) {
        addScore(25);
        $('#correctAns').show();
    } else {
        $('#wrongAns').show();
    }
}

function renderSlide3() {
    var audio = new Audio('../resources/Audio/LMSTest_VO_S3.mp3');
    audio.play();
}

function submitSlide3() {
    var selectedRadio = $("input[type='radio']:checked");
    if(selectedRadio) {
        var val = selectedRadio.val();
        console.log(val);
        if(val === 'plant') {
            addScore(25);
            $('#correctAns').show();
        } else {
            $('#wrongAns').show();
        }
    } else {
        alert("Please select your answer");
    }
}

function renderSlide4() {
    var audio = new Audio('../resources/Audio/LMSTest_VO_S4.mp3');
    audio.play();
}

function submitSlide4() {
    if($('#train').is(':checked') && $('#van').is(':checked') && !$('#turtle').is(':checked')) {
        addScore(50);
        $('#correctAns').show();
    } else {
        $('#wrongAns').show();
    }
}

function renderSlide5() {
    var audio = new Audio('../resources/Audio/LMSTest_VO_S5.mp3');
    audio.play();
    $('#percentage').html(localStorage.getItem("score"));
}

function addScore(score) {
    if(localStorage.getItem("score"))
        score = parseInt(localStorage.getItem("score")) + score;
    localStorage.setItem("score", score);
}
