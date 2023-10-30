import React, { useEffect, useState } from "react";
import { Row, Card, CardTitle, Form, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions";
import IntlMessages from "../../helpers/intl";
import { Colxx } from "../../components/bootstrap/custom-bootstrap";

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    //
  }, [props.error]);

  const onUserRegister = () => {
    if (email !== "" && password !== "") {
      props.history.push("/");
    }
  }

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use this form to register. <br />
              If you are a member, please{" "}
              <NavLink to={`/user/login`} className="white">
                login
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to={`/`} className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Form>
              <Label className="form-group has-float-label mb-4">
                <Input type="name" defaultValue={name} />
                <IntlMessages id="user.fullname" />
              </Label>
              <Label className="form-group has-float-label mb-4">
                <Input type="email" defaultValue={email} />
                <IntlMessages id="user.email" />
              </Label>
              <Label className="form-group has-float-label mb-4">
                <Input type="password" />
                <IntlMessages
                  id="user.password"
                  defaultValue={password}
                />
              </Label>
              <div className="d-flex justify-content-end align-items-center">
                <Button
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  onClick={() => onUserRegister()}
                >
                  <IntlMessages id="user.register-button" />
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { user, loading } = authUser;
  return { user, loading };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
