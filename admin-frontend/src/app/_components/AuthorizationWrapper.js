'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function withAuth(WrappedComponent) {
    // Эта функция-обертка возвращает новый компонент
    return function AuthComponent(props) {
        const router = useRouter();

        useEffect(() => {
            // Убедимся, что код выполняется в браузере и роутер готов
            if (typeof window !== 'undefined' && router.isReady) {
                const accessToken = localStorage.getItem('accessToken');
                // Если токена нет, перенаправляем на страницу входа
                if (!accessToken) {
                    router.push('/login');
                }
            }
        }, [router.isReady, router]); // Зависимости для useEffect

        // Возвращаем обернутый компонент с его пропсами
        return <WrappedComponent {...props} />;
    };
}
