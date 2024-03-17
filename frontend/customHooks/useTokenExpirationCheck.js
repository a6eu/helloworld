import { useEffect } from 'react';
import axios from "axios";
import {config} from "@/config";

export const useTokenExpirationCheck = () => {
    const refreshToken = () => {
        const storedRefreshToken = localStorage.getItem('refreshToken');

        if (storedRefreshToken) {
            axios.post(`${config.baseUrl}/auth/refresh/`, { refresh: storedRefreshToken })
                .then((response) => {
                    const newAccessToken = response.data.access;

                    localStorage.setItem('accessToken', newAccessToken);

                    console.log('Token refreshed successfully');
                })
                .catch((error) => {
                    console.error('Error refreshing token:', error);
                });
        } else {
            console.error('No refresh token available');
        }
    };

    const checkTokenExpiration = () => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
            console.log(tokenData)
            const expirationTime = tokenData.exp * 1000;
            const currentTime = new Date().getTime();
            if (currentTime > expirationTime) {
                refreshToken();
            }
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            checkTokenExpiration();
        }, 60000);

        return () => clearInterval(interval);
    }, []);
};