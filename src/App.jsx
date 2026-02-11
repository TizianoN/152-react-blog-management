import { useState } from "react";

const initialArticles = ["Article 1", "Article 2", "Article 3"];

export default function App() {
  // lettura
  const [articles, setArticles] = useState(initialArticles);

  // inserimento
  const [addArticleInput, setAddArticleInput] = useState("");

  // modifica
  const [editArticleIdnex, setEditArticleIndex] = useState(null);
  const [editArticleInput, setEditArticleInput] = useState("");
  const editArticleOriginal = articles[editArticleIndex];

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    if (!addArticleInput) return;

    setArticles([...articles, addArticleInput]);
    setAddArticleInput("");
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const updatedArticles = articles.map((article, index) =>
      index === editArticleIndex ? editArticleInput : article,
    );

    setArticles(updatedArticles);
    setEditArticleIndex(null);
  };

  const deleteArticle = (indexToDelete) => {
    const updatedArticles = articles.filter(
      (article, index) => index !== indexToDelete,
    );

    setArticles(updatedArticles);
  };

  const selectEditArticle = (indexToEdit) => {
    setEditArticleIndex(indexToEdit);
    setEditArticleInput(articles[indexToEdit]);
  };

  return (
    <div className="py-4 container">
      <div className="text-center">
        <h1>Demo Vite & React</h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          magni numquam nemo, iure sint quibusdam suscipit commodi rem adipisci
          harum. Quo quidem molestias magni molestiae ullam eius rem corporis
          obcaecati?
        </p>
      </div>

      <ul className="list-group" style={{ maxWidth: "300px" }}>
        {articles.map((article, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <span>{article}</span>
            <div className="d-flex align-items-center gap-1">
              <button
                onClick={() => selectEditArticle(index)}
                //
                className="btn-sm btn btn-warning"
              >
                <i className="bi bi-pencil"></i>
              </button>

              <button
                onClick={() => deleteArticle(index)}
                //
                className="btn-sm btn btn-danger"
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

      <hr />

      <form onSubmit={handleAddFormSubmit} className="my-3">
        <h3>Aggiungi articolo</h3>
        <div className="form-group mb-2">
          <input
            //
            value={addArticleInput}
            onChange={(e) => setAddArticleInput(e.target.value)}
            //
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Aggiungi</button>
      </form>

      {editArticleIndex && (
        <>
          <hr />

          <form onSubmit={handleEditFormSubmit}>
            <h3>Modifica {editArticleOriginal}</h3>
            <div className="form-group mb-2">
              <input
                //
                value={editArticleInput}
                onChange={(e) => setEditArticleInput(e.target.value)}
                //
                type="text"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary">Modifica</button>
          </form>
        </>
      )}
    </div>
  );
}
