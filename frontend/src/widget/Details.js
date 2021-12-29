import React, { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const [details, setDetails] = useState();

  useEffect(() => {
    const getDetails = async () => {
      // const filteredFlights = flights.filter((item) => item.Status === null);
      try {
        const response = await axios.get("http://localhost:5001/api/details", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });

        console.log({ response });
        // localStorage.setItem("token", response.data.token);
        if (response.data.success) {
          setDetails(response.data.data);
        }
      } catch {
        console.log("Some error fetching deatils");
      }
    };
    getDetails();
  }, []);

  return <div>{JSON.stringify(details)}</div>;
};

export default Details;
