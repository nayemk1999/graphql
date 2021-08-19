import React from 'react';
import { useLocation } from "react-router-dom";
import EpisodeCard from './EpisodeCard';

const Episode = () => {
    const location = useLocation();
    const stateData = location.state.detail
    const episodes = stateData.episode
    const userName = stateData.name
    // console.log(stateData.name);
    return (
        <div className='container'>
            <h1 className="text-3xl font-bold text-gray-900 text-center underline p-5">All Episode Data From the Clickable Card</h1>

            <div className='flex flex-col  md:flex-row justify-center flex-wrap gap-3 mt-10'>
                {
                    episodes?.map((result, index) => <EpisodeCard index={index} key={index} episode={result} userName={userName} />)
                }
            </div>
        </div>
    );
};

export default Episode;