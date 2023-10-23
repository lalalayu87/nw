import { useDispatch, useSelector } from "react-redux";
import { getCuesheetsApi } from "../../../../slices/cuesheet/thunk";
import { useEffect } from "react";
import { createSelector } from "reselect";

const CuesheetTemplateList = () => {
  const dispatch = useDispatch();
  // const cuesheets = useSelector((state) => state.cuesheet); // cuesheet 슬라이스의 content를 선택

  const selectDashboardData = createSelector(
    (state) => state.cuesheet.getCuesheets
  );
  console.log("----큐시트 템플릿 리스트----");
  console.log("cuesheets", selectDashboardData);

  useEffect(() => {
    dispatch(getCuesheetsApi());
  }, [dispatch]);
  return "CuesheetTemplateList";
};

export default CuesheetTemplateList;
