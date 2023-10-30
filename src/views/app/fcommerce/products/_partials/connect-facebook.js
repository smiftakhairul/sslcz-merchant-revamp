import CardWrapper from 'containers/wrapper/card-wrapper';
import React from 'react';
import { Button } from 'reactstrap';

const ConnectFacebook = (props) => {
    const connectWithFacebook = () => {
        //
    };

    const bodyContent = () => {
        return <React.Fragment>
            <Button
                className="btn btn-xs btn-primary"
                title="Copy Checkout Link"
                color=""
                onClick={connectWithFacebook}
            >
                <span className="align-middle d-flex align-items-center">
                    <i className="glyph-icon simple-icon-social-facebook pr-1"></i>Connect with Facebook
                </span>
            </Button>
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <div className="">
                <CardWrapper
                    headerTitle="Connect Facebook"
                    toggleOn={true}
                    isOpen={false}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={props.isLoading}
                    bodyContent={bodyContent}
                />
            </div>
        </React.Fragment>
    );
}
 
export default ConnectFacebook;