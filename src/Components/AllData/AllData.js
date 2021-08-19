import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_DATA } from "../../GraphQL/Queries";
import SingleData from "./SingleData";


function AllData() {
    const { error, loading, data } = useQuery(LOAD_DATA);
    const [characters, setCharacters] = useState([]);
    const [spiner, setSpiner] = useState(false);

    useEffect(() => {
        if (data) {
            setCharacters(data.characters.results);
            setSpiner(true)
        }
    }, [data]);

    return (
        <div className='container'>
            <h1 className="text-3xl font-bold text-gray-900 text-center underline p-5">Welcome To GraphQL based website</h1>
            {spiner ?
                <div className='flex flex-col  md:flex-row justify-center flex-wrap gap-3 mt-10'>
                    {
                        characters?.map((result, index) => <SingleData index={index} key={index} user={result} />)
                    }
                </div>
                :
                <div class="flex justify-center items-center mt-60">
                    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
                </div>
            }



        </div>
    );
}

export default AllData;