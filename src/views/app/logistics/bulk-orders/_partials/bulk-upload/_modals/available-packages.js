import { ReactTableWithPaginationCard } from "components/table/table";
import bulkOrderAvailablePackagesColumns from "containers/column-definition/logistics/bulk-order-available-packages-def";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import React from "react";

const packages = [
    {parcel_type: 'Document / Parcel', delivery_type: 'Normal / Express', inside_dhaka: 'Inside / Outside Dhaka', weight_from: '0kg', weight_to: '0.5kg'},
]

const AvailablePackages = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <ReactTableWithPaginationCard 
            data={packages} 
            columnDefinition={bulkOrderAvailablePackagesColumns}
            defaultPageSize={packages.length} 
            serverSide={false}
            disableSearch={false}
            showPagination={false}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <ModalWrapper
        isOpen={props.isOpen}
        toggle={props.toggle}
        modalTitle="Available Packages"
        isLoading={false}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default AvailablePackages;
