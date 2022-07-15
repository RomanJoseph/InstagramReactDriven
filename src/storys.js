export default function Storys() {
    const storys = [{ user: "9gag", image: "assets/img/9gag.svg" }, { user: "meowed", image: "assets/img/meowed.svg" }, { user: "barked", image: "assets/img/barked.svg" }, { user: "nathanwpylestrangeplanet", image: "assets/img/nathanwpylestrangeplanet.svg" }, { user: "respondeai", image: "assets/img/respondeai.svg" }, { user: "wawawicomics", image: "assets/img/wawawicomics.svg" }, { user: "filomoderna", image: "assets/img/filomoderna.svg" }, { user: "memeriagourmet", image: "assets/img/memeriagourmet.svg" }]

    return (
        <div class="stories">
            {storys.map((story) => {
                return (
                    <div class="story">
                        <div class="imagem">
                            <img src={story.image} />
                        </div>
                        <div class="usuario">
                            {story.user}
                        </div>
                        <div class="setinha">
                            <ion-icon name="chevron-forward-circle"></ion-icon>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
