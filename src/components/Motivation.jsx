import React from "react";
import { motion } from "framer-motion";
import { styles } from "@styles";
import { services } from "@constants";
import { fadeIn, textVariant } from "@utils/motion";
import { ServiceCard } from "@components";
import { SectionWrapper } from "@hoc";

const MotivationComponent = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>For Employers</p>
				<h2 className={styles.sectionHeadText}>Why You Want To Hire Me</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				I&apos;m a dynamic and results-driven frontend developer with strong skills in JavaScript,
				React, React Native, and TypeScript. My expertise in UI/UX and backend technologies allows
				me to build impactful, cross-platform solutions. I have experience managing and releasing
				apps, along with implementing UI animations. I enjoy solving complex business problems and
				have a passion for continuous learning and growth. I&apos;m eager to join a large project
				development team to further develop my skills and embrace modern commercial development
				practices.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						title={service.title}
						icon={service.icon}
					/>
				))}
			</div>
		</>
	);
};

const Motivation = SectionWrapper(MotivationComponent, "motivation");
export default Motivation;
