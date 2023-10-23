import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCuesheets } from "../../helpers/Cuesheet/cuesheet_helper";
import "react-toastify/dist/ReactToastify.css";

// getCuesheets Redux Toolkit의 createAsyncThunk 함수를 사용하여 생성된 비동기 액션 생성자
// 이 함수는 비동기적인 작업을 수행하고 해당 작업이 완료되면 Redux 스토어의 상태를 업데이트하는 데 사용

// 비동기 액션을 디스패치하고 결과를 처리

export const getCuesheetsApi = createAsyncThunk(
  "cuesheet/getCuesheets",
  async () => {
    try {
      console.log("----thunk----");
      const response = await getCuesheets();
      console.log("response", response);
      // const data = response.data;
      // console.log("data", data);
      return response;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
);
