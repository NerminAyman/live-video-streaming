import './styles.scss';
import '../../assets/generic-styles/antd-custom-styles.scss'
import VideoChatSection from "../../components/video-chat-section";
import React, {useState} from "react";
import {signOut, singIn} from "../../services/auth.service";
import {useDispatch} from "react-redux";
import {changeUserState} from "../../redux/user.reducer";
import TextChatSection from "../../components/text-chat-section";
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';
import {Layout, Skeleton, Modal, Input} from 'antd';
import {InfoCircleTwoTone} from '@ant-design/icons';

const {Header, Sider, Content} = Layout;

export function Home() {
    const [sideMenuCollapsed, setSideMenuCollapsed] = useState(false);
    const [openModal, setOpenModal] = useState(true);
    const [username, setUsername] = useState('');
    const [videoCall, setVideoCall] = useState(false);
    const dispatch = useDispatch();

    const logIn = (name: string) => {
        if (name) {
            singIn(name, (user: any) => {
                dispatch(changeUserState({uid: user.uid, name: user.displayName}));
                setVideoCall(true);
                setOpenModal(false);
                setUsername('');
            });
        }
    }

    const logOut = () => {
        signOut(() => dispatch(changeUserState(undefined)));
        setVideoCall(false);
        setOpenModal(true);
    }

    return (
        <div className='home'>
            <Modal
                className='home_modal'
                centered
                open={openModal}
                onOk={() => logIn(username)}
                okText='Join Call'
                okButtonProps={{
                    disabled: username == ''
                }}
                closable={false}
                width={1000}
            >
                <div className='home_modal-body'>
                    <InfoCircleTwoTone/>
                    <p>Kindly provide username to be able to join the call</p>
                </div>
                <Input placeholder='Add username' type="text" value={username}
                       onChange={(e) => {
                           setUsername(e.target.value);
                       }}
                />
            </Modal>
            <Layout>
                <Layout className="site-layout">
                    <Header className="home_header" style={{padding: 0}}>
                        <div className='home_header-title'>
                            <img src='https://www.drupal.org/files/project-images/react.png' alt='React Blog'/>
                            <h1>React Blog</h1>
                        </div>
                        <div className='home_header-cta' onClick={() => setSideMenuCollapsed(!sideMenuCollapsed)}>
                            {sideMenuCollapsed ? <MenuFoldOutlined/> : <MenuUnfoldOutlined/>}
                        </div>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}>
                        {
                            !videoCall ?
                                <Skeleton.Input active={true}/> :
                                <VideoChatSection videoCall={videoCall} setVideoCall={logOut}/>

                        }
                    </Content>
                </Layout>
                <Sider trigger={null}
                       collapsible
                       collapsed={sideMenuCollapsed}
                       collapsedWidth={0} >
                    <TextChatSection/>
                </Sider>
            </Layout>
        </div>
    );
}

export default Home;
