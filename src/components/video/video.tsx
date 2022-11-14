import {AgoraVideoPlayer} from "agora-rtc-react";

export function Video(props) {
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
                            <div>
                                <AgoraVideoPlayer
                                    videoTrack={user.videoTrack}
                                    key={user.uid}
                                    style={{height: "400px", width: "400px"}}
                                />
                            </div>
                        );
                    } else return null;
                })}
        </div>
    );
}
