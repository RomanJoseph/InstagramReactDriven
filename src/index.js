import ReactDOM from "react-dom";
import Header from "./header";

function Componente(){
    return(
        <Header/>
    )
}

ReactDOM.render(Componente(),document.querySelector(".root"))