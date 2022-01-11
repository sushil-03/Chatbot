import React, { useEffect, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
const Details = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/details", {
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
  // return <div>{JSON.stringify(details)}</div>;
  const newDetails = JSON.stringify(details);
  console.log("-----------", newDetails);
  return (
    <div className="stats">
      <div className="column-left">
        <p> Name :</p>
        <p> Student Id :</p>
        <p> Student Roll Number :</p>
        <p> Student Branch:</p>
      </div>

      <div className="column-right">
        <ClipLoader color={"#fff"} loading={loading} />
        {/* console.log('Details',newDetails); */}
        <p>{details.name}</p>
        <p>{details.student_id}</p>
        <p>{details.roll}</p>
        <p>{details.branch}</p>
      </div>
    </div>
  );
};

export default Details;
