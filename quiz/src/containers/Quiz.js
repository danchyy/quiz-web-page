import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Dimmer, Loader, Segment, Container, Grid , Tab} from 'semantic-ui-react';


import * as quizActions from '../store/actions/quiz';
import Answer from '../components/Answer';
import Controls from '../components/Controls';



class Quiz extends Component {


    componentDidMount() {
        this.props.onQuestionsLoad();
    }
    

    render() {

        let question = null;
        let answers = null;
        let controls = null;

        if (this.props.quizData.questions) {
            const activeQuestion = this.props.quizData.questions[this.props.currentQuestion];
            console.log(activeQuestion);
            question = <Grid.Row style={{margin: "10px"}}>
                <Segment size="huge" style={{width: "80%"}}>
                    {activeQuestion.question}
                </Segment>
            </Grid.Row>
            answers = activeQuestion.options.map( (option, index) => {
                return <Grid.Row key={option}>
                    <Answer
                        value={option}
                        isAnswer={this.props.givenAnswers[this.props.currentQuestion] === option}
                        onClick={(event, value) => {this.props.onAnswerClicked(this.props.currentQuestion, option)}}
                        disabled={this.props.givenAnswers[this.props.currentQuestion] !== null}
                        isCorrect={activeQuestion.correct === option}/>
                </Grid.Row>
            })

            controls = <Controls 
                onPreviousClick={this.props.onPreviousClick}
                onNextClick={this.props.onNextClick}
                previousDisabled={this.props.currentQuestion == 0}
                nextDisabled={this.props.currentQuestion === (this.props.quizData.questions.length - 1)}></Controls>
        }

        return (
            <Container>
                <Grid centered columns={1}>
                    {question}
                    {answers}
                    {controls}
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentQuestion: state.currentQuestion,
        availableQuizzes: state.availableQuizzes,
        selectedQuiz: state.selectedQuiz,
        quizData: state.quizData,
        givenAnswers: state.givenAnswers,

        // headers: state.table.headers,
        // comparators: state.table.comparators,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onQuestionsLoad: () => dispatch(quizActions.loadQuestionsForQuiz()),
        onNextClick: () => dispatch(quizActions.onNextQuestionClicked()),
        onPreviousClick: () => dispatch(quizActions.onPreviousQuestionClicked()),
        onAnswerClicked: (index, answer) => dispatch(quizActions.onAnswerClicked(index, answer))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);