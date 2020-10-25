import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

const Controls = (props) => {
    return <Grid.Row>
        <Button
            disabled={props.previousDisabled}
            onClick={props.onPreviousClick}>
            Previous
        </Button>
        <Button
            disabled={props.nextDisabled}
            onClick={props.onNextClick}>
            Next
        </Button>
    </Grid.Row>
}

export default Controls;