import React from "react";
import reactDom from "react-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";
import notes from "./notes";

function addNotes(note){
    return (
        <Note 
            key={note.id}
            title={note.title}
            content={note.content}
        />
    );
}

reactDom.render(
    <div>
        <Header />
        {notes.map(addNotes)}
        <Footer />
    </div>
    ,document.getElementById("root")
)