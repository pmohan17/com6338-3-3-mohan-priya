var questionsArr = [
    {question: "Cats have claws.", answer: true},
    {question: "Dogs like bones.", answer: true},
    {question: "It's not ok to give dogs chocolate.", answer: true},
    {question: "Having pets lengthens your lifespan.", answer: true},
    {question: "Only responsible people should have pets.", answer: true},
]

var correct = 0

function runQuiz() {
    console.log('quiz running')
    console.log(questionsArr)
    for (i = 0; i < questionsArr.length; i++){
       if(confirm(questionsArr[i].question)===questionsArr[i].answer) {
        correct++
    } else {} 
    
}
    var fullQuiz = questionsArr.length
    var score = (correct/fullQuiz) * 100
    var finalScore = Math.round(score)
    alert ('Your score is '+ finalScore + '%') 
    correct = 0
    }
    