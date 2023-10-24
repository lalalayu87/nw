import { useDispatch, useSelector } from "react-redux";
import { getCuesheetsApi } from "../../../../slices/cuesheet/thunk";
import { useEffect } from "react";
import { createSelector } from "reselect";

const CuesheetTemplateList = () => {
  const dispatch = useDispatch();

  const cuesheetData = useSelector((state) => state.cuesheet.getCuesheets);

  useEffect(() => {
    dispatch(getCuesheetsApi());
  }, [dispatch]);
  return "CuesheetTemplateList";
};

export default CuesheetTemplateList;
