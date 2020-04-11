import React, { useState, useEffect } from "react"
import API from "../utils/API"
import Contain from "../components/Contain"
import Cards from "../components/Cards"

function Search() {

    const [books, setBooks] = useState({input: ""})
    const [search, setSearch] = useState([])

    useEffect(() => {

    }, [])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setBooks({ [name]: value })
    };

    function handleSubmit(event) {
        event.preventDefault();
        API.searchBook(books.input)
            .then(res => setSearch(res.data.items))
            .catch(err => console.log(err));
    };
    return (

        <div>
            <Contain>
                <h2> Search </h2>
                <form>
                    <input type="text" name="input" onChange={handleInputChange} />
                </form>
                <button type="submit" onClick={handleSubmit}></button>
            </Contain>
            {/* <Cards> */}
                
                    <div>
                    {search.map( item => {
                        return (
                            <div>
                        <h5>{item.volumeInfo.title}</h5>
                        <br/>
                        <h5>{item.volumeInfo.authors}</h5>
                        <br/>
                        <h5>{item.volumeInfo.description}</h5>
                        <br/>
                        <h5>{item.volumeInfo.infoLink}</h5>
                        <br/>
                        <img src={(item.volumeInfo.imageLink) ? item.volumeInfo.imageLinks.smallThumbnail : "https://via.placeholder.com/150"}/>
                        </div>
                        );
                    })}
                    </div>
                }
            {/* </Cards> */}

        </div>
    )
}
export default Search;