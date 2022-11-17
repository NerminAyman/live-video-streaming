import './styles.scss';
import {store} from "../redux/store";
import {useEffect, useState} from "react";

export function TextChatSection() {
    const [user, setUser] = useState();

    useEffect(() => {
        let sub = store.subscribe(() =>{
            const state = store.getState();
            setUser(state.user.value);
        });

        return () => {
            sub();
        }
    }, [])

    return (
        <div className='text-chat-chat'>
            Uid: {user?.['uid']},
            Name: {user?.['name']}
        </div>
    );
}

export default TextChatSection;
