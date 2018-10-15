var correct = 0;
var outOf = 10;
var time = 30
var Answers = ['a', 'b', 'c', 'd', 'd', 'b', 'b', 'd', 'b', 'c']

var intervalId;

function grabScore() {
    var urChoice = [
        $('input[name=Question1]:checked').val(),
        $('input[name=Question2]:checked').val(),
        $('input[name=Question3]:checked').val(),
        $('input[name=Question4]:checked').val(),
        $('input[name=Question5]:checked').val(),
        $('input[name=Question6]:checked').val(),
        $('input[name=Question7]:checked').val(),
        $('input[name=Question8]:checked').val(),
        $('input[name=Question9]:checked').val(),
        $('input[name=Question10]:checked').val()
    ]

    for (var i = 0; i < 10; i++) {
        if (urChoice[i] === Answers[i]) {
            correct++;
        }
    }
    $('#container').empty();
    $('header').empty();
    $('#yougot').append('Your score: '+correct)
    $('#reload').show()
    clearInterval(intervalId)  
};

$(document).ready(function () {

    intervalId = setInterval(function () {
        time--
        $('header').html(time)
        if (time === 0) {
            grabScore()
        }
    }, 1 * 1000)

    $('input[type=submit]').click(function (e) {
            e.preventDefault()
            grabScore()
        })
})

$('#reload').on('click', function () {
    location.reload()
})



