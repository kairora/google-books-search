import React, {useState} from "react";
import Card from "../card";
import API from "../../utils/API"
import Book from "../book"
import NoImg from "../../images/no-img.png"


export default () => {
    const [searchState, setSearchState] = useState({
        mySearch: "",
        bookResults: []
    })

    const handleChange = (e) => {
        setSearchState({
            mySearch: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        startSearch(searchState.mySearch);
    }

    const startSearch = userSearch => {
        API.search(userSearch)
            .then(searchRes => {
                console.log(searchRes)
                setSearchState({
                    bookResults: searchRes.data.items,
                    mySearch:""
                })
            })
            .catch(err => console.log(err));
    }

    const addToSaved = bookID => {
        let favBook = searchState.bookResults.filter(data => data.id === bookID);
        let savedBookDetails = {
            foreignid: favBook[0].id,
            title: favBook[0].volumeInfo.title,
            authors: favBook[0].volumeInfo.hasOwnProperty('authors') ? favBook[0].volumeInfo.authors.join(', '): 'empty',
            description: favBook[0].volumeInfo.description || 'Sorry, there is no description available!',
            image: favBook[0].volumeInfo.hasOwnProperty('imageLinks') ? favBook[0].volumeInfo.imageLinks.smallThumbnail: NoImg,
            previewLink: favBook[0].volumeInfo.previewLink
        }

        API.saveBook(savedBookDetails);
    }

    const seeBook = previewLink => {
        window.open(previewLink, 'bookpreview');
    }
    

    return (
        <>
            <div>
                <form style={{display: "inline-flex"}} value={searchState.mySearch} onChange={handleChange} >
                    <div className="form-group">
                        <input type="search" id="formSearch" placeholder="Search a book" style={{marginTop: "5px", width: "500px"}} />
                    </div>
                    <button onClick={onSubmit} type="submit" className="btn btn-primary" style={{marginLeft: "15px", marginBottom: "15px"}}>Submit</button>
                </form>
            </div>

            <div>
                <Card>
                    <h2 style={{textAlign: "left"}}>Results</h2>
                    {searchState.bookResults.map( book => (
                        <Book 
                            key={book.id}
                            id={book.id}
                            title={book.volumeInfo.title}
                            authors={ book.volumeInfo.hasOwnProperty('authors') ? book.volumeInfo.authors.join(', ') : 'empty'}
                            description={book.volumeInfo.description || 'Sorry, there is no description available!'}
                            image={ book.volumeInfo.hasOwnProperty('imageLinks') ? book.volumeInfo.imageLinks.smallThumbnail : NoImg}
                            btn1Click={ () => seeBook(book.volumeInfo.previewLink) }
                            btn1Text='Open the Book'
                            btn2Click={ () => addToSaved(book.id) }
                            btn2Text='Save This Book'
                        /> 
                    ))}
                </Card>
            </div>
        </>
    )
}