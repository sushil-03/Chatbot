import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
const Details = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get("/api/details", {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        });

        if (response.data.success) {
          setDetails(response.data.data);
          setLoading(false);
        }
      } catch {
        console.log("Some error fetching deatils");
      }
    };
    getDetails();
  }, []);
  console.log("Details", details);
  return (
    <div className="stats mt-2">
      <div className="column-left">
        <p> Contact :</p>
      </div>

      <div className="column-right">
        <ClipLoader color={"#fff"} loading={loading} />
        <p>{details.contact}</p>
      </div>
    </div>
  );
};

export default Details;
