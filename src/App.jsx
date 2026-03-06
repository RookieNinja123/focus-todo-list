import DigitalClock from "./DigitalClock.jsx"
import ToDo from "./ToDo.jsx"
import { useState } from "react"

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return(
    <div className={darkMode ? "app dark" : "app"}>
      {/* these are the components hai  */}

    {/* <DigitalClock/> */}

    {/* passing data(props) from a parent component to a child component */}
    <ToDo darkMode = {darkMode} setDarkMode={setDarkMode}/>
  </div>
  );
}

export default App
