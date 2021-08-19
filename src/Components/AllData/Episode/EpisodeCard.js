import React, { useState } from 'react';

const EpisodeCard = ({episode, userName, index}) => {
    // console.log(episode.episode.episode.name);
    console.log(episode.episode);
    // console.log(userName);
    // console.log(user.location);
    const [tooltipShow, setTooltipShow] = useState(false);
    const openLeftTooltip = () => {
        setTooltipShow(true)
    };
    const closeLeftTooltip = () => {
        setTooltipShow(false);
    };

    
    return (
        <div className='no-underline' onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
        >
            <div class=" bg-white max-w-xs shadow-xl mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-60 cursor-pointer" >
                <div class="bg-indigo-500  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full" >{index}</h1>
                    <p class="ml-4 p-3 text-white uppercase">{userName}</p>
                </div>
                <p class=" px-3 py-3 text-lg tracking-wide text-center">Episode Name: {episode.episode}</p>
            
{/*                 
                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        See All Episode
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default EpisodeCard;