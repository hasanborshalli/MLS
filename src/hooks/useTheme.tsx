import { useEffect, useState, createContext, useContext } from "react";
type Theme = "dark" | "light";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    isDark: boolean;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("mls-theme") as Theme;
            return saved || "dark";
        }
        return "dark";
    });
    useEffect(() => {
        localStorage.setItem("mls-theme", theme);
        document.documentElement.classList.toggle(
            "light-mode",
            theme === "light",
        );
    }, [theme]);
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };
    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
                isDark: theme === "dark",
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
