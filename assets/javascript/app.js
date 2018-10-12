var correct = 0;
var outOf = 10;
var Answers = ['a', 'b', 'c', 'd', 'd', 'b', 'b', 'd', 'b', 'c']



$('input[type=submit]').click(function (e, run) {

    // setTimeout(run, 3000)
    e.preventDefault()

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
    $('header').append(correct)
    $('#reload').show()

    
})

$('#reload').on('click', function () {
    location.reload();
})
