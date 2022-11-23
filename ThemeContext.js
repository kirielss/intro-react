import { createContext } from "react";

// esse createContext é basicamente a mesma coisa que fazer:
// const [theme, setTheme] = useState('darkblue');

const ThemeContext = createContext(["#f06d06", () => {}]);

export default ThemeContext;