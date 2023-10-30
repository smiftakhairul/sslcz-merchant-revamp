import React from 'react';
import UserForm from './_partials/user-form';

const JumbotronUi = (props) => {
    return (
        <React.Fragment>
            <UserForm
                action="UPDATE"
                urlMatch={props.match}
            />
        </React.Fragment>
    );
}

export default JumbotronUi;