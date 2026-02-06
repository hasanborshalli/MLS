import { motion, useScroll, useTransform } from "framer-motion";
import { Speaker, Music, Mic2, Sparkles, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
export function ServicesPage() {
    const { isDark } = useTheme();
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const services = [
        {
            icon: <Speaker className="w-8 h-8" />,
            title: "Sound Systems",
            description:
                "Crystal clear audio for any venue size. From intimate gatherings to large outdoor concerts.",
            color: "from-blue-500 to-cyan-400",
            delay: 0,
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Lighting Design",
            description:
                "Transform your venue with intelligent lighting, moving heads, lasers, and atmospheric effects.",
            color: "from-purple-500 to-pink-500",
            delay: 0.1,
        },
        {
            icon: <Music className="w-8 h-8" />,
            title: "DJ Services",
            description:
                "Professional DJs who know how to read the crowd and keep the energy high all night.",
            color: "from-orange-500 to-red-500",
            delay: 0.2,
        },
        {
            icon: <Mic2 className="w-8 h-8" />,
            title: "Event Production",
            description:
                "Full-service technical production including stage setup, trussing, and AV coordination.",
            color: "from-green-500 to-emerald-400",
            delay: 0.3,
        },
    ];

    const photos = [
        {
            url: "/outdoor-sound-systems-1024x585.jpg",
            title: "Outdoor Concerts",
            desc: "Massive sound reinforcement for large-scale outdoor events",
        },
        {
            url: "/sound.jpg",
            title: "Indoor Productions",
            desc: "Immersive lighting and sound for arena-style shows",
        },
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    style={{
                        y: heroY,
                    }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className={`absolute inset-0 z-10 ${isDark ? "bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/85 to-[#0a0a0f]" : "bg-gradient-to-b from-white/70 via-white/85 to-[#f8fafc]"}`}
                    />

                    {/* Animated Light Beams - Spotlights */}
                    {isDark && (
                        <>
                            {/* Left Spotlight */}
                            <motion.div
                                animate={{
                                    rotate: [-15, 5, -15],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -top-20 left-1/4 w-40 h-[120vh] bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent origin-top blur-2xl"
                                style={{
                                    transformOrigin: "top center",
                                }}
                            />

                            {/* Right Spotlight */}
                            <motion.div
                                animate={{
                                    rotate: [15, -5, 15],
                                    opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                    duration: 9,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                                className="absolute -top-20 right-1/4 w-40 h-[120vh] bg-gradient-to-b from-purple-500/40 via-purple-500/10 to-transparent origin-top blur-2xl"
                                style={{
                                    transformOrigin: "top center",
                                }}
                            />

                            {/* Center Spotlight */}
                            <motion.div
                                animate={{
                                    scaleX: [0.8, 1.2, 0.8],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 2,
                                }}
                                className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-[120vh] bg-gradient-to-b from-pink-500/30 via-pink-500/5 to-transparent origin-top blur-3xl"
                            />
                        </>
                    )}
                </motion.div>

                <motion.div
                    style={{
                        opacity: heroOpacity,
                    }}
                    className="relative z-20 text-center px-4 max-w-5xl mx-auto"
                >
                    {/* Animated Equalizer Bars */}
                    <div className="flex justify-center items-end gap-1 h-16 mb-8 opacity-80">
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    height: ["20%", "80%", "40%", "90%", "30%"],
                                }}
                                transition={{
                                    duration: 0.8 + Math.random() * 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    repeatType: "mirror",
                                }}
                                className={`w-2 rounded-t-full ${isDark ? "bg-gradient-to-t from-blue-500 to-purple-500" : "bg-gradient-to-t from-blue-400 to-purple-400"}`}
                            />
                        ))}
                    </div>

                    {/* Animated Title - Simplified for Performance & Mobile Layout */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="mb-6"
                    >
                        <h1 className="font-bold tracking-tight">
                            <span className="block text-6xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient-text mb-2">
                                MLS
                            </span>
                            <span
                                className={`block text-4xl md:text-6xl lg:text-7xl ${isDark ? "text-white" : "text-gray-900"}`}
                            >
                                Sound & Lighting
                            </span>
                        </h1>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.4,
                            duration: 0.6,
                        }}
                        className={`text-xl md:text-3xl font-light mb-10 max-w-3xl mx-auto leading-relaxed ${isDark ? "text-gray-200" : "text-gray-700"}`}
                    >
                        "Where an event turns into a breathtaking show"
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.6,
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link to="/contact">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 0 40px rgba(59,130,246,0.6)",
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-lg text-white shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2"
                            >
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                Book Your Event
                            </motion.button>
                        </Link>
                        <Link to="/about">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: isDark
                                        ? "rgba(255,255,255,0.15)"
                                        : "rgba(0,0,0,0.1)",
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className={`px-8 py-4 border rounded-full font-semibold text-lg transition-all ${isDark ? "border-white/30 text-white hover:border-white/50" : "border-gray-400 text-gray-700 hover:border-gray-600"}`}
                            >
                                Learn More
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.5,
                        }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{
                                y: [0, 10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                            className={`w-6 h-10 rounded-full border-2 flex justify-center pt-2 ${isDark ? "border-white/30" : "border-gray-400"}`}
                        >
                            <motion.div
                                animate={{
                                    opacity: [1, 0, 1],
                                    y: [0, 8, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-white" : "bg-gray-600"}`}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
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
                        transition={{
                            duration: 0.6,
                        }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            Our Services
                        </motion.h2>
                        <p
                            className={
                                isDark ? "text-gray-400" : "text-gray-600"
                            }
                        >
                            Everything you need for an unforgettable experience
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                    rotateX: -10,
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
                                    delay: service.delay,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: {
                                        duration: 0.3,
                                    },
                                }}
                                className={`group relative rounded-2xl p-8 overflow-hidden border transition-all duration-300 ${isDark ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" : "bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl"}`}
                                style={{
                                    perspective: "1000px",
                                }}
                            >
                                <motion.div
                                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} rounded-full blur-[60px] transition-opacity duration-500 ${isDark ? "opacity-10 group-hover:opacity-25" : "opacity-5 group-hover:opacity-15"}`}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 90, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                <motion.div
                                    whileHover={{
                                        rotateY: 180,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                    }}
                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </motion.div>

                                <h3
                                    className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className={`leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
                                >
                                    {service.description}
                                </p>

                                <motion.div
                                    className={`flex items-center text-sm font-semibold transition-colors ${isDark ? "text-white/70 group-hover:text-white" : "text-gray-600 group-hover:text-gray-900"}`}
                                >
                                    Learn more
                                    <motion.div
                                        className="ml-2"
                                        animate={{
                                            x: [0, 5, 0],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Showcase Section */}
            <section
                className={`py-24 relative ${isDark ? "bg-[#050508]" : "bg-gray-50"}`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
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
                        className="text-center mb-16"
                    >
                        <h2
                            className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}
                        >
                            See Us In Action
                        </h2>
                        <p
                            className={
                                isDark ? "text-gray-400" : "text-gray-600"
                            }
                        >
                            Bringing world-class production to every event
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {photos.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    scale: 0.95,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    delay: index * 0.2,
                                }}
                                className="group relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <h3 className="text-white text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        {photo.title}
                                    </h3>
                                    <p className="text-gray-200 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {photo.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <motion.div
                    className={`absolute inset-0 ${isDark ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50" : "bg-gradient-to-r from-blue-100 to-purple-100"}`}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        backgroundSize: "200% 200%",
                    }}
                />

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full ${isDark ? "bg-white/20" : "bg-blue-500/30"}`}
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.3,
                        }}
                    />
                ))}

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <motion.h2
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                        className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
                    >
                        You imagine it... We make it happen
                    </motion.h2>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                        className={`text-xl mb-10 ${isDark ? "text-gray-300" : "text-gray-700"}`}
                    >
                        Ready to transform your event into a spectacular show?
                    </motion.p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: isDark
                                    ? "0 0 40px rgba(255,255,255,0.4)"
                                    : "0 20px 40px rgba(0,0,0,0.2)",
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className={`px-10 py-4 rounded-full font-bold text-lg transition-all ${isDark ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"}`}
                        >
                            Get a Quote
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
