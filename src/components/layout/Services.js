"use client"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react";

// Services paragragh animation
const banner = {
    animate: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.4,
        },
    },
}

const letterAnimation = {
    initial: {
        y: 20,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        delay: 5,
        transition: {
            duration: 0.3,
        },
    },
}

export default function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("animate");
        }
    })

    return (
        <motion.section id="services" className="px-20 max-md:px-5"
            variants={banner}
            initial="initial"
            animate={mainControls}
        >
            <motion.h1 className="flex gap-10 justify-center items-center font-medium text-center text-[#8c8c73] text-[8vw] max-sm:text-[10vw] pt-24 max-sm:pt-10"
                variants={letterAnimation}
            >
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
                SERVICES
                <div className="max-md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 200 200" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M200 150C200 94.7715 155.228 50 100 50C44.7715 50 0 94.7715 0 150H200Z" fill="#8c8c73" />
                    </svg>
                </div>
            </motion.h1>

            <div ref={ref} className="grid grid-cols-2 gap-16 max-md:gap-10 max-md:grid-cols-1">
                <div>
                    <motion.h2 className="font-bold text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        My expertises.
                    </motion.h2>
                    <motion.p className="text-[1.6vw] max-md:text-[4vw] mt-10"
                        variants={letterAnimation}
                    >
                        I focus on all things design and web related.
                        With each of my services, my goal is to deliver
                        smooth experience for user.
                    </motion.p>
                </div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[5rem] max-md:leading-10"
                    variants={letterAnimation}
                >
                    <h3>Web Development</h3>
                    <h3>Web Design</h3>
                    <h3>Wireframing</h3>
                    <h3>Server</h3>
                    <h3>Infrastructure</h3>
                </motion.div>

                <div>
                    <motion.h2 className="font-bold text-[4.5vw] max-md:text-[7vw]"
                        variants={letterAnimation}
                    >
                        My digital tool box.
                    </motion.h2>
                    <motion.p className="text-[1.6vw] max-md:text-[4vw] mt-10"
                        variants={letterAnimation}
                    >
                        These are my go to tech stack to make any projects happen.
                        I am always eager of learning more about my current stack,
                        and new technologies that could expand my horizons.
                    </motion.p>
                </div>

                <span className="hidden max-md:flex bg-[#aeae9d] w-[100%] h-1"></span>

                <motion.div className="font-extrabold text-[4.5vw] max-md:text-[7vw] text-[#aeae9d] leading-[5rem] max-md:leading-10"
                    variants={letterAnimation}
                >
                    <h3>Javascript</h3>
                    <h3>HTML</h3>
                    <h3>CSS</h3>
                    <h3>Figma</h3>
                    <h3>TailwindCSS</h3>
                    <h3>ReactJS</h3>
                    <h3>MySQL</h3>
                    <h3>Docker</h3>
                    <h3>Kubernetes</h3>
                    <h3>Git</h3>
                    <h3>GitLab</h3>
                </motion.div>
            </div>
        </motion.section>
    )
}