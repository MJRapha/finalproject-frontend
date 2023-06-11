//import { type } from "os";
import { IPhoneArticle, AndroidArticle, CarouselArticle } from "../features/slices/smartphones";

export type IPhoneItemProps = {} & IPhoneArticle;
export type AndroidItemProps = {} & AndroidArticle;
export type CarouselItemProps = {} & CarouselArticle;

export type DarkModeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

// think data structure and actions:
export type AuthContextType = {
    isLoggedIn: boolean;
    username?: string;
    email?: string;
    token?: string;
    login: (username: string, email: string, token: string) => void;
    logout: () => void;
};

export type ChildProps = {
    children?: React.ReactNode;
};

export type RegisterFormType = {
    username: string;
    email: string;
    password: string;
};

export type LoginFormType = {
    email: string;
    password: string;
};

export type IsActiveProps = {
    isActive: boolean
}
