import  ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";



const Attendence =()=>{
    return (
  <div>

<BrowserRouter >
    <App/>
    </BrowserRouter>
  </div>
  )
}



ReactDOM.render(<Attendence/>, document.getElementById('root'));