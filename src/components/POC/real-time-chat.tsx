export interface RealTimeChatProps {
    uid: string,
}

export function RealTimeChat(props: RealTimeChatProps) {
    return (
        <div className='text-chat-chat'>
            {props.uid}
        </div>
    );
}

export default RealTimeChat;
