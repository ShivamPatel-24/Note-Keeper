import React from "react";
import reactDom from "react-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Note from "./components/Note.jsx";

reactDom.render(
    <div>
        <Header />
        <Footer />
        <Note />
    </div>
    ,document.getElementById("root")
)