// const javaScript =() => {

//     const quizData = [
//         {
//             question: "Which language runs in a web browser abhinav?",
//             a: "Java",
//             b: "C",
//             c: "Python",
//             d: "JavaScript",
//             correct: "d",
//         },
//         {
//             question: "What does CSS stand for?",
//             a: "Central Style Sheets",
//             b: "Cascading Style Sheets",
//             c: "Cascading Simple Sheets",
//             d: "Cars SUVs Sailboats",
//             correct: "b",
//         },
//         {
//             question: "What does HTML stand for?",
//             a: "Hypertext Markup Language",
//             b: "Hypertext Markdown Language",
//             c: "Hyperloop Machine Language",
//             d: "Helicopters Terminals Motorboats Lamborginis",
//             correct: "a",
//         },
//         {
//             question: "What year was JavaScript launched?",
//             a: "1996",
//             b: "1995",
//             c: "1994",
//             d: "none of the above",
//             correct: "b",
//         },
//     ];
//     const quiz = document.getElementById('quiz')
//     const answerEls = document.querySelectorAll('.answer')
//     const questionEl = document.getElementById('question')
//     const a_text = document.getElementById('a_text')
//     const b_text = document.getElementById('b_text')
//     const c_text = document.getElementById('c_text')
//     const d_text = document.getElementById('d_text')
//     const submitBtn = document.getElementById('submit')
    
//     let currentQuiz = 0
//     let score = 0
    
//     loadQuiz()
    
//     function loadQuiz() {
//         deselectAnswers()
    
//         const currentQuizData = quizData[currentQuiz]
    
//         questionEl.innerText = currentQuizData.question
//         a_text.innerText = currentQuizData.a
//         b_text.innerText = currentQuizData.b
//         c_text.innerText = currentQuizData.c
//         d_text.innerText = currentQuizData.d
//     }
    
//     function deselectAnswers() {
//         answerEls.forEach(answerEl => answerEl.checked = false)
//     }
    
//     function getSelected() {
//         let answer
    
//         answerEls.forEach(answerEl => {
//             if(answerEl.checked) {
//                 answer = answerEl.id
//             }
//         })
    
//         return answer
//     }
    
//     submitBtn.addEventListener('click', () => {
//         const answer = getSelected()
    
//         if(answer) {
//             if(answer === quizData[currentQuiz].correct) {
//                 score++
//             }
    
//             currentQuiz++
    
//             if(currentQuiz < quizData.length) {
//                 loadQuiz()
//             } else {
//                 quiz.innerHTML = `
//                     <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
//                     <button onclick="location.reload()">Reload</button>
//                 `
//             }
//         }
//     })
//     }
    
//     const css =() => {
        
//         const quizData = [
//             {
//                 question: "Which language runs in a web browser harish?",
//                 a: "Java",
//                 b: "C",
//                 c: "Python",
//                 d: "JavaScript",
//                 correct: "d",
//             },
//             {
//                 question: "What does CSS stand for?",
//                 a: "Central Style Sheets",
//                 b: "Cascading Style Sheets",
//                 c: "Cascading Simple Sheets",
//                 d: "Cars SUVs Sailboats",
//                 correct: "b",
//             },
//             {
//                 question: "What does HTML stand for?",
//                 a: "Hypertext Markup Language",
//                 b: "Hypertext Markdown Language",
//                 c: "Hyperloop Machine Language",
//                 d: "Helicopters Terminals Motorboats Lamborginis",
//                 correct: "a",
//             },
//             {
//                 question: "What year was JavaScript launched?",
//                 a: "1996",
//                 b: "1995",
//                 c: "1994",
//                 d: "none of the above",
//                 correct: "b",
//             },
//         ];
//         const quiz = document.getElementById('quiz')
//     const answerEls = document.querySelectorAll('.answer')
//     const questionEl = document.getElementById('question')
//     const a_text = document.getElementById('a_text')
//     const b_text = document.getElementById('b_text')
//     const c_text = document.getElementById('c_text')
//     const d_text = document.getElementById('d_text')
//     const submitBtn = document.getElementById('submit')
    
//     let currentQuiz = 0
//     let score = 0
    
//     loadQuiz()
    
//     function loadQuiz() {
//         deselectAnswers()
    
//         const currentQuizData = quizData[currentQuiz]
    
//         questionEl.innerText = currentQuizData.question
//         a_text.innerText = currentQuizData.a
//         b_text.innerText = currentQuizData.b
//         c_text.innerText = currentQuizData.c
//         d_text.innerText = currentQuizData.d
//     }
    
//     function deselectAnswers() {
//         answerEls.forEach(answerEl => answerEl.checked = false)
//     }
    
//     function getSelected() {
//         let answer
    
//         answerEls.forEach(answerEl => {
//             if(answerEl.checked) {
//                 answer = answerEl.id
//             }
//         })
    
//         return answer
//     }
    
//     submitBtn.addEventListener('click', () => {
//         const answer = getSelected()
    
//         if(answer) {
//             if(answer === quizData[currentQuiz].correct) {
//                 score++
//             }
    
//             currentQuiz++
    
//             if(currentQuiz < quizData.length) {
//                 loadQuiz()
//             } else {
//                 quiz.innerHTML = `
//                     <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
//                     <button onclick="location.reload()">Reload</button>
//                 `
//             }
//         }
//     })
//     }
    
//     const html =() => {
        
//         const quizData = [
//             {
//                 question: "Which language runs in a web browser saket?",
//                 a: "Java",
//                 b: "C",
//                 c: "Python",
//                 d: "JavaScript",
//                 correct: "d",
//             },
//             {
//                 question: "What does CSS stand for?",
//                 a: "Central Style Sheets",
//                 b: "Cascading Style Sheets",
//                 c: "Cascading Simple Sheets",
//                 d: "Cars SUVs Sailboats",
//                 correct: "b",
//             },
//             {
//                 question: "What does HTML stand for?",
//                 a: "Hypertext Markup Language",
//                 b: "Hypertext Markdown Language",
//                 c: "Hyperloop Machine Language",
//                 d: "Helicopters Terminals Motorboats Lamborginis",
//                 correct: "a",
//             },
//             {
//                 question: "What year was JavaScript launched?",
//                 a: "1996",
//                 b: "1995",
//                 c: "1994",
//                 d: "none of the above",
//                 correct: "b",
//             },
//         ];
//         const quiz = document.getElementById('quiz')
//     const answerEls = document.querySelectorAll('.answer')
//     const questionEl = document.getElementById('question')
//     const a_text = document.getElementById('a_text')
//     const b_text = document.getElementById('b_text')
//     const c_text = document.getElementById('c_text')
//     const d_text = document.getElementById('d_text')
//     const submitBtn = document.getElementById('submit')
    
//     let currentQuiz = 0
//     let score = 0
    
//     loadQuiz()
    
//     function loadQuiz() {
//         deselectAnswers()
    
//         const currentQuizData = quizData[currentQuiz]
    
//         questionEl.innerText = currentQuizData.question
//         a_text.innerText = currentQuizData.a
//         b_text.innerText = currentQuizData.b
//         c_text.innerText = currentQuizData.c
//         d_text.innerText = currentQuizData.d
//     }
    
//     function deselectAnswers() {
//         answerEls.forEach(answerEl => answerEl.checked = false)
//     }
    
//     function getSelected() {
//         let answer
    
//         answerEls.forEach(answerEl => {
//             if(answerEl.checked) {
//                 answer = answerEl.id
//             }
//         })
    
//         return answer
//     }
    
//     submitBtn.addEventListener('click', () => {
//         const answer = getSelected()
    
//         if(answer) {
//             if(answer === quizData[currentQuiz].correct) {
//                 score++
//             }
    
//             currentQuiz++
    
//             if(currentQuiz < quizData.length) {
//                 loadQuiz()
//             } else {
//                 quiz.innerHTML = `
//                     <h2>You answered ${score}/${quizData.length} questions correctly</h2>
    
//                     <button onclick="location.reload()">Reload</button>
//                 `
//             }
//         }
//     })
//     }

// const questions = {
//     HTML: [
//         {
//             question: "Which language runs in a web browser abhinav?",
//             a: "Java",
//             b: "C",
//             c: "Python",
//             d: "JavaScript",
//             correct: "d",
//         },
//         {
//             question: "What does CSS stand for?",
//             a: "Central Style Sheets",
//             b: "Cascading Style Sheets",
//             c: "Cascading Simple Sheets",
//             d: "Cars SUVs Sailboats",
//             correct: "b",
//         },
//         {
//             question: "What does HTML stand for?",
//             a: "Hypertext Markup Language",
//             b: "Hypertext Markdown Language",
//             c: "Hyperloop Machine Language",
//             d: "Helicopters Terminals Motorboats Lamborginis",
//             correct: "a",
//         },
//         {
//             question: "What year was JavaScript launched?",
//             a: "1996",
//             b: "1995",
//             c: "1994",
//             d: "none of the above",
//             correct: "b",
//         },
//     ],

//     CSS: [
//         {
//             question: "Which language runs in a web browser abhinav?",
//             a: "Java",
//             b: "C",
//             c: "Python",
//             d: "JavaScript",
//             correct: "d",
//         },
//         {
//             question: "What does CSS stand for?",
//             a: "Central Style Sheets",
//             b: "Cascading Style Sheets",
//             c: "Cascading Simple Sheets",
//             d: "Cars SUVs Sailboats",
//             correct: "b",
//         },
//         {
//             question: "What does HTML stand for?",
//             a: "Hypertext Markup Language",
//             b: "Hypertext Markdown Language",
//             c: "Hyperloop Machine Language",
//             d: "Helicopters Terminals Motorboats Lamborginis",
//             correct: "a",
//         },
//         {
//             question: "What year was JavaScript launched?",
//             a: "1996",
//             b: "1995",
//             c: "1994",
//             d: "none of the above",
//             correct: "b",
//         },
//     ],


//     JAVASCRIPT: 
//         [
//         {
//             question: "Which language runs in a web browser abhinav?",
//             a: "Java",
//             b: "C",
//             c: "Python",
//             d: "JavaScript",
//             correct: "d",
//         },
//         {
//             question: "What does CSS stand for?",
//             a: "Central Style Sheets",
//             b: "Cascading Style Sheets",
//             c: "Cascading Simple Sheets",
//             d: "Cars SUVs Sailboats",
//             correct: "b",
//         },
//         {
//             question: "What does HTML stand for?",
//             a: "Hypertext Markup Language",
//             b: "Hypertext Markdown Language",
//             c: "Hyperloop Machine Language",
//             d: "Helicopters Terminals Motorboats Lamborginis",
//             correct: "a",
//         },
//         {
//             question: "What year was JavaScript launched?",
//             a: "1996",
//             b: "1995",
//             c: "1994",
//             d: "none of the above",
//             correct: "b",
//         },
//     ],
// }

let quizData;

if(document.getElementById('html'))
{
    quizData =  [

        {
            question: "What does HTML stand for?",
            a: "Hypertext Markup Language",
            b: "Hypertext Markdown Language",
            c: "Hyperloop Machine Language",
            d: "Helicopters Terminals Motorboats Lamborginis",
            correct: "a",
        },

        {
            question: "What do you understand by HTML?",
            a: "HTML describes the structure of a webpage",
            b: "HTML is the standard markup language mainly used to create web pages",
            c: "HTML consists of a set of elements that helps the browser how to view the content",
            d: "All of the above",
            correct: "d",
        },

        {
            question: "Who is the father of HTML?",
            a: "Rasmus Lerdorf",
            b: "Tim Berners-Lee",
            c: "Brendan Eich",
            d: "Sergey Brin",
            correct: "b",
        },

        {
            question: "Which is used to read an HTML page and render it?",
            a: "Web server",
            b: "Web network",
            c: " Web browser",
            d: "Web matrix",
            correct: "c",
        },

        {
            question: "Which tag is used for inserting the largest heading in HTML?",
            a: "head",
            b: "<h1>",
            c: "<h6>",
            d: "heading",
            correct: "b",
        },
    ]
}
else if(document.getElementById('css'))
{
    quizData=  [
        {
            question: "Where in an HTML document is the correct place to refer to an external style sheet?",
            a: "In the <head> section",
            b: "In the <body> section",
            c: "At the end of the document",
            d: "None of these",
            correct: "a",
        },
        {
            question: "What does CSS stand for?",
            a: "Central Style Sheets",
            b: "Cascading Style Sheets",
            c: "Cascading Simple Sheets",
            d: "Cars SUVs Sailboats",
            correct: "b",
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            a: "<css>",
            b: "<style>",
            c: "<script>",
            d: "None of these",
            correct: "b",
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            a: "styles",
            b: "class",
            c: "font",
            d: "style",
            correct: "d",
        },
    ]
}
else if(document.getElementById('javascript'))
{
    quizData=  [
        {
            question: "Which language runs in a web browser abhinav 456?",
            a: "Java",
            b: "C",
            c: "Python",
            d: "JavaScript",
            correct: "d",
        },
        {
            question: "What is the correct syntax for referring to an external script called xxx.js?",
            a: "<script src=xxx.js>",
            b: "<script name=xxx.js>",
            c: "<script href=xxx.js>",
            d: "None of these",
            correct: "a",
        },
        {
            question: "Where is the correct place to insert a JavaScript?",
            a: "The <head> section",
            b: "Both the <head> section and the <body> section are correct",
            c: "The <body> section",
            d: "None of these",
            correct: "b",
        },
        {
            question: "What year was JavaScript launched?",
            a: "1996",
            b: "1995",
            c: "1994",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            a: "<script>",
            b: "<js>",
            c: "<scripting>",
            d: "<javascript>",
            correct: "a",
        },
    ]
}

    const quiz = document.getElementById('quiz')
    const answerEls = document.querySelectorAll('.answer')
    const questionEl = document.getElementById('question')
    const a_text = document.getElementById('a_text')
    const b_text = document.getElementById('b_text')
    const c_text = document.getElementById('c_text')
    const d_text = document.getElementById('d_text')
    const submitBtn = document.getElementById('submit')
    
    let currentQuiz = 0
    let score = 0
    
    loadQuiz()
    
    function loadQuiz() {
        deselectAnswers()
    
        const currentQuizData = quizData[currentQuiz]
    
        questionEl.innerText = currentQuizData.question
        a_text.innerText = currentQuizData.a
        b_text.innerText = currentQuizData.b
        c_text.innerText = currentQuizData.c
        d_text.innerText = currentQuizData.d
    }
    
    function deselectAnswers() {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
    
    function getSelected() {
        let answer
    
        answerEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id
            }
        })
    
        return answer
    }
    
    submitBtn.addEventListener('click', () => {
        const answer = getSelected()
    
        if(answer) {
            if(answer === quizData[currentQuiz].correct) {
                score++
            }
    
            currentQuiz++
    
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {

                const name = localStorage.getItem('name');
                localStorage.clear();
                const percentage = (score/quizData.length)*100;

                quiz.innerHTML = `
                    <h1><center>🎉🎉Well Done ${name}🎉🎉<center></h1>
                    <h2>You answered ${score} out Of ${quizData.length} questions correctly</h2>
                    <h2>Your Efficiency is ${percentage}%.</h2>
                    <a href="../templates/index.html"><button>Go To Home</button></a>
                `
            }
        }
    })