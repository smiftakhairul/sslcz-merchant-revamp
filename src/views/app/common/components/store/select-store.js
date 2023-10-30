import React, { useState } from "react";
import { FormGroup, Button, Badge } from "reactstrap";
import { connect, useDispatch } from "react-redux";
import { storeWatcher, setStore } from "../../../../../redux/actions";
import Select from "react-select";
import { components } from 'react-select';
import { deepEqual } from "helpers/common";

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    borderRadius: "0 !important",
  }),
};

const ValueContainer = ({ children, ...props }) => {
  let [values, input] = children;
  if (Array.isArray(values)) {
    const plural = values.length === 1 ? "" : "s";
    // values = `${values.length} store${plural} selected`;
    values = <Badge color="primary" className="py-2" style={{width: '80%'}}>{`${values.length} store${plural} selected`}</Badge>;
  }

  return (
    <components.ValueContainer {...props}>
      {values}
      {input}
    </components.ValueContainer>
  );
};

function SelectStore({ stores, selectedStores, loading, error, storeWatcher }) {
  const dispatch = useDispatch();
  const [useStores, setUseStores] = React.useState([]);
  const [showSetBtn, setShowSetBtn] = React.useState(false);

  React.useEffect(() => {
    storeWatcher();
  }, [storeWatcher]);

  const handleChangeStores = (sStores) => {
    setUseStores(sStores);
    let sFilteredStores = sStores.map(item => item.value).sort((a, b) => {return a - b});
    let filteredSelectedStores = (selectedStores || []).map(item => item.stid).sort((a, b) => {return a - b});
    let showBtn = deepEqual(sFilteredStores, filteredSelectedStores);
    setShowSetBtn(!showBtn);
  };

  const handleSelectedStores = () => {
    dispatch(setStore(useStores));
    window.location.reload();
  };

  return (
    <React.Fragment>
      {stores && stores.length ? (
        <FormGroup className="d-flex justify-content-between mb-0">
          <div className="w-80">
            <Select
              styles={customSelectStyles}
              components={{ ValueContainer }}
              className="react-select"
              placeholder="Select Store"
              classNamePrefix="react-select"
              name="form-field-name"
              {...(selectedStores && selectedStores.length
                ? {
                    defaultValue: selectedStores.map(s => {
                      return {
                        label: s.store_name,
                        value: s.stid,
                      }
                    }),
                  }
                : {})}
              onChange={handleChangeStores}
              options={stores.map((s) => {
                return {
                  label: s.strid + " (" + s.store_name + ")",
                  value: s.stid,
                  key: s.strid,
                };
              })}
              isClearable={true}
              isMulti={true}
              hideSelectedOptions={false}
            />
          </div>
          {
            showSetBtn
              ? <Button color="primary" className="default w-20" style={{borderRadius: 0}} onClick={handleSelectedStores}>
                <span className=""><i className="glyph-icon simple-icon-pin"></i></span>
              </Button>
              : ''
          }
        </FormGroup>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

export default connect(
  (state) => ({
    stores: state.SelectStore.stores,
    selectedStores: state.SelectStore.selectedStores,
    loading: state.SelectStore.loading,
    error: state.SelectStore.error,
  }),
  { storeWatcher }
)(SelectStore);
