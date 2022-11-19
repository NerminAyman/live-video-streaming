import './styles.scss';
import {useSelector} from "react-redux";
import {selectUser} from "../../redux/user.reducer";
import {useEffect, useState} from "react";
import {StreamChat} from "stream-chat";
import {
    Chat,
    Channel,
    Window,
    ChannelHeader,
    MessageList,
    MessageInput,
    ChannelList,
    LoadingChannels
} from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import {streamAppKey} from "../../services/stream-config.service";
import AvatarPlaceholder from '../../assets/images/avatar-placeholder.png'

export function TextChatSection() {
    const user: any = useSelector(selectUser);
    const [client, setClient] = useState<StreamChat>();

    useEffect(() => {
        if (user) {
            let connectedUser = {
                id: user.uid,
                name: user.name,
                image: AvatarPlaceholder
            }

            async function init() {
                if (user) {
                    const chatClient = StreamChat.getInstance(streamAppKey);
                    await chatClient.connectUser(connectedUser,
                        chatClient.devToken(connectedUser.id));
                    const channel = chatClient.channel('messaging',
                        'stream-chat', {
                            image: 'https://www.drupal.org/files/project-images/react.png',
                            name: 'Discussions',
                            members: [connectedUser.id],
                            role: 'admin'
                        });
                    await channel.watch();
                    setClient(chatClient);
                }
            }

            init()
        }
    }, user)

    return (
        <div className='text-chat-section'>
            {!client ?
                <LoadingChannels/>
                :
                user &&
                <Chat client={client} theme="messaging light">
                    <ChannelList/>
                    <Channel>
                        <Window>
                            <ChannelHeader title='Discussion'/>
                            <MessageList/>
                            <MessageInput/>
                        </Window>
                    </Channel>
                </Chat>
            }
        </div>
    );
}

export default TextChatSection;
