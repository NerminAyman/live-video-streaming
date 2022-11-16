import React,{useState} from 'react'
import AgoraUIKit, {layout} from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import {config} from "../../services/stream-config.service";
import './styles.scss';

export interface VideoChatSectionProps {
    videoCall: boolean;
    setVideoCall: (videoCall: boolean) => void
}

const VideoChatSection = (props: VideoChatSectionProps) => {
    const [isPinned, setPinned] = useState(false)

    return (
        <div className='video-chat-section'>
            {props.videoCall &&
                (<>
                    <button onClick={() => setPinned(!isPinned)}>Change Layout</button>
                    <AgoraUIKit
                        rtcProps={{
                            appId: config.appId,
                            channel: 'home',
                            token: config.token,
                            layout: isPinned ? layout.pin : layout.grid,
                            disableRtm: true,
                            enableAudio: true,
                            enableVideo: true,
                            callActive: true,
                        }}
                        callbacks={{
                            EndCall: () => {
                                props.setVideoCall(false);
                            } ,
                        }}/>
                </>)
            }
        </div>
    )
}

export default VideoChatSection;
