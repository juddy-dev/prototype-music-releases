//AXIOS
import axios from "axios";

//AWS
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import { CookieStorage } from "aws-amplify/utils";
import { Amplify } from "aws-amplify";
import configAws from "aws-exports";
import { fetchAuthSession } from "aws-amplify/auth";

//AWS CONFIGURATION
Amplify.configure(configAws);

export class HTTPBaseService {
    private instance: any;
    private token: string;

    public constructor(base: string | undefined) {
        this.instance = axios.create({baseURL: base});
    }

    public getInstance = async () => {
        await this.getTokenStorage();

        this.instance.interceptors.request.use( (config) => {
            config.headers['Authorization'] = this.token;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        });

        this.instance.interceptors.response.use( (response) => {
            return response?.data;
        }, 
         (error) => {
            return this.handleError(error);
         });
         
         return this.instance;

    }

    private getTokenStorage = async () => {
        const tokens = await cognitoUserPoolsTokenProvider.getTokens();
        if (!!tokens && !!tokens.idToken) {
            this.token = tokens?.idToken?.toString();
        } else {
            this.getTokenSession();
        }
    }

    private getTokenSession = async () => {
        const { tokens }  = await fetchAuthSession();
        if (!!tokens && !!tokens.idToken) {
            this.token = tokens?.idToken?.toString();
        }
    }

    public handleError = async (error: any) => {
        const originalRequest = error.config;
        if (error.response) {
            if (error.response.status === 401) {
                await this.refreshToken();
                if (!!originalRequest) {
                    return this.instance(originalRequest);
                }
            } else {
                return this.handleErrorHttp(error.response);
            }
        } else if (error.message) {
            return {
                error: -1,
                message: error.message
            };
        } else {
            return {
                error: -1,
                message: "Something went wrong"
            };

        }


    }

    private handleErrorHttp(error: any) {
        if (error?.status == 404) {
            return {
                error: 404,
                message: 'NotFound'
            };
        } else if (error?.status == 400) {
            return {
                error: 400,
                message: 'Exists'
            };
        } else if (error?.status == 500) {
            return {
                error: 500,
                message: 'Something went wrong'
            };
        } else {
            return {
                error: -1,
                message: error.data
            };
        }
    }

    private refreshToken = async() => {
        const { tokens } = await fetchAuthSession({ forceRefresh: true });
        if (!!tokens && !!tokens.idToken) {
            this.token = tokens?.idToken?.toString();
            cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());
        }
    }

}