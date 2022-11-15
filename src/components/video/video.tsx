import {AgoraVideoPlayer, IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack} from "agora-rtc-react";

export interface VideoProps {
    users: IAgoraRTCRemoteUser [],
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack],
}

export function Video(props: VideoProps) {
    const {users, tracks} = props;

    return (
        <div className='video'>
            <div>
                <AgoraVideoPlayer
                    videoTrack={tracks[1]}
                    style={{height: "400px", width: "400px"}}
                />
            </div>
            {users.length > 0 &&
                users.map((user) => {
                    if (user.videoTrack) {
                        return (
                            <div key={user.uid}>
                                <AgoraVideoPlayer
                                    videoTrack={user.videoTrack}
                                    style={{height: "400px", width: "400px"}}
                                />
                            </div>
                        );
                    } else return null;
                })}
        </div>
    );
}
