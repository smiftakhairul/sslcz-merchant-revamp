import React, { useEffect, useState } from "react";
import { Row, Card, CardTitle, Label, FormGroup, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Colxx } from "../../components/bootstrap/custom-bootstrap";
import IntlMessages from "../../helpers/intl";
import { forgotPassword } from "../../redux/actions";
import { NotificationManager } from "../../components/notifications";
import { connect } from "react-redux";

const ForgotPassword = (props) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (props.error) {
      NotificationManager.warning(
        props.error,
        "Forgot Password Error",
        3000,
        null,
        null,
        ''
      );
    } else {
      if (!props.loading && props.forgotUserMail === "success") {
        NotificationManager.success(
          "Please check your email.",
          "Forgot Password Success",
          3000,
          null,
          null,
          ''
        );
      }
    }
  }, [props.error]);

  const onForgotPassword = (values) => {
    if (!props.loading) {
      if (values.email !== "") {
        props.forgotPassword(values, props.history);
      }
    }
  }

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = "Please enter your email address";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">MAGIC IS IN THE DETAILS</p>
            <p className="white mb-0">
              Please use your e-mail to reset your password. <br />
              If you are not a member, please{" "}
              <NavLink to={`/register`} className="white">
                register
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to={`/`} className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.forgot-password" />
            </CardTitle>

            <Formik
              initialValues={{ email }}
              onSubmit={onForgotPassword}>
              {({ errors, touched }) => (
                <Form className="av-tooltip tooltip-label-bottom">
                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  <div className="d-flex justify-content-between align-items-center">
                    <NavLink to={`/user/login`}>
                      <IntlMessages id="user.login-title" />
                    </NavLink>
                    <Button
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${props.loading ? "show-spinner" : ""}`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label"><IntlMessages id="user.reset-password-button" /></span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { forgotUserMail, loading, error } = authUser;
  return { forgotUserMail, loading, error };
};

export default connect(
  mapStateToProps,
  {
    forgotPassword
  }
)(ForgotPassword);
