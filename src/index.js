import ReactDOM from "react-dom";
import App from "./app";

function Componente(){
    return(
        <App></App>
    )
}

ReactDOM.render(Componente(),document.querySelector(".root"))