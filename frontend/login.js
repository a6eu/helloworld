

import { useEffect } from "react";
import { jwtVerify, SignJWT } from "jose";
import axios from "axios";
import { useCookies } from "react-cookie";

const secretKey = "helloworld";
const key = new TextEncoder().encode(secretKey);

export async function login_(values, setCookie) {
    const requestBody = {
        "email_or_phone": values.username,
        "password": values.password
    };

    try {
        const response = await axios.post('https://shop-01it-group.up.railway.app/api/v1/auth/users/login/', requestBody);
        console.log("Login response:", response);

        if (response.status < 200 || response.status >= 300) {
            return { success: false, messageText: 'Не удалось авторизоваться' };
        }

        const user = { accessToken: response.data.access, refreshToken: response.data.refresh };
        const expires = new Date(Date.now() + 2 * 3600 * 1000);
        const session = await encrypt({ user, expires });
        setCookie('session', session, { expires });

        return { success: true, session };
    } catch (error) {
        console.log("Login error:", error);
        return { success: false, messageText: 'Не удалось авторизоваться' };
    }
}

export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("120 sec from now")
        .sign(key);
}

export async function decrypt(input) {
    try {
        const { payload } = await jwtVerify(input, key, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.error("Decrypt error:", error);
        throw new Error('Невозможно расшифровать токен');
    }
}

export async function logout(removeCookie) {
    removeCookie('session');
}

export async function getSession(cookies) { 
    const session = cookies.session;
    if (!session) return null;
    return await decrypt(session);
}


