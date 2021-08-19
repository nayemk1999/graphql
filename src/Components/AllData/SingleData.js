import React, { useState } from 'react';
import Episode from './Episode/Episode';
import { useHistory } from 'react-router-dom';

const SingleData = ({ user, index }) => {
    // console.log(user.episode);
    const history = useHistory();
    const handleEpisode = (episode, name) => {
        const episodesData = { episode, name }
        history.push({
            pathname: '/episode-page',
            state: { detail: episodesData }
        })
        // console.log(episode, name);

    };


    return (
        <div className='no-underline'>
            <div class=" bg-white max-w-xs shadow-xl mx-auto border-b-4 border-indigo-500 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-500 transform hover:scale-60 cursor-pointer" >
                <div class="bg-indigo-500  flex h-20  items-center">
                    <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full" >{index}</h1>
                    <p class="ml-4 p-3 text-white uppercase">{user.name}</p>
                </div>
                <p class=" px-3 py-3 text-lg tracking-wide text-center">Loction: {user.location.name}</p>
                <p class=" px-3 py-3 text-lg tracking-wide text-center">Status: {user.status}</p>

                <div class="flex justify-center px-5 mb-2 text-sm ">
                    <button onClick={() => handleEpisode(user.episode, user.name)} type="button" class="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">
                        See All Episode
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleData;