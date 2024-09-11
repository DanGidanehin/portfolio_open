import React from "react";
import PropTypes from "prop-types";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@utils/motion";

const MediaCard = ({ index, title, icon, link }) => {

	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer"
					onClick={() => window.open(link, "_blank", "noopener noreferrer")}>
					<img
						src={icon}
						alt={title}
						className="w-28 h-28 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

MediaCard.propTypes = {
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default MediaCard;
