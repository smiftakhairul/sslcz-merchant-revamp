import React from 'react';
import RecurringForm from './_partials/recurring-form';

const JumbotronUi = (props) => {
    return (
        <React.Fragment>
            <RecurringForm
                action="UPDATE"
                urlMatch={props.match}
            />
        </React.Fragment>
    );
}

export default JumbotronUi;