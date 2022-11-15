import {createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId = '89def2fb3dc44b3985e2c766c1fbdfa5';
const token = '007eJxTYOg8tnatZ0vI8S2JKbw/37zac7hmI9cGjt9J4fknepOfr9ypwGBhmZKaZpSWZJySbGKSZGxpYZpqlGxuZpZsmJaUkpZoas9anNwQyMigutyGlZEBAkF8FoaM/NxUBgYAN5chxQ==';

export const config: any = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "home";
