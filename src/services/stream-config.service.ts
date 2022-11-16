import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = '89def2fb3dc44b3985e2c766c1fbdfa5';
const token = '007eJxTYLhm7t+/YTnLxMnr3qV+vsQrc23ukeSNP5I/r7gVqyLfzL9egcHCMiU1zSgtyTgl2cQkydjSwjTVKNnczCzZMC0pJS3RVMqlJLkhkJGh4dl6ZkYGCATxWRgy8nNTGRgA/PQhyA==';

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient({
    mode: 'rtc',
    codec: "h264",

});
// export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
// export const channelName = "home";
