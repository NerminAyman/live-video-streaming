import {useState} from "react";
import {useClient} from "../../services/stream-config.service";
import {ICameraVideoTrack, IMicrophoneAudioTrack} from "agora-rtc-react";

export interface ControlsProps {
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack],
    setStart: (start: boolean) => void,
    setInCall: (inCall: boolean) => void,
}

export function Controls(props: ControlsProps) {
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({ video: true, audio: true });

    const mute = async (type: String) => {
        if (type === "audio") {
            await tracks[0].setEnabled(!trackState.audio);
            setTrackState((ps) => {
                return { ...ps, audio: !ps.audio };
            });
        } else if (type === "video") {
            await tracks[1].setEnabled(!trackState.video);
            setTrackState((ps) => {
                return { ...ps, video: !ps.video };
            });
        }
    };

    const leaveChannel = async () => {
        await client.leave();
        client.removeAllListeners();
        tracks[0].close();
        tracks[1].close();
        setStart(false);
        setInCall(false);
    };

    return (
        <div className='Controls'>
            <button color={trackState.audio ? 'primary' : 'secondary'}
                    onClick={() => mute('audio')}>
                {trackState.audio ? 'Mute' : 'Unmute'}
            </button>
            <button color={trackState.video ? "primary" : "secondary"}
                    onClick={() => mute("video")}>
                {trackState.video ? 'Turn Camera off' : 'Turn Camera on'}
            </button>
            <button color="default"
                    onClick={() => leaveChannel()}>
                Leave
            </button>
        </div>
    );
}
