import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/addbook.css";

const AddBook = () => {
  let [title, setTitle] = useState("");
  let [authors, setauthors] = useState("");
  let [categories, setCategories] = useState("");
  let [pageCount, setPage] = useState("");
  let [shortDescription, setShort] = useState("");
  let [longDescription, setLong] = useState("");
  let [thumbnailUrl, setUrl] = useState("");

  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let bookData = {
      title,
      authors,
      categories,
      pageCount,
      shortDescription,
      longDescription,
      thumbnailUrl,
    };
    fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(bookData),
    });
    alert("book added successfully");
    navigate("/admin/book-list");
  };
  return (
    <div className="addbookHome">
      <div className="addBook">
        <h1>Add Book</h1>
        <div className="form">
          <form action="" className="form-group" onSubmit={handleSubmit}>
            <div className="title">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="enter the title"
              />
            </div>
            <div className="authors">
              <input
                value={authors}
                onChange={(e) => setauthors(e.target.value)}
                type="text"
                required
                placeholder="enter the authors"
              />
            </div>
            <div className="categories">
              <input
                value={categories}
                onChange={(e) => setCategories(e.target.value)}
                type="text"
                required
                placeholder="categories of books"
              />
            </div>
            <div className="pageCount">
              <input
                value={pageCount}
                onChange={(e) => setPage(e.target.value)}
                type="text"
                required
                placeholder="page count of book"
              />
            </div>
            <div className="shortDescription">
              <textarea
                value={shortDescription}
                onChange={(e) => setShort(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="short description of book"
              ></textarea>
            </div>
            <div className="longDescription">
              <textarea
                value={longDescription}
                onChange={(e) => setLong(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="long description of book"
              ></textarea>
            </div>
            <div className="thumbnailUrl">
              <input
                value={thumbnailUrl}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                required
                placeholder="thumbnail url of book"
              />
            </div>
            <button>Add Book</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
