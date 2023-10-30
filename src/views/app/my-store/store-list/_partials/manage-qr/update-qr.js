import React from "react";
import QRForm from "./qr-form";

const JumbotronUi = (props) => {
  return (
    <React.Fragment>
      <QRForm action="UPDATE" urlMatch={props.match} />
    </React.Fragment>
  );
};

export default JumbotronUi;
