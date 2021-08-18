import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { dataa } from "../../GraphQL/Queries";


function AllData() {
  const { error, loading, data } = useQuery(dataa);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })} */}
    </div>
  );
}

export default AllData;