import './chat-section.scss';
import {signInAnonymously, updateProfile} from "firebase/auth";
import {auth} from "../../services/firebase-config.service";


export function ChatSection() {
    const addUser = () => {
        signInAnonymously(auth)
            .then(user => {
                updateProfile(user.user, {displayName: "Mohamed"})
                    .then(() => {
                    });
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div className='chat'>
            <button onClick={addUser}>Add user</button>
        </div>
    );
}

export default ChatSection;
