export default function Posts() {
    const postData = [{ user: "meowed", userImage: "assets/img/meowed.svg", content: "assets/img/gato-telefone.svg", userLikedImage: "assets/img/respondeai.svg", userLiked: "respondeai", likes: "101.523" }, { user: "barked", userImage: "assets/img/barked.svg", content: "assets/img/dog.svg", userLikedImage: "assets/img/adorable_animals.svg", userLiked: "adorable_animals.svg", likes: "299.792.458" }]
    return (
        postData.map((post) => {
            return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={post.userImage} />
                                {post.user}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={post.content} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={post.userLikedImage} />
                                <div class="texto">
                                    Curtido por <strong>{post.userLiked}</strong> e <strong>outras {post.likes} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        })
    )
}