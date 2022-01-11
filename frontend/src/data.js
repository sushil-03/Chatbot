import axios from "axios";
export const getData = async () => {
  let data = await axios.get("http://localhost:5001/api/details", {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
  console.log("dddddddddddd", data);
  //   data = await data.json();
  return data.data;
};
