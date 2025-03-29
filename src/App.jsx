import { useState } from "react";
import "./App.css";//Css style sheet

function App() {

  const [value, setValue] = useState([]);
  
  return (
    <div className="contain bg ">
      <div className="calculator border">
        <form action="" className="">
          <div className="form-control-md d-flex  ">
            <input
              type="text"
              className="mb-2 p-1 rounded "
              style={{ textAlign: "end" ,width:"220px",height:"40px" }}
              value={value}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="button"
              className="btn-style "
              value="AC"
              onClick={(e) => setValue((e.target.value = " "))}
            />
            <input
              type="button"
              className="btn-style "
              value="DC"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              type="button"
              className="btn-style "
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="button"
              className="btn-style "
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="button"
              className="btn-style "
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="button"
              className="btn-style "
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style "
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-center">
            <input
              type="button"
              className="btn-style  "
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style  "
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              className="btn-style equal "
              value="="
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
