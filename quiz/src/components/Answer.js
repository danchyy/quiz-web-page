import React from 'react';
import { Button, Segment } from 'semantic-ui-react';

const answer = (props) => {
    let style={width: "80%"}
    if (props.disabled && props.isAnswer) {
        style["backgroundColor"] = props.isCorrect ? "green" : "red";
    }
    return <Button
        style={style}
        onClick={(event, data) => {
            if (!props.disabled) {
                props.onClick();
            }
        }}>
        {props.value}
    </Button>;
}

export default answer;