import './home.scss';
import {useState} from "react";
import {MeetingRoom} from "../../components/meeting-room/meeting-room";
import UiKitDemo from "../../components/ui-kit-demo";

export function Home() {
    const [inCall, setInCall] = useState(false);

    return (
        <div className='home'>
            {/*{inCall ? (*/}
            {/*    <MeetingRoom setInCall={setInCall}/>*/}
            {/*) : (*/}
            {/*    <button*/}
            {/*        color="primary"*/}
            {/*        onClick={() => setInCall(true)}*/}
            {/*    >*/}
            {/*        Join Call*/}
            {/*    </button>*/}
            {/*)}*/}
            <UiKitDemo/>
        </div>
    );
}

export default Home;
