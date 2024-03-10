'use client'

import {useRouter} from 'next/navigation';
import axios from "axios";

export default function LoginPage() {
    const router = useRouter();

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const emailOrPhone = formData.get('email');
        const password = formData.get('password');
        const requestBody = {
            "email_or_phone": emailOrPhone,
            "password": password
        };
        try {
            const response = await axios.post('https://shop-01it-group.up.railway.app/auth/users/login/', requestBody);
            console.log("response", response);
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            router.push('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col'>
                <input type="email" name="email" placeholder="Email" required/>
                <input type="password" name="password" placeholder="Password" required/>
            </div>
            <button type="submit">Login</button>
        </form>
    );
}
