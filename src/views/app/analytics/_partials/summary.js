import React from 'react';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import PerfectScrollbar from "react-perfect-scrollbar";
import { getParseFloat } from 'helpers/common';

const Summary = (props) => {
    const bodyContent = () => {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboard-list-with-user table-summary summary-table-container">
                        <PerfectScrollbar options={{suppressScrollX: true, wheelPropagation: false}}>
                        <table className="table table-sm table-borderless mb-0">
                            <tbody>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-info"/></td>
                                    <td><span className="font-weight-medium">Total Un-attempts</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-info">
                                            {props.data?.total_unattempted || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-info"/></td>
                                    <td><span className="font-weight-medium">Total Pending</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-info">
                                            {props.data?.total_pending || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-danger"/></td>
                                    <td><span className="font-weight-medium">Total Failed</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-danger">
                                            {props.data?.total_failed || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-warning"/></td>
                                    <td><span className="font-weight-medium">Total Cancel</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-warning">
                                            {props.data?.total_cancel || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-success"/></td>
                                    <td><span className="font-weight-medium">Total Successful Transaction</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-success">
                                            {props.data?.total_success || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="border-bottom h-50">
                                    <td><span className="log-indicator align-middle border-primary"/></td>
                                    <td><span className="font-weight-medium">Total Data</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-primary">
                                            {props.data?.total_transaction || 0}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="h-50">
                                    <td><span className="log-indicator align-middle border-success"/></td>
                                    <td><span className="font-weight-medium">Total Successful Amount</span></td>
                                    <td className="text-right">
                                        <span className="text-white badge badge-success">
                                            {getParseFloat(props.data?.total_success_amount || 0)}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle="Summary"
                toggleOn={true}
                isOpen={true}
                isDefaultHeader={true}
                footerEnabled={false}
                isLoading={props.isLoading}
                bodyContent={bodyContent}
            />
        </div>
    );
}
 
export default Summary;
