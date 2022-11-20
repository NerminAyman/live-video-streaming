import React from 'react'
import AgoraUIKit, {layout} from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import {config} from "../../services/agora-config.service";
import './styles.scss';

export interface VideoChatSectionProps {
    videoCall: boolean;
    setVideoCall: (videoCall: boolean) => void,
    hideVideo: boolean
}

const VideoChatSection = (props: VideoChatSectionProps) => {
    return (
        <div className={!props.hideVideo ? 'video-chat-section hide-video' : 'video-chat-section'}>
            {props.videoCall &&
                <AgoraUIKit
                    rtcProps={{
                        appId: config.appId,
                        channel: 'home',
                        token: config.token,
                        layout: layout.grid,
                        disableRtm: true,
                        enableAudio: true,
                        enableVideo: true,
                        callActive: true,
                    }}
                    callbacks={{
                        EndCall: () => {
                            props.setVideoCall(false);
                        },
                    }}/>
            }
        </div>
    )
}

export default VideoChatSection;
