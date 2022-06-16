const quizData = [
    {
        question: "Ceci est ma Première question",
        a:"Réponse a",
        b:"Réponse b",
        c:"Réponse c",
        d:"Réponse d",
        correct: "c",
    },
    {
        question: "Deuxième question",
        a:"Réponse a",
        b:"Réponse b",
        c:"Réponse c",
        d:"Réponse d",
        correct: "c", 
    },
    {
        question: "Troisème question",
        a:"Réponse a",
        b:"Réponse b",
        c:"Réponse c",
        d:"Réponse d",
        correct: "c", 
    },
    {
        question: "Quatrième question",
        a:"Réponse a",
        b:"Réponse b",
        c:"Réponse c",
        d:"Réponse d",
        correct: "c", 
    }
 
];

const quiz=document.getElementById('quiz')
const reponseEls = document.querySelectorAll('.reponse') // "Els" signifie "list"
const questionEl=document.getElementById('question')

const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')

const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    reponseEls.forEach(reponseEl => reponseEl.checked = false)
}

function getSelected() {
    let reponse
    reponseEls.forEach(reponseEl => {
        if(reponseEl.checked) {
            reponse = reponseEl.id
        }
    })
    return reponse
}

submitBtn.addEventListener('click', () => {
    const reponse = getSelected()
    if(reponse) {
        if(reponse === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz() 
        } else {
            quiz.innerHTML = `
			<h2>Tu as répondu a ${score}/${quizData.lenght} questions correctement</h2>
            
            <button onclick="location.reload()">Reload</button>
			`
        }
    }
}

)