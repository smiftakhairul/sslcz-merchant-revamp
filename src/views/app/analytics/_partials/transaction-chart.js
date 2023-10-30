import React from 'react';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import { ThemeColors } from "helpers/theme-colors";
import { DoughnutChart } from 'components/charts';
const colors = ThemeColors();

const TransactionChart = (props) => {
    const bodyContent = () => {
        return <React.Fragment>
            <div className="row">
                <div className="col-md-12">
                    {
                        props?.data?.data?.length
                            ? <div className="chart-container">
                                <DoughnutChart shadow={true} data={{
                                    labels: props?.data?.labels,
                                    datasets: [
                                        {
                                            label: '',
                                            borderColor: [colors.themeColor3, colors.themeColor2, colors.themeColor1],
                                            backgroundColor: [
                                                colors.themeColor3_10,
                                                colors.themeColor2_10,
                                                colors.themeColor1_10
                                            ],
                                            borderWidth: 2,
                                            data: props?.data?.data
                                        }
                                    ]
                                }}/>
                            </div>
                            : ''
                    }
                </div>
            </div>
        </React.Fragment>
    };

    return (
        <div className="">
            <CardWrapper
                headerTitle={props.title}
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
 
export default TransactionChart;
