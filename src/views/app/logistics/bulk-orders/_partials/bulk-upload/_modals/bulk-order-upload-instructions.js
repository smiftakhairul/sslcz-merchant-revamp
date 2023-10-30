import { ReactTableWithPaginationCard } from "components/table/table";
import bulkOrderUploadInstructionsColumns from "containers/column-definition/logistics/bulk-order-upload-instructions-def";
import ModalWrapper from "containers/wrapper/modal-wrapper";
import React from "react";

const instructions = [
    {column_no: '10', column_name: 'Recipient Name (Mandatory)', comment: "Full name of recipient."},
]

const BulkOrderUploadInstructions = (props) => {
  const modalContent = () => {
    return (
      <React.Fragment>
        <ReactTableWithPaginationCard 
            data={instructions} 
            columnDefinition={bulkOrderUploadInstructionsColumns}
            defaultPageSize={instructions.length} 
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
        modalTitle="Bulk Order Upload Instructions"
        isLoading={false}
        modalContent={modalContent}
      />
    </React.Fragment>
  );
};

export default BulkOrderUploadInstructions;
