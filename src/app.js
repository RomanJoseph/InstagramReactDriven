import Header from "./header";
import Storys from "./storys";
import Posts from "./posts";

export default function App(){
    return(
        <div class="corpo">
            <Header></Header>
            <div class="esquerda">
                <Storys></Storys>
                <div class="posts">
                    <Posts></Posts>
                </div>
            </div>
        </div>
    )
}