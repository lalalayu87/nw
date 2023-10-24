import { useDispatch, useSelector } from "react-redux";
import { getCuesheetsApi } from "../../../../slices/thunks";
import { useEffect } from "react";

const CuesheetTemplateList = () => {
  const dispatch = useDispatch();

  const cuesheetData = useSelector((state) => state.cuesheet.getCuesheets);
  console.log("cuesheetData ? ", cuesheetData);
  console.log("큐시트 템플릿 리스트");

  useEffect(() => {
    dispatch(getCuesheetsApi());
  }, [dispatch]);
  return "CuesheetTemplateList";
};

export default CuesheetTemplateList;
