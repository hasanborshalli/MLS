import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme, isDark } = useTheme();
    const links = [
        {
            href: "/",
            label: "Services",
        },
        {
            href: "/about",
            label: "About Us",
        },
        {
            href: "/contact",
            label: "Contact",
        },
    ];

    return (
        <motion.nav
            initial={{
                y: -100,
            }}
            animate={{
                y: 0,
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
            }}
            className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${isDark ? "bg-[#0a0a0f]/80 border-white/10" : "bg-white/80 border-black/10"}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center gap-3 group"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className={`relative w-12 h-12 overflow-hidden rounded-lg border-2 transition-colors bg-white ${isDark ? "border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "border-blue-500 shadow-lg"}`}
                        >
                            <img
                                src="/mls-logo.jpg"
                                alt="MLS Sound & Lighting"
                                className="w-full h-full object-contain p-0.5"
                            />
                        </motion.div>
                        <motion.span
                            className={`font-bold text-xl tracking-wider hidden sm:block transition-colors ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            MLS <span className="text-blue-500">Sound</span> &{" "}
                            <span className="text-[#c026d3]">Lighting</span>
                        </motion.span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center space-x-1">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.href}
                                    className="relative px-4 py-2 text-sm font-medium flex flex-col items-center"
                                >
                                    <span
                                        className={`relative z-10 transition-colors ${location.pathname === link.href ? (isDark ? "text-white" : "text-gray-900") : isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                                    >
                                        {link.label}
                                    </span>
                                    {location.pathname === link.href && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className={`absolute inset-0 rounded-full ${isDark ? "bg-white/10" : "bg-black/5"}`}
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                    {location.pathname === link.href && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 400,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{
                                scale: 1.1,
                            }}
                            whileTap={{
                                scale: 0.9,
                                rotate: 180,
                            }}
                            className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"}`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={theme}
                                    initial={{
                                        scale: 0,
                                        rotate: -180,
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    exit={{
                                        scale: 0,
                                        rotate: 180,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                >
                                    {isDark ? (
                                        <Sun className="w-5 h-5 text-yellow-400" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-blue-600" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-2">
                        <motion.button
                            onClick={toggleTheme}
                            whileTap={{
                                scale: 0.9,
                            }}
                            className={`p-2 rounded-md ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </motion.button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${isDark ? "text-gray-400 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900 hover:bg-black/5"}`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? "close" : "open"}
                                    initial={{
                                        rotate: -90,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        rotate: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        rotate: 90,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                >
                                    {isOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            height: 0,
                        }}
                        animate={{
                            opacity: 1,
                            height: "auto",
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                        }}
                        className={`md:hidden overflow-hidden border-b ${isDark ? "bg-[#0a0a0f] border-white/10" : "bg-white border-black/10"}`}
                    >
                        <motion.div
                            className="px-4 py-4 space-y-2"
                            initial="closed"
                            animate="open"
                            variants={{
                                open: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    },
                                },
                                closed: {},
                            }}
                        >
                            {links.map((link) => (
                                <motion.div
                                    key={link.label}
                                    variants={{
                                        open: {
                                            opacity: 1,
                                            x: 0,
                                        },
                                        closed: {
                                            opacity: 0,
                                            x: -20,
                                        },
                                    }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.href ? (isDark ? "text-white bg-white/10" : "text-gray-900 bg-black/5") : isDark ? "text-gray-300 hover:text-white hover:bg-white/5" : "text-gray-600 hover:text-gray-900 hover:bg-black/5"}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
