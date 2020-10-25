import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currentQuestion: 0,
    availableQuizzes: [],
    selectedQuiz: null,
    quizData: [],
    givenAnswers: []
}

const quizReducer = (state = initialState, action) => {
    const curAnswers = [...state.givenAnswers];
    // ON_NEXT_QUESTION_CLICKED
    // ON_PREVIOUS_QUESTION_CLICKED
    // ON_LOAD_QUESTIONS
    // ON_LOAD_QUIZ_NAMES
    switch (action.type) {
        case actionTypes.ON_NEXT_QUESTION_CLICKED:
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1
            }
        case actionTypes.ON_PREVIOUS_QUESTION_CLICKED:
            return {
                ...state,
                currentQuestion: state.currentQuestion - 1
            }
        case actionTypes.ON_LOAD_QUIZ_NAMES:
            return {
                ...state,
                availableQuizzes: action.availableQuizzes
            }
        case actionTypes.ON_LOAD_QUESTIONS:
            const newArray = [];
            for (let i=0; i < action.quizData.questions.length; i++) {
                newArray.push(null);
            }
            return {
                ...state,
                quizData: action.quizData,
                givenAnswers: newArray
            }
        case actionTypes.ON_ANSWER_CLICKED:
            curAnswers[action.index] = action.answer;
            return {
                ...state,
                givenAnswers: curAnswers
            }
        default:
            return state
    }
}

export default quizReducer;