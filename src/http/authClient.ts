import { createClient } from './index';

export const authClient = createClient();

// authClient.interceptors.response.use((res) => res.data);
authClient.interceptors.response.use((res) => res);
