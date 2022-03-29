import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Banner.css';
import requests from './Requests';

function Banner() {

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);
    console.log(movie);
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n -1) + '...' : string;

    }
    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
            backgroundPosition: "center center",
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(`This is a test description`, 150)}</h1>
            </div>

            <div className='banner--fadeBottom'></div>

        </header>
    )
}

export default Banner