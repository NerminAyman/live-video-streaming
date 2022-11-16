import './styles.scss';
import VideoChatSection from "../../components/video-chat-section";
import React, {useState} from "react";
import TextChatSection from "../../components/text-chat-section";

export function Home() {
    const [videoCall, setVideoCall] = useState(false)
    const [username, setUsername] = useState('');
    const [inputVal, setInputVal] = useState('');

    return (
        <div className='home'>
            <div className='home_username-section'>
                <input placeholder='nickname' type="text" value={inputVal}
                       onChange={(e) => {
                           setInputVal(e.target.value);
                       }}
                />
                <button onClick={() => {
                    setVideoCall(true);
                    setUsername(inputVal)
                }}>
                    Start Call
                </button>
            </div>
            <TextChatSection username={username}/>
            <VideoChatSection videoCall={videoCall} setVideoCall={setVideoCall}/>
        </div>
    );
}

export default Home;
