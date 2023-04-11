import styles from "@/styles/Self.module.css";
import Image from "next/image";
import ucilogo from "@/public/assets/img/ucilogo.png";
import awardimg from "@/public/assets/icons/award.png";
import ideaimg from "@/public/assets/icons/light-bulb.png";
import teamworkimg from "@/public/assets/icons/teamwork.png";
import hero from "@/public/assets/img/selfhero.jpg";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import React, { useRef } from "react";

export default function Self() {
	const [submitted, setSubmitted] = useState(false);
	const ref = useRef(null);
	const scrollToRef = () => ref.current.scrollIntoView({ behavior: "smooth" });
	const sendEmail = (e) => {
		console.log("subbed");
		e.preventDefault();

		emailjs
			.sendForm(
				"service_ghfzuen",
				"template_2xv951q",
				e.target,
				"U4Me_Bn1wNHxFRKCp"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setSubmitted(true);
	};

	setTimeout(() => {
		setSubmitted(false);
	}, 3000);

	return (
		<div className={styles.main}>
			<div className={styles.hero}>
				<Image
					className={styles.hero_img}
					src={hero}
					alt="Jason Zubiate"
					priority
				/>
			</div>
			<div className={styles.content}>
				<h1 className={styles.h2}>I&apos;m Jason, Welcome To My Digital Home</h1>
				<div className={styles.bio}>
					<div className={styles.bio_text}>
						<p>
							I am a fourth-year informatics major at the University of
							California, Irvine{" "}
							<span className={styles.bold}>
								specializing in human-computer interaction
							</span>
							. Originally a computer science major, I began taking software
							design courses and soon found a passion for{" "}
							<span className={styles.bold}>
								exploring the user-centered design process.
							</span>
						</p>
					</div>
					<div className={styles.bio_image}>
						<Image
							className={styles.uci_img}
							src={ucilogo}
							quality={100}
							priority
							alt="University Of California, Irvine Logo"
						/>
					</div>
				</div>
				<div className={styles.btn_group}>
					<a
						className={`${styles.btn} ${styles["primary-cta"]}`}
						href="/assets/doc/jasonzubiate.pdf"
					>
						Resume
					</a>
					<button
						className={`${styles.btn} ${styles["secondary-cta"]}`}
						onClick={scrollToRef}
					>
						Contact Me
					</button>
				</div>
				<div className={styles.design}>
					<h2 className={styles.h2}>How I Design</h2>
					<div className={styles.design_item}>
						<Image className={styles.icon} src={ideaimg} alt={"Idea"} />
						<div className={styles.design_item_text}>
							<label className={styles.label}>Rigorious Design Thinking</label>
							<p className={styles.p}>
								I incorporate user-centered design principles and inclusivity
								considerations into my design thinking process. By prioritizing
								the needs and perspectives of diverse users, I create solutions
								that are more effective, accessible, and equitable.
							</p>
						</div>
					</div>
					<div className={styles.design_item}>
						<Image
							className={styles.icon}
							src={teamworkimg}
							alt={"Collaboration"}
						/>
						<div className={styles.design_item_text}>
							<label className={styles.label}>Deep Collaboration</label>
							<p className={styles.p}>
								I value the inputs of others and embrace the strengths a team
								can bring towards conquering a problem. By fostering a
								collaborative environment, I am able to incorporate diverse
								perspectives and expertise into my design process, ultimately
								leading to more effective and impactful design solutions.
							</p>
						</div>
					</div>
					<div className={styles.design_item}>
						<Image className={styles.icon} src={awardimg} alt={"Impact"} />
						<div className={styles.design_item_text}>
							<label className={styles.label}>Intention And Impact</label>
							<p className={styles.p}>
								I am motivated by a strong sense of purpose, and I actively seek
								out projects and teams that are working on meaningful
								initiatives.
							</p>
						</div>
					</div>
				</div>
				<div className={styles.experience}>
					<div className={styles.experience_left}>
						<h2 className={styles.h2}>Experience and Education</h2>
						<div>
							<div className={styles.experience_item}>
								<label className={styles.label}>
									Nutripair - UX Design Team Lead
								</label>
								<p className={styles.p}>January 2023 - Present</p>
								<p className={styles.p}>Irvine, California</p>
							</div>
							<div className={styles.experience_item}>
								<label className={styles.label}>
									Nutripair - Frontend Development Intern
								</label>
								<p className={styles.p}>January 2023 - Present</p>
								<p className={styles.p}>Irvine, California</p>
							</div>
							<div className={styles.experience_item}>
								<label className={styles.label}>
									University of California, Irvine
								</label>
								<p className={styles.p}>
									B.S. Informatics: Human Computer Interaction, 2023
								</p>
								<p className={styles.p}>Minor: Computer Science, 2023</p>
								<p className={styles.p}>Irvine, California</p>
							</div>
						</div>
					</div>
					<div className={styles.experience_right}>
						<h2 className={styles.h2}>What I Bring</h2>
						<p className={styles.p}>User Expeirence</p>
						<p className={styles.p}>Design Research</p>
						<p className={styles.p}>User Interface</p>
						<p className={styles.p}>Visual Design</p>
						<p className={styles.p}>Wireframing</p>
						<p className={styles.p}>Prototyping</p>
						<p className={styles.p}>Frontend Development</p>
						<p className={styles.p}>Design Systems</p>
						<p className={styles.p}>Systems Thinking</p>
						<p className={styles.p}>User Flows</p>
						<p className={styles.p}>Journey Mapping</p>
						<p className={styles.p}>Pitch Decks</p>
					</div>
				</div>
				<form className={styles.form} action="" onSubmit={sendEmail} ref={ref}>
					<h2 className={styles.h2}>Get In Touch</h2>
					<input
						className={styles.input}
						type="text"
						placeholder="Full Name"
						name="fullName"
						required
					/>
					<input
						className={styles.input}
						type="email"
						placeholder="E-mail"
						name="email"
						required
					/>
					<input
						className={styles.input}
						type="text"
						placeholder="Message"
						name="message"
						required
					/>
					<button className={`${styles.btn} ${styles["primary-cta"]}`}>
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
