import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [darkMode, setStoredDarkMode] = useLocalStorage('darkMode', initialValue);
   
    return [darkMode, setStoredDarkMode];
}