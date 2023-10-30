import { Badge, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Colxx } from "../../../../components/bootstrap/custom-bootstrap";
import CardWrapper from "../../../../containers/wrapper/card-wrapper";

const SymbolMeaning = () => {
  const bodyContent = () => {
    return (
      <>
        <Row>
          <Colxx md="6" xxs="12">
            <ListGroup className="mb-4">
              <ListGroupItem className="bg-transparent">
                <span className="text-primary"> * (new) </span> Marked on
                last transactions which are occurred within last ten
                minutes.
              </ListGroupItem>
              <ListGroupItem className="bg-transparent">
                *{" "}
                <Badge className="badge-info mr-2" color="">
                  read
                </Badge>
                <span>Executed Full Refund against the transaction.</span>
              </ListGroupItem>
              <ListGroupItem className="bg-transparent">
                <span>
                  * Searching from and searching to must be within 90 days.
                </span>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>Payment Settled.</span>
                <Badge className="badge-outline-primary" color="">
                  S
                </Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>Executed Full Refund against the transaction.</span>
                <Badge className="badge-primary" color="">
                  R
                </Badge>
              </ListGroupItem>
            </ListGroup>
          </Colxx>
          <Colxx md="6" xxs="12">
            <ListGroup className="mb-4">
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>
                  Executed Partial Refund against the transaction.
                </span>
                <Badge color="dark">PR</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>
                  Executed Chargeback request against the transaction.
                </span>
                <Badge color="danger">C</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>Payment Hold for this transaction.</span>
                <Badge color="light">Success</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>
                  EMI transaction with Tenure. Here, 3 is the EMI Tenure.
                </span>
                <Badge color="success">EMI-3</Badge>
              </ListGroupItem>
              <ListGroupItem className="d-flex justify-content-between bg-transparent">
                <span>
                  Customer got instant discount based on special campaign.
                </span>
                <Badge color="info">DIS</Badge>
              </ListGroupItem>
            </ListGroup>
          </Colxx>
        </Row>
      </>
    );
  };

  return (
    <div className="">
      <CardWrapper
        headerTitle="Symbol Meaning"
        toggleOn={true}
        isDefaultHeader={true}
        footerEnabled={false}
        bodyContent={bodyContent}
      />
    </div>
  );
};

export default SymbolMeaning;
