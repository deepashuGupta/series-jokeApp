import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {storeJoke} from '../../store/actions'


function CallJokes(props) {
    const [joke, setjoke] = useState(null)

    const storeJokeHandler = () =>{
        props.storeJoke(joke)
    }

    const getJoke = () => {
        fetch(
            "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single%2Ctwopart&format=json&idRange=0-303&blacklistFlags=nsfw%2Cracist",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "44b43c5199msh40ab10a323331cap13ad60jsn9319419a751e",
                    "x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
                },
            }
        )
            .then((response) => response.json())
            .then((readable) => {
                const jokeobj = {};
                jokeobj.id = readable.id;
                jokeobj.type = readable.type;
                jokeobj.category = readable.category;
                if (readable.type === "twopart") {
                    jokeobj.question = readable.setup;
                    jokeobj.answer = readable.delivery;
                } else if (readable.type === "single") {
                    jokeobj.joke = readable.joke;
                }
                setjoke(jokeobj);
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getJoke()
    }, [])

    let Joke = 'Joke is loading...'
    if (joke) {
        Joke = (
            <div className="container mt-5" key={joke.id}>
                <div className="card">
                    <h5 className="card-header">{joke.type} || {joke.category}</h5>
                    <div className="card-body">
                        <h5 className="card-title">{joke.question ? joke.question : joke.joke}</h5>
                        <p className="card-text">{joke.answer ? joke.answer : ''}</p>
                        <button onClick={storeJokeHandler} className="btn btn-primary">Store Joke</button>
                        <button onClick={getJoke} className="btn btn-success mx-2">Refresh Joke</button>
                    </div>
                </div></div>
        )
    }

    return (
        <>
            {Joke}
        </>
    )
}

const mapDispatchToProps =  ({storeJoke})
export default connect(null, mapDispatchToProps)(CallJokes);