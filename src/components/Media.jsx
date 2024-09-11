import React from "react";
import { motion } from "framer-motion";
import { styles } from "@styles";
import { media } from "@constants";
import { fadeIn, textVariant } from "@utils/motion";
import { MediaCard } from "@components";
import { SectionWrapper } from "@hoc";

const MediaComponent = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>More ways to get in touch</p>
				<h2 className={styles.sectionHeadText}>My Social Media</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				Here are some of my social media links.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{media.map((item, index) => (
					<MediaCard
						key={item.title}
						index={index}
						title={item.title}
						icon={item.icon}
						link={item.media_link}
					/>
				))}
			</div>
		</>
	);
};

const Media = SectionWrapper(MediaComponent, "");
export default Media;
