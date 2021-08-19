import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_DATA } from "../../GraphQL/Queries";
import SingleData from "./SingleData";


function AllData() {
    const { error, loading, data } = useQuery(LOAD_DATA);
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        if (data) {
            setCharacters(data.characters.results);
        }
    }, [data]);

    return (
        <div className='container'>
            <div className='flex flex-col  md:flex-row justify-center flex-wrap gap-3 mt-10'>
                {
                    characters?.map((result, index) => <SingleData index={index} key={index} user={result} />)
                }
            </div>
        </div>
    );
}

export default AllData;