import Axios, {AxiosRequestConfig} from 'axios';

export interface Credentials {
    username: string;
    password: string;
}

interface LoginApiResponse {
    created: string;
    id: string;
    token:string;
    username:string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig:AxiosRequestConfig = {
        method: 'post',
        url: process.env.REACT_APP_BASE_URL + '/login',
        data
    }

    try {
        const {data:{token}} = await Axios.request<LoginApiResponse>(requestConfig);
        storeToken(token)
        return {
            token
        }
    } catch (e:any) {
        console.error(e);
        return {error: e.response.message}
    }
}

export const onRegister = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method:'post',
        url: process.env.REACT_APP_API_BASE_URL + '/register',
        data
    }

    try{
        const {data: response} = await Axios.request(requestConfig);
    } catch (e:any) {
        console.error(e.response);
        return {error: e.response.data.message}
    }
}


export const NFT_PRO_IT_TOKEN_KEY = 'nft_it_token_key';

const storeToken = (token:string) => {
    localStorage.setItem(NFT_PRO_IT_TOKEN_KEY, token);
}