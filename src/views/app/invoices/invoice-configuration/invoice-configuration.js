import React from 'react';
import InvoiceForm from './_partials/invoice-form';

const JumbotronUi = (props) => {
    return (
        <React.Fragment>
            <InvoiceForm
                action="ADD"
                urlMatch={props.match}
            />
        </React.Fragment>
    );
}

export default JumbotronUi;