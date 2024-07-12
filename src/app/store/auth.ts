import {atom} from "nanostores";
import {redirect} from "next/navigation";

interface User {
    username: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export const authState = atom<AuthState>({
    isAuthenticated: false,
    user: null,
});

export const login = (username: string, password: string): boolean => {
    if (username === 'admin' && password === 'password') {
        authState.set({
            isAuthenticated: true,
            user: { username },
        })
        return true;
    } else {
        alert('Invalid username or password')
        return false;
    }
};

export const logout = () => {
    authState.set({
        isAuthenticated: false,
        user: null,
    });
};