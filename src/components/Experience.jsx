import React from "react";
import PropTypes from "prop-types";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "@styles";
import { fadeIn, textVariant } from "@utils/motion";
import { experiences } from "@constants";
import { SectionWrapper } from "@hoc";

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{ background: "#1d1836", color: "#fff" }}
			contentArrowStyle={{ borderRight: "7px solid #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={experience.icon}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}>
			<div>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
			</div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
		</VerticalTimelineElement>
	);
};
ExperienceCard.propTypes = {
	experience: PropTypes.shape({
		title: PropTypes.string.isRequired,
		company_name: PropTypes.string.isRequired,
		icon: PropTypes.string.isRequired,
		iconBg: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		points: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};

const ExpComponent = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				My portfolio may not be extensive yet, but perhaps your company will be the next step in my developer journey.
			</motion.p>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};
const Experience = SectionWrapper(ExpComponent, "work");
export default Experience;
