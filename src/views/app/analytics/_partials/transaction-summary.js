import React from 'react';
import CardWrapper from '../../../../containers/wrapper/card-wrapper';
import { ReactTableWithPaginationCard } from '../../../../components/table/table';

const TransactionSummary = (props) => {
    const bodyContent = () => {
        return <React.Fragment>
            <ReactTableWithPaginationCard 
                data={props.marketShareData} 
                columnDefinition={props.columns}
                defaultPageSize={20} 
                serverSide={false}
                disableSearch={false}
            />
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
                totalRows={props.totalRows}
            />
        </div>
    );
}
 
export default TransactionSummary;
