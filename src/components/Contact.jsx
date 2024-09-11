import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "@styles";
import { EarthCanvas } from "@canvas";
import { SectionWrapper } from "@hoc";
import { slideIn } from "@utils/motion";

const ContactComponent = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const [emailError, setEmailError] = useState("");
	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		setEmailError("");
	};

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateEmail(form.email)) {
			setEmailError("Please enter a valid email address.");
			return;
		}

		setLoading(true);

		emailjs
			.send(
				"service_code",
				"template_code",
				{
					from_name: form.name,
					to_name: "Denys Zub",
					from_email: form.email,
					to_email: "zub.deniss@gmail.com",
					message: form.message,
				},
				"your code",
			)
			.then(() => {
				setLoading(false);
				alert("Thank you. I will get back to you as soon as possible.");

				setForm({
					name: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				setLoading(false);
				console.error(error);
				alert("Something went wrong. Try again later.");
			});
	};

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="green-pink-gradient p-[1px] rounded-[20px] shadow-card flex-[0.75]">
				<div className="bg-tertiary p-8 rounded-[20px]">
					<p className={styles.sectionSubText}>Get in touch</p>
					<h3 className={styles.sectionHeadText}>Contact Me</h3>

					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8">
						<label className="flex flex-col">
							<span className="text-white font-medium ml-4 mb-4">Your Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="Type your name"
								className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<label className="flex flex-col">
							<span className="text-white font-medium ml-4 mb-4">Your Email</span>
							{emailError && <span className="text-red-500 text-sm mb-2 ml-4">{emailError}</span>}
							<input
								type="text"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="Type your email"
								className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<label className="flex flex-col">
							<span className="text-white font-medium ml-4 mb-4">Your Message</span>
							<textarea
								rows="7"
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="Type your message"
								className="bg-black-100 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<button
							type="submit"
							className="green-pink-gradient py-3 px-8 outline-none w-fit text-primary font-bold shadow-md shadow-primary rounded-xl text-[24px] tracking-wider self-center">
							{loading ? "Sending..." : "Send"}
						</button>
					</form>
				</div>
			</motion.div>

			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto h-[350px]">
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

const Contact = SectionWrapper(ContactComponent, "contact");
export default Contact;
