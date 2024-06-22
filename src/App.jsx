import { useState } from "react";
import "./App.css";
import Body from "./component/Body";
import Header from "./component/Header";
import "./component/Header.css";

function App() {
  const [nvbar, setNvbar] = useState(false);

  const changebackgroundnavbar = () => {
    if(window.scrollY >= 90){
      setNvbar(true);
    }
    else{
      setNvbar(false);
    }
  }
  window.addEventListener('scroll',changebackgroundnavbar);

  return (
    <>
      <Header className={nvbar ? "navbar active" : "navbar"} />
      <Body />
    </>
  );
}

export default App;
