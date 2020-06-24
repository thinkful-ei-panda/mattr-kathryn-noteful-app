import React from "react";
import { Link } from "react-router-dom";

function MainViewMain(props) {
  const notes = props.notes.map((note) => {
    return (
      <section
        className="border group-column note-margin note-padding width"
        key={note.id}
      >
        <h2>
          <Link to={`/note/${note.id}`}>Name: {note.name}</Link>
        </h2>
        <div className="group-row note-group-row">
          <p>Modified: {note.modified}</p>
          <button>Delete Note</button>
        </div>
      </section>
    );
  });

  return <section className="border group-column item-double">{notes}</section>;
}

export default MainViewMain;
