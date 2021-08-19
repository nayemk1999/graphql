import React, { useState } from 'react';

const EpisodeCard = ({episode, userName, index}) => {

    return (
        <div className='no-underline'>
            <div class=" bg-white max-w-xs shadow-xl mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-60 cursor-pointer" >
                <div class="bg-indigo-500  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full" >{index}</h1>
                    <p class="ml-4 p-2 text-white uppercase">{userName}</p>
                </div>
                <p class=" px-3 py-3 text-lg tracking-wide text-center">Episode Name: {episode.episode}</p>
            </div>
        </div>
    );
};

export default EpisodeCard;