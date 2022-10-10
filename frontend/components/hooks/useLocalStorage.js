import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [darkMode, setDarkMode] = useState(() => {
        if(window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });
    return [darkMode, setDarkMode];
}