import React from 'react';
import PaymentLinkForm from './_partials/payment-link-form';

const JumbotronUi = (props) => {
    return (
        <React.Fragment>
            <PaymentLinkForm
                action="ADD"
                urlMatch={props.match}
            />
        </React.Fragment>
    );
}

export default JumbotronUi;