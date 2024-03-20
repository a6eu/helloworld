"use server";

import {cookies} from "next/headers";
import {jwtVerify, SignJWT} from "jose";
import axios from "axios";

const secretKey = "helloworld";
const key = new TextEncoder().encode(secretKey);

export async function login(values) {
    const requestBody = {
        "email_or_phone": values.username,
        "password": values.password
    };

    try {
        const response = await axios.post('https://shop-01it-group.up.railway.app/api/v1/auth/users/login/', requestBody);
        console.log("Login response:", response);

        if (response.data.error) {
            return { success: false, messageText: response.data.error };
        }
        const user = { accessToken: response.data.access, refreshToken: response.data.refresh };
        const expires = new Date(Date.now() + 120 * 1000);
        const session = await encrypt({ user, expires });

        cookies().set("session", session, { expires, httpOnly: true });

        return { success: true, messageText: 'Вы успешно авторизовались.' };
    } catch (error) {
        console.log("Login error:", error);
        return { success: false, messageText: 'Не удалось авторизоваться' };
    }
}


export async function logout() {
    cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return undefined;
    return await decrypt(session);
}

export async function encrypt(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("120 sec from now")
        .sign(key);
}

export async function decrypt(input) {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}
