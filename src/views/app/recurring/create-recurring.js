import React from 'react';
import RecurringForm from './_partials/recurring-form';

const JumbotronUi = (props) => {
    return (
        <React.Fragment>
            <RecurringForm
                action="ADD"
                urlMatch={props.match}
            />
        </React.Fragment>
    );
}

export default JumbotronUi;