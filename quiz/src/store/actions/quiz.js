import * as actionTypes from "./actionTypes";
// import questionsQuiz from "../../data/quiz_data.json";
// import * as fs from "graceful-fs";


// const readFiles = (dirname, onFileContent, onError) => {
//     fs.readdir(dirname, (err, filenames) => {
//         if (err) {
//         onError(err);
//         return;
//         }
//         filenames.forEach( (filename) => {
//             fs.readFile(dirname + filename, 'utf-8', (err, content) => {
//                 if (err) {
//                     onError(err);
//                     return;
//                 }
//                 onFileContent(content);
//             });
//         });
//     });
// }


const onQuestionsLoad = (questions) => {
    return {
        type: actionTypes.ON_LOAD_QUESTIONS,
        quizData: questions
    }
}

export const loadQuestionsForQuiz = () => {
    return dispatch => {
        const data = require('../../data/quiz_data.json');
        console.log(data);
        dispatch(onQuestionsLoad(data));
    }
}

export const onNextQuestionClicked = () => {
    return {
        type: actionTypes.ON_NEXT_QUESTION_CLICKED,
    }
}

export const onPreviousQuestionClicked = () => {
    return {
        type: actionTypes.ON_PREVIOUS_QUESTION_CLICKED,
    }
}

export const onAnswerClicked = (index, answer) => {
    return {
        type: actionTypes.ON_ANSWER_CLICKED,
        answer: answer,
        index: index
    }
}
