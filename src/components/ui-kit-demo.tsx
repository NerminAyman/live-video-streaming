import React, { CSSProperties, useState } from 'react'
import AgoraUIKit, { layout } from 'agora-react-uikit'
import 'agora-react-uikit/dist/index.css'
import {config, useClient} from '../services/stream-config.service'

const UiKitDemo: React.FunctionComponent = () => {
    const [videocall, setVideocall] = useState(false)
    const [isHost, setHost] = useState(true)
    const [isPinned, setPinned] = useState(false)
    const [username, setUsername] = useState('Nermin')
    const agoraClient = useClient();

    return (
        <div style={styles.container}>
            <div style={styles.videoContainer}>
                <h1 style={styles.heading}>Agora React Web UI Kit</h1>
                {videocall ? (<>
                        <div style={styles.nav}>
                            <p style={{ fontSize: 20, width: 200 }}>You're {isHost ? 'a host' : 'an audience'}</p>
                            <p style={styles.btn} onClick={() => setHost(!isHost)}>Change Role</p>
                            <p style={styles.btn} onClick={() => setPinned(!isPinned)}>Change Layout</p>
                        </div>
                        <AgoraUIKit
                            rtcProps={{
                                appId: config.appId,
                                channel: 'home',
                                token: config.token,
                                layout: isPinned ? layout.pin : layout.grid,
                                disableRtm: true,
                                enableAudio: true,
                                enableVideo: true,
                                callActive: false,
                                customRtcClient: agoraClient
                            }}
                            callbacks={{
                                EndCall: () => setVideocall(false),
                            }} /></>
                ) : (
                    <div style={styles.nav}>
                        <input style={styles.input} placeholder='nickname' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        <h3 style={styles.btn} onClick={() => setVideocall(true)}>Start Call</h3>
                    </div>
                )}
            </div>
        </div>
    )
}

const styles = {
    container: { width: '100vw', height: '100vh', display: 'flex', flex: 1, backgroundColor: '#007bff22'},
    heading: { textAlign: 'center' as const, marginBottom: 0 },
    videoContainer: { display: 'flex', flexDirection: 'column', flex: 1 } as CSSProperties,
    nav: { display: 'flex', justifyContent: 'space-around' },
    btn: { backgroundColor: '#007bff', cursor: 'pointer', borderRadius: 5, padding: '4px 8px', color: '#ffffff', fontSize: 20 },
    input: {display: 'flex', height: 24, alignSelf: 'center'} as CSSProperties
}

export default UiKitDemo;
