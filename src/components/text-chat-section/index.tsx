import './styles.scss';
import {useSelector} from "react-redux";
import {selectUser} from "../redux/user.reducer";

export function TextChatSection() {
    const user = useSelector(selectUser)

    return (
        <div className='text-chat-chat'>
            Uid: {user?.['uid']},
            Name: {user?.['name']}
        </div>
    );
}

export default TextChatSection;
