export default function SidebarUser(props) {
    return (
        <div class="usuario">
            <img src={props.userImage} />
            <div class="texto">
                <strong>{props.userName}</strong>
                {props.userNickName}
            </div>
        </div>
    )
}