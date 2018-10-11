var correct = 0;
var outOf = 10;

var Answers = {
    q1: 'a',
    q2: 'b',
    q3: 'c',
    q4: 'd',
    q5: 'd',
    q6: 'b',
    q7: 'b',
    q8: 'd',
    q9: 'b',
    q10: 'c'
}


$('input[type=submit]').on('click', function (e) {

    e.preventDefault()

    var annnnn = {
        answer1: $('input[name=Question1]:checked').val(),
        answer2: $('input[name=Question2]:checked').val(),
        answer3: $('input[name=Question3]:checked').val(),
        answer4: $('input[name=Question4]:checked').val(),
        answer5: $('input[name=Question5]:checked').val(),
        answer6: $('input[name=Question6]:checked').val(),
        answer7: $('input[name=Question7]:checked').val(),
        answer8: $('input[name=Question8]:checked').val(),
        answer9: $('input[name=Question9]:checked').val(),
        answer10: $('input[name=Question10]:checked').val()
    }
   
    for (var key in Answers) {

        if (Answers[key] === annnnn[key]) {
            correct++
            console.log(correct)
        }
    }

});
