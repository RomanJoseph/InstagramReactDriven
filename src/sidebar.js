import SidebarSuggestion from "./sidebarSuggestion";
import SidebarUser from "./sidebarUser";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <SidebarUser userNickName="Catana" userName="catanacomics" userImage="assets/img/catanacomics.svg"></SidebarUser>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <SidebarSuggestion></SidebarSuggestion>
            </div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}