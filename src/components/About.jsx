import React from "react";
import { motion } from "framer-motion";
import { styles } from "@styles";
import { services } from "@constants";
import { fadeIn, slideIn, textVariant } from "@utils/motion";
import { ServiceCard } from "@components";
import { SectionWrapper } from "@hoc";
import { GuitarCanvas } from "@canvas";

const AboutComponent = () => {
	return (
		<div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className=" rounded-[20px] flex-1">
				<div className=" p-8 rounded-[20px]">
					<p className={styles.sectionSubText}>Introduction</p>
					<h2 className={styles.sectionHeadText}>About Me</h2>

					<p className=" text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]">
						I am currently a student at the National Technical University of Ukraine &quot;Igor
						Sikorsky Kyiv Polytechnic Institute&quot; (KPI), where I am pursuing a degree in
						Information Systems and Technologies under the Faculty of Informatics and computer engeneering. This academic path allows me to explore the fascinating world of tech,
						deepening my knowledge in programming. <br/>Outside
						of my studies, I am passionate about music. I play the guitar and volunteer with my
						band, combining my love for creativity and teamwork. These activities offer a perfect
						balance to my technical pursuits, allowing me to express myself and contribute to my
						country in a meaningful way.
					</p>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto h-[350px]">
				<GuitarCanvas />
			</motion.div>
		</div>
	);
};

const About = SectionWrapper(AboutComponent, "about");
export default About;
