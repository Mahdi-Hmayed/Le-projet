import React from "react";
import "./App.css";
import Navbarr from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "./components/image/image.png";

function App() {
  return (
    <div>
      <div className="App">
        <Navbarr />
        <div className="body">
          <img src={image} />
        </div>
        <div className="footer">
          <p>Copyright Delicious Food &#169; 2020 - 2021</p>
          <p>
            {" "}
            For permission to reprint articles from this site, please contact us{" "}
            <a href="#">deliciousfood@gmail.com</a>
          </p>
          <p> Address : Berges du lac </p>
          <p> Phone : +21670123456</p>
        </div>
      </div>
    </div>
  );
}

export default App;
