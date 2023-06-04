import React, { useState } from 'react'
import SeriesList from './SeriesList';
import axios from 'axios';


function SeriesSearch() {

    const [series, setseries] = useState([])

    const GetSeries = (title) => {
        // shows?q=lucifer
        axios
            .get(`https://api.tvmaze.com/search/shows?q=${title}`)
            .then((response) => {
                let SeriesObj = response.data.map(s => {
                    let {
                        genres, id, image, language, name, officialSite, premiered, rating, status, summary, type, webChannel
                    } = s.show;
                    let tempS = {
                        genres, id, image, language, name, officialSite, premiered, rating, status, summary, type, webChannel
                    }
                    return tempS;
                });
                setseries(SeriesObj);
            })
            .catch((err) => console.log(err));
    };

    const searchSereisHandler = (e) => {
        e.preventDefault()
        GetSeries(e.target[0].value)
    }
    return (
        <div className='container mt-5 p-5'>
            <form onSubmit={searchSereisHandler} className="row g-3 align-items-center">
                <div className="col-auto">
                    <input type="text" className="form-control" />
                </div>
                <div className="col-auto">
                    <button type='submit' className='btn btn-primary'>Search Series</button>
                </div>
            </form>
            <hr />
            <div>
                {series.length > 0 ? series.map(s=>{
                return <SeriesList key={s.id} series = {s}/>
            })
                    : 'Search to get series'}
            </div>
        </div>
    )
}

export default SeriesSearch