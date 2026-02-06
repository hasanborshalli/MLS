import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./hooks/useTheme";
import { Layout } from "./components/Layout";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
export function App() {
    return (
        <ThemeProvider>
            <Router>
                <Layout>
                    <AnimatePresence mode="wait">
                        <Routes>
                            <Route path="/" element={<ServicesPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </AnimatePresence>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}
