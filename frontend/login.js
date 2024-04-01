import { jwtVerify, SignJWT } from "jose";
import axios from "axios";
import {config} from "@/config";

const secretKey = "helloworld";
const key = new TextEncoder().encode(secretKey);

export async function login_(values, setCookie) {
    const requestBody = {
        "email_or_phone": values.username,
        "password": values.password
    };

    try {
        const response = await axios.post(`${config.baseUrl}/api/v1/auth/users/login/`, requestBody);
        console.log("Login response:", response);

        if (response.status < 200 || response.status >= 300) {
            return { success: false, messageText: 'Не удалось авторизоваться' };
        }

        const user = { accessToken: response.data.access, refreshToken: response.data.refresh };
        const expires = new Date(Date.now() + 30 * 60 * 1000);
        const session = await encrypt({ user, expires });
        setCookie('session', session, { expires });

        return { success: true, session };
    } catch (error) {
        console.log("Login error:", error);
        return { success: false, messageText: 'Не удалось авторизоваться' };
    }
}

export async function encrypt(payload) {
    const expires = new Date(Date.now() + 30 * 60 * 1000); 
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime(expires)
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
        return null; 
    }
}


export async function logout(removeCookie) {
    removeCookie('session');
}

export async function getSession(cookies) { 
    const session = cookies.session;
    if (!session) return null;

    const decryptedSession = await decrypt(session);
    if (!decryptedSession) {
        console.error('Failed to decrypt session token');
        return null;
    }

    return decryptedSession;
}


