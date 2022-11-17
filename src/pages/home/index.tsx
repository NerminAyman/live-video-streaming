import './styles.scss';
import VideoChatSection from "../../components/video-chat-section";
import React, {useEffect, useState} from "react";
import {signOut, singIn} from "../../services/auth.service";
import {useDispatch} from "react-redux";
import {changeUserState} from "../../components/redux/user.reducer";
import TextChatSection from "../../components/text-chat-section";


export function Home() {
    const [inputVal, setInputVal] = useState('');
    const [username, setUsername] = useState('');
    const [videoCall, setVideoCall] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (username) {
            singIn(username, (user: any) => {
                dispatch(changeUserState({uid: user.uid, name: user.displayName}))
            });
            setVideoCall(true);
        }
    }, [username])

    const logOut = () => {
        signOut(() => dispatch(changeUserState(undefined)));
        setVideoCall(false);
    }

    return (
        <div className='home'>
            <div className='home_username-section'>
                <input placeholder='nickname' type="text" value={inputVal}
                       onChange={(e) => {
                           setInputVal(e.target.value);
                       }}
                />
                <button onClick={() => setUsername(inputVal)} disabled={inputVal == ''}>
                    log In & Start Call
                </button>
            </div>
            <TextChatSection/>
            <VideoChatSection videoCall={videoCall} setVideoCall={logOut}/>
        </div>
    );
}

export default Home;
