import React, { useState } from "react";
import {
  Button, Card,
  CardBody, CardFooter, CardTitle, Collapse, Form,
  FormGroup, Spinner
} from "reactstrap";

const CardWrapper = (props) => {
  let openStatus = props.toggleOn ? props.isOpen || false : true;
  const [isOpen, setIsOpen] = useState(openStatus);
  const toggle = () => setIsOpen(!isOpen);

  const defaultHeaderContent = () => {
    return (
      <div>
        <span>
          {props.headerTitle || "Search Options"}
          {!props.isLoading && props.totalRows ? (
            <React.Fragment>
              &nbsp;
              <span className="font-italic">
                <sup>
                  <small>{props.totalRows} Rows</small>
                </sup>
              </span>
            </React.Fragment>
          ) : (
            ""
          )}
        </span>
        {props.toggleOn ? (
          <Button
            style={{
              float: "right",
              padding: "0",
              fontSize: "18px",
              textDecoration: "none",
            }}
            color="link"
            onClick={toggle}
            aria-expanded={isOpen}
          >
            <a
              href="#."
              onClick={(e) => e.preventDefault()}
              className="text-primary"
              style={{ textDecoration: "none" }}
            >
              <i
                className={isOpen ? "simple-icon-minus" : "simple-icon-plus"}
              ></i>
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  };

  const defaultFooterContent = () => {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <FormGroup className="mb-0 mx-0">
              <Button
                type="submit"
                color="primary"
                className="with_icon_btn btn-sm mr-2"
              >
                {!props.footerIconOn ? (
                  ""
                ) : (
                  <span className="align-middle">
                    <i className="glyph-icon simple-icon-magnifier"></i>
                  </span>
                )}
                <span> {props.footerSearchBtnTitle || "Search"}</span>
              </Button>
              {!props.footerClearBtnDisabled ? (
                <Button
                  type="button"
                  color="secondary"
                  title="Reset"
                  className="with_icon_btn btn-sm mr-2"
                  onClick={props.clearSearchFields}
                >
                  <span className="align-middle">
                    <i className="glyph-icon simple-icon-refresh"></i>
                  </span>
                </Button>
              ) : (
                ""
              )}
              {props.csvEnabled ? (
                <React.Fragment>
                  {!props.disableDefaultFooterCsv ? (
                    <Button
                      type="button"
                      color="info"
                      className="with_icon_btn btn-sm"
                      disabled={props.isCsvPreparing}
                      onClick={props.onCsvDownload}
                    >
                      {!props.footerIconOn ? (
                        ""
                      ) : (
                        <span className="align-middle">
                          <i className="glyph-icon simple-icon-doc"></i>
                        </span>
                      )}
                      <span>
                        {" "}
                        {props.footerExportBtnTitle || "Generate CSV"}
                      </span>
                    </Button>
                  ) : (
                    ""
                  )}
                  {props.footerCsvContent ? props.footerCsvContent() : ""}
                </React.Fragment>
              ) : (
                ""
              )}
              {props.footerAdditionalContent ? props.footerAdditionalContent() : ''}
            </FormGroup>
          </div>
        </div>
      </React.Fragment>
    );
  };

  const insiderContent = () => {
    let footerContent = props.footerEnabled
      ? props.isDefaultFooter
        ? defaultFooterContent()
        : props.footerContent()
      : "";

    return (
      <React.Fragment>
        <CardBody>
          {props.isLoading ? (
            <div className="text-left my-1">
              <Spinner color="primary" size="sm" />
            </div>
          ) : (
            props.bodyContent()
          )}
        </CardBody>
        {!props.isLoading && props.footerEnabled ? (
          <CardFooter>{footerContent}</CardFooter>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };

  return (
    <Card className={props.className || ''}>
      {!props.headerDisabled ? (
        <CardTitle className={"custom-card-header " + (props.headerBackground || '')}>
          {props.isDefaultHeader
            ? defaultHeaderContent()
            : props.headerContent()}
        </CardTitle>
      ) : (
        ""
      )}
      <Collapse isOpen={isOpen}>
        {props.isForm ? (
          <Form onSubmit={props.onFormSubmit} id={props.formId || "searchForm"}>
            {insiderContent()}
          </Form>
        ) : (
          insiderContent()
        )}
      </Collapse>
    </Card>
  );
};

export default CardWrapper;
