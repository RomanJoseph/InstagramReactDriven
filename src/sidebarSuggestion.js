export default function SidebarSuggestion() {
    let suggestions = [{ image: "assets/img/bad.vibes.memes.svg", name: "bad.vibes.memes", text:"Segue você" }, { image: "assets/img/chibirdart.svg", name: "chibirdart", text:"Segue você" }, { image: "assets/img/razoesparaacreditar.svg", name: "razoesparaacreditar" , text:"Novo no Instagram"}, { image: "assets/img/adorable_animals.svg", name: "adorable_animals", text:"Segue você" }, { image: "assets/img/smallcutecats.svg", name: "smallcutecats", text:"Segue você" }]

    return (
        suggestions.map((suggestion) => {
            return (
                <div class="sugestao">
                    <div class="usuario">
                        <img src={suggestion.image} />
                        <div class="texto">
                            <div class="nome">{suggestion.name}</div>
                            <div class="razao">{suggestion.text}</div>
                        </div>
                    </div>

                    <div class="seguir">Seguir</div>
                </div>
                )
        })
    )
}