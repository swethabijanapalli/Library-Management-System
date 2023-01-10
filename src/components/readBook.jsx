import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
  let [books, setBooks] = useState([]);
  //to get route parameters
  let params = useParams();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(` http://localhost:4000/books/${params.id}`);
      let data = await response.json();
      setBooks(data);
    };
    fetchData();
  });
  return (
    <div className="readBook">
      <h1>read book</h1>
      <h2>{books.title}</h2>
      <p>{books.shortDescription}</p>
      <p>{books.longDescription}</p>
    </div>
  );
};

export default ReadBook;
