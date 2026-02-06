import React, { useEffect } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
interface LayoutProps {
  children: React.ReactNode;
}
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { isDark } = useTheme();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, [location.pathname]);
  return (
    <div
      className={`min-h-screen flex flex-col overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#0a0a0f] text-white' : 'bg-[#f8fafc] text-gray-900'}`}>

      <Navigation />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-grow pt-20">

          {children}
        </motion.main>
      </AnimatePresence>

      <Footer />

      {/* ===== FIXED BOTTOM CORNER STAGE LIGHTS ===== */}
      <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
        {/* Bottom-Left Main Beam - Blue to Purple */}
        <motion.div
          animate={{
            rotate: [-20, 15, -20]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-0 left-0 w-64 h-[70vh]"
          style={{
            transformOrigin: 'bottom left'
          }}>

          <div
            className={`w-full h-full bg-gradient-to-t ${isDark ? 'from-blue-500 via-purple-500/60' : 'from-blue-500/80 via-purple-500/40'} to-transparent`}
            style={{
              clipPath: 'polygon(0% 100%, 12% 100%, 100% 0%, 0% 0%)',
              opacity: isDark ? 0.7 : 0.5
            }} />

        </motion.div>

        {/* Bottom-Left Secondary Beam - Cyan */}
        <motion.div
          animate={{
            rotate: [-5, 25, -5]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-0 left-4 w-48 h-[60vh]"
          style={{
            transformOrigin: 'bottom left'
          }}>

          <div
            className={`w-full h-full bg-gradient-to-t ${isDark ? 'from-cyan-400 via-blue-400/40' : 'from-cyan-500/70 via-blue-400/30'} to-transparent`}
            style={{
              clipPath: 'polygon(0% 100%, 8% 100%, 70% 0%, 0% 0%)',
              opacity: isDark ? 0.5 : 0.35
            }} />

        </motion.div>

        {/* Bottom-Left Glow Source */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`absolute -bottom-6 -left-6 w-28 h-28 rounded-full blur-2xl ${isDark ? 'bg-blue-500' : 'bg-blue-500/70'}`} />


        {/* Bottom-Right Main Beam - Purple to Pink */}
        <motion.div
          animate={{
            rotate: [20, -15, 20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
          className="absolute bottom-0 right-0 w-64 h-[70vh]"
          style={{
            transformOrigin: 'bottom right'
          }}>

          <div
            className={`w-full h-full bg-gradient-to-t ${isDark ? 'from-purple-500 via-pink-500/60' : 'from-purple-500/80 via-pink-500/40'} to-transparent`}
            style={{
              clipPath: 'polygon(88% 100%, 100% 100%, 100% 0%, 0% 0%)',
              opacity: isDark ? 0.7 : 0.5
            }} />

        </motion.div>

        {/* Bottom-Right Secondary Beam - Magenta */}
        <motion.div
          animate={{
            rotate: [5, -25, 5]
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-0 right-4 w-48 h-[60vh]"
          style={{
            transformOrigin: 'bottom right'
          }}>

          <div
            className={`w-full h-full bg-gradient-to-t ${isDark ? 'from-pink-500 via-purple-400/40' : 'from-pink-500/70 via-purple-400/30'} to-transparent`}
            style={{
              clipPath: 'polygon(92% 100%, 100% 100%, 100% 0%, 30% 0%)',
              opacity: isDark ? 0.5 : 0.35
            }} />

        </motion.div>

        {/* Bottom-Right Glow Source */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className={`absolute -bottom-6 -right-6 w-28 h-28 rounded-full blur-2xl ${isDark ? 'bg-purple-500' : 'bg-purple-500/70'}`} />

      </div>

      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] ${isDark ? 'bg-blue-600/15' : 'bg-blue-400/20'}`} />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className={`absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-[120px] ${isDark ? 'bg-purple-600/15' : 'bg-purple-400/20'}`} />

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className={`absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-[100px] ${isDark ? 'bg-pink-600/10' : 'bg-pink-400/15'}`} />


        {/* Light beams (dark mode only) */}
        {isDark &&
        <>
            <motion.div
            animate={{
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="absolute top-0 left-1/3 w-32 h-full bg-gradient-to-b from-blue-500/20 via-transparent to-transparent transform -skew-x-12" />

            <motion.div
            animate={{
              opacity: [0.05, 0.12, 0.05]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1
            }}
            className="absolute top-0 right-1/3 w-24 h-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent transform skew-x-12" />

          </>
        }
      </div>
    </div>);

}