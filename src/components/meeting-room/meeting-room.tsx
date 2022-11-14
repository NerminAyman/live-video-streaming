import {useEffect, useState} from "react";
import {channelName, config, useClient, useMicrophoneAndCameraTracks} from "../../services/stream-config.service";
import {Controls} from "../controls/controls";
import {Video} from "../video/video";

export interface MeetingRoomProps {
    setInCall: any
}

export function MeetingRoom(props: MeetingRoomProps) {
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const {ready, tracks} = useMicrophoneAndCameraTracks();

    useEffect(() => {
        let init = async (name: any) => {

            client.on("user-published",
                async (user, mediaType) => {
                    await client.subscribe(user, mediaType);
                    if (mediaType === "video") {
                        let arr = [...users, user];
                        setUsers(arr);
                    }
                    if (mediaType === "audio" && user && user.audioTrack) {
                        user.audioTrack.play();
                    }
                });

            client.on("user-unpublished", (user, mediaType) => {
                if (mediaType === "audio") {
                    if (user.audioTrack) user.audioTrack.stop();
                }
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                        return prevUsers.filter((User) => User.uid !== user.uid);
                    });
                }
            });

            client.on("user-left", (user) => {
                setUsers((prevUsers) => {
                    return prevUsers.filter((User) => User.uid !== user.uid);
                });
            });

            try {
                await client.join(config.appId, name, config.token, null);
            } catch (error) {
                console.log("error");
            }

            if (tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        }

        if (ready && tracks) {
            try {
                init(channelName);
            } catch (error) {
                console.log(error);
            }
        }


    }, [channelName, client, ready, tracks]);
    return (
        <div className='meeting-room'>
            <div className='meeting-room_controls'>
                {ready && tracks && (
                    <Controls tracks={tracks}
                              setStart={setStart}
                              setInCall={props.setInCall} />
                )}
            </div>
            <div className='meeting-room_video'>
                {start && tracks && <Video tracks={tracks} users={users} />}
            </div>
        </div>
    );
}
