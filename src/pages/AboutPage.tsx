import { motion } from "framer-motion";
import { Star, Users, Calendar, Award, Zap, Heart } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
export function AboutPage() {
    const { isDark } = useTheme();
    const stats = [
        {
            icon: <Calendar className="w-6 h-6" />,
            value: "10+",
            label: "Years Experience",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <Star className="w-6 h-6" />,
            value: "500+",
            label: "Events Completed",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: <Users className="w-6 h-6" />,
            value: "100%",
            label: "Client Satisfaction",
            color: "from-green-500 to-emerald-400",
        },
    ];

    const features = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Professional Equipment",
            desc: "We use only top-tier audio and lighting brands to ensure reliability and superior quality.",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Expert Team",
            desc: "Our technicians and DJs are industry veterans who know how to handle any scenario.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Tailored Solutions",
            desc: "We customize every setup to match your venue, theme, and budget perfectly.",
            color: "from-orange-500 to-red-500",
        },
    ];

    return (
        <div className="py-12 md:py-24 px-4 max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -80,
                        rotateY: -10,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        rotateY: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 50,
                    }}
                >
                    <motion.h1
                        className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                        Crafting Unforgettable{" "}
                        <motion.span
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block"
                            animate={{
                                backgroundPosition: [
                                    "0% 50%",
                                    "100% 50%",
                                    "0% 50%",
                                ],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            style={{
                                backgroundSize: "200% auto",
                            }}
                        >
                            Experiences
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3,
                        }}
                        className={`text-xl mb-8 leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}
                    >
                        At MLS Sound & Lighting, we believe every event deserves
                        to be a masterpiece. Founded with a passion for audio
                        excellence and visual artistry, we've grown into a
                        premier event production company.
                    </motion.p>

                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.5,
                        }}
                        className={`text-lg mb-10 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    >
                        Our mission is simple: to turn your vision into reality.
                        We combine state-of-the-art technology with creative
                        expertise to design immersive environments that
                        captivate your guests.
                    </motion.p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                    scale: 0.9,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: 0.7 + index * 0.15,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                }}
                                className={`relative rounded-xl p-5 text-center overflow-hidden border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-md"}`}
                            >
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0`}
                                    whileHover={{
                                        opacity: isDark ? 0.1 : 0.05,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                    }}
                                />

                                <motion.div
                                    className={`flex justify-center mb-2 bg-gradient-to-br ${stat.color} bg-clip-text`}
                                    whileHover={{
                                        rotate: [0, -10, 10, 0],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                >
                                    <div className="text-blue-400">
                                        {stat.icon}
                                    </div>
                                </motion.div>
                                <motion.div
                                    className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}
                                    initial={{
                                        scale: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 1 + index * 0.1,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div
                                    className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Image with 3D effect */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: 20,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3,
                        type: "spring",
                    }}
                    className="relative"
                    style={{
                        perspective: "1000px",
                    }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 blur-lg"
                        animate={{
                            rotate: [3, 5, 3],
                            scale: [1, 1.02, 1],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        style={{
                            opacity: isDark ? 0.3 : 0.2,
                        }}
                    />

                    <motion.img
                        src="/event.jpg"
                        alt="Event Production"
                        className={`relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] ${isDark ? "border border-white/10" : "border border-gray-200"}`}
                        whileHover={{
                            scale: 1.02,
                            rotateY: -5,
                        }}
                        transition={{
                            duration: 0.4,
                        }}
                    />

                    {/* Floating badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            delay: 1,
                            type: "spring",
                            stiffness: 200,
                        }}
                        className={`absolute -bottom-6 -right-6 px-6 py-3 rounded-full font-bold shadow-xl ${isDark ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-white text-gray-900 border border-gray-200"}`}
                    >
                        <motion.span
                            animate={{
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            ✨ Premium Quality
                        </motion.span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-24">
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className={`text-3xl md:text-5xl font-bold text-center mb-16 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                    Why Choose MLS?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{
                                opacity: 0,
                                y: 50,
                                rotateX: -15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotateX: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: i * 0.15,
                                type: "spring",
                                stiffness: 80,
                            }}
                            whileHover={{
                                y: -10,
                                transition: {
                                    duration: 0.3,
                                },
                            }}
                            className={`relative p-8 rounded-2xl border overflow-hidden group ${isDark ? "bg-[#0f0f16] border-white/5 hover:border-blue-500/30" : "bg-white border-gray-200 hover:border-blue-300 shadow-lg"}`}
                            style={{
                                perspective: "1000px",
                            }}
                        >
                            {/* Animated background gradient */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                            />

                            <motion.div
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.1,
                                }}
                                transition={{
                                    duration: 0.6,
                                }}
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                            >
                                <div className="text-white">{item.icon}</div>
                            </motion.div>

                            <h3
                                className={`text-xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                            >
                                {item.title}
                            </h3>
                            <p
                                className={
                                    isDark ? "text-gray-400" : "text-gray-600"
                                }
                            >
                                {item.desc}
                            </p>

                            {/* Corner accent */}
                            <motion.div
                                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
