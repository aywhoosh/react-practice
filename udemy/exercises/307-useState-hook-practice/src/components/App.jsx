import React, {useState} from "react";

function App() {

  const [time,setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div className="container">
      <h1>
        {time}
      </h1>
      <button onClick={setInterval(getTime,1000)}>Get Time</button>
    </div>
  );
}

export default App;
