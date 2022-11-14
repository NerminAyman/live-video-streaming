import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '89def2fb3dc44b3985e2c766c1fbdfa5';
const token = '007eJxTYGi8wpN1PepesZu8mYGVndHj6KUrPmjoZ8r3Jgj4yMxbkKDAYGGZkppmlJZknJJsYpJkbGlhmmqUbG5mlmyYlpSSlmj6ZVphckMgI8NZfVdGRgYIBPFZGDLyc1MZGAC3Lh3l';

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "home";
