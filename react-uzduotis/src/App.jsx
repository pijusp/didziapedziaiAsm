import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
    const [jokes, setJokes] = useState([]);
    const [refetch, setRefetch] = useState(false);

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
            .then((response) => response.json())
            .then((data) => {
                setJokes(data.jokes);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [refetch]);
    return (
        <>
            <div className="App">
                <h1>Programming Jokes</h1>
                <ul>
                    <ul className="joke-list">
                        {jokes.map((joke) => (
                            <li key={joke.id}>
                                {joke.type === "single" ? (
                                    <div>
                                        <strong>Single Joke:</strong>{" "}
                                        {joke.joke}
                                    </div>
                                ) : (
                                    <div>
                                        <strong>Setup & Delivery Joke:</strong>
                                        <br />
                                        {joke.setup}
                                        <br />
                                        {joke.delivery}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </ul>
            </div>
            <button onClick={() => setRefetch(!refetch)}>
                Click for refresh!
            </button>
        </>
    );
}

export default App;
