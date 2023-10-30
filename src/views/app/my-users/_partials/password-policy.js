import React from "react";
import { Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const PasswordPolicy = () => {
  const bodyContent = () => {
    return <React.Fragment>
        <Row>
            <Colxx md="12">
                <ul className="pl-3">
                    <li>Password length must be more/equal to 8 characters</li>
                    <li>It must contain minimum a character is UPPERCASE [A-Z]</li>
                    <li>It must contain minimum a character is LOWERCASE [a-z]</li>
                    <li>It must contain minimum a NUMBER [1-0]</li>
                    <li>It must contain minimum a special character, except ` and ^ and Space</li>
                    <li>It must not contain any repeated characters.</li>
                </ul>
            </Colxx>
        </Row>
    </React.Fragment>;
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Password Policy"
        toggleOn={true}
        isDefaultHeader={true}
        footerEnabled={false}
        bodyContent={bodyContent}
      />
    </div>
  );
};

export default PasswordPolicy;
