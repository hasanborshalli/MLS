import { motion } from "framer-motion";
import { Phone, MapPin, Facebook, Instagram, Music } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
export function Footer() {
    const { isDark } = useTheme();
    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <footer
            className={`border-t pt-16 pb-8 transition-colors duration-500 ${isDark ? "bg-[#050508] border-white/10" : "bg-gray-100 border-black/10"}`}
        >
            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 0.6,
                                }}
                                className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center"
                            >
                                <Music className="w-5 h-5 text-white" />
                            </motion.div>
                            <span
                                className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
                            >
                                MLS Sound & Lighting
                            </span>
                        </div>
                        <p
                            className={
                                isDark ? "text-gray-400" : "text-gray-600"
                            }
                        >
                            Where an event turns into a breathtaking show.
                            Professional sound, lighting, and DJ services for
                            any occasion.
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3
                            className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            Contact Us
                        </h3>
                        <div className="space-y-3">
                            <div
                                className={`flex items-center gap-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                            >
                                <Phone className="w-5 h-5 text-blue-500" />
                                <div className="flex flex-col">
                                    <a
                                        href="tel:71142212"
                                        className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
                                    >
                                        71 142 212
                                    </a>
                                    <a
                                        href="tel:76982598"
                                        className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
                                    >
                                        76 982 598
                                    </a>
                                </div>
                            </div>
                            <div
                                className={`flex items-center gap-3 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                            >
                                <MapPin className="w-5 h-5 text-purple-500" />
                                <span>Available across the region</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="space-y-4">
                        <h3
                            className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            Follow Us
                        </h3>
                        <div className="flex gap-4">
                            {[
                                {
                                    icon: Facebook,
                                    color: "hover:bg-blue-600",
                                    href: "https://www.facebook.com/profile.php?id=61566441749305",
                                },
                                {
                                    icon: Instagram,
                                    color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600",
                                    href: "https://www.instagram.com/mghamesforlightingandsound2024?igsh=Y2F6ZGU2cHh6MDU1",
                                },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.95,
                                    }}
                                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group ${isDark ? "bg-white/5" : "bg-black/5"} ${social.color}`}
                                >
                                    <social.icon
                                        className={`w-5 h-5 transition-colors ${isDark ? "text-gray-400 group-hover:text-white" : "text-gray-600 group-hover:text-white"}`}
                                    />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    variants={itemVariants}
                    className={`border-t pt-8 text-center text-sm ${isDark ? "border-white/10 text-gray-500" : "border-black/10 text-gray-500"}`}
                >
                    <p>
                        &copy; {new Date().getFullYear()} MLS Sound & Lighting.
                        All rights reserved.
                    </p>
                </motion.div>
            </motion.div>
        </footer>
    );
}
