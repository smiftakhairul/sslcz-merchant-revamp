import React from 'react';
import CardWrapper from 'containers/wrapper/card-wrapper';
import {
    DoughnutChart,
} from "../../../../components/charts";

const Channel30Days = (props) => {
    const bodyContent = () => {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    {
                        props.channelShareData.labels && props.channelShareData.labels.length
                            ? <div className="chart-container">
                                <DoughnutChart shadow data={props.channelShareData || {}} />
                            </div>
                            : ''
                    }
                </div>
            </div>
        </React.Fragment>
    };

    return (
        <React.Fragment>
            <div className="">
                <CardWrapper
                    headerTitle="Channels On Last 30 Days"
                    toggleOn={false}
                    isDefaultHeader={true}
                    footerEnabled={false}
                    isLoading={props.isLoading}
                    bodyContent={bodyContent}
                />
            </div>
        </React.Fragment>
    );
}
 
export default Channel30Days;