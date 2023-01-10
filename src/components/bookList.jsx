import { useState, useEffect } from "react";
import "../styles/bookList.css";
import { useNavigate } from "react-router-dom";
import ReadBook from "./readBook";

const BookList = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(" http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  }, [books]);

  //delete a book from server permanently
  let handleDelete = (id, title) => {
    fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
    });
    alert(`${title} will be deleted permanently`);
  };
  // let {id, setId} = useState()
  let navigate = useNavigate();
  let read = (id) => {
    navigate(`/admin/book-list/${id}`);
    // setId(id)
  };
  return (
    <div className="bookList">
      <h1>Book List: {books.length}</h1>
      <div className="book_section">
        {books.map((data) => (
          <div className="book">
            <div className="images">
              <img src={data.thumbnailUrl} alt="" />
            </div>
            <div className="content">
              <h2>{data.title}</h2>
              <h5>
                <b>Authors</b>: {data.authors.toString()}
              </h5>
              <h5>
                <b>Categories</b>: {data.categories.toString()}
              </h5>
              <h5>
                <b>PageCount</b>: {data.pageCount}
              </h5>
              <button onClick={() => read(data.id)}>Read More</button>
              <button onClick={() => handleDelete(data.id, data.title)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* <ReadBook /> */}
    </div>
  );
};

export default BookList;
