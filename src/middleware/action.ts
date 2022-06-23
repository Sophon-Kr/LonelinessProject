
import axios from "axios";
export const CHANGE_lOGIN_STATUS = "CHANGE_lOGIN_STATUS";


export const changeLoginStatus = (payload) => ({
  type: "CHANGE_lOGIN_STATUS",
  payload,
});


// export const getDailyData = () => {
//   return async (dispatch) => {
//     return axios
//       .get(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`)
//       .then((res) => {
//         dispatch({
//           type: "GET_DATA_DAILY",
//           payload: res.data[0],
//         });
//       });
//   };
// };


