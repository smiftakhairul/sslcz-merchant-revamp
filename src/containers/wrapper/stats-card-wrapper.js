import { Card, CardBody, Spinner } from "reactstrap";

const StatsCardWrapper = (props) => {
  return (
    <>
      <div className="icon-row-item">
        <Card>
          <CardBody className="text-center">
            <i className={props.icon ? props.icon : ""} />
            <p className="card-text font-weight-semibold mb-0 mt-2">
              <span className="d-block">{props.title}</span>
              {/*<span className="text-secondary badge">Last 30 days</span>*/}
            </p>
            {props.isLoading ? (
              <div className="text-center mb-0" style={{ lineHeight: "2rem" }}>
                <Spinner color="primary" size="sm" />
              </div>
            ) : (
              <p className="lead text-center">{props.data}</p>
            )}
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default StatsCardWrapper;
