import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import InfoCard from "@/components/common/InfoCard";
import awhero from "@/public/assets/img/awhero.png";
import userflowimg from "@/public/assets/img/awuserflow.png";
import productprospectiveimg from "@/public/assets/img/awproductprospective.png";
import surveyresultsimg from "@/public/assets/img/awsurveyresults.png";
import persona1 from "@/public/assets/img/awpersona1.png";
import persona2 from "@/public/assets/img/awpersona2.png";
import persona3 from "@/public/assets/img/awpersona3.png";
import display1 from "@/public/assets/img/awdisplay1.png";
import display2 from "@/public/assets/img/awdisplay2.png";
import display3 from "@/public/assets/img/awdisplay3.png";
import display4 from "@/public/assets/img/awdisplay4.png";
import poppinsimg from "@/public/assets/img/poppinsstyle.png";
import awcompanalysis from "@/public/assets/img/awcompanalysis.png";
import designprocess from "@/public/assets/img/designprocess.png";

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "json/work.json");
	const fileContents = await fsPromises.readFile(filePath, "utf8");
	const data = JSON.parse(fileContents);
	const anteaterwellness = data.work.find(
		(project) => project.url === "anteaterwellness"
	);
	return {
		props: {
			project: anteaterwellness,
		},
	};
}

export default function anteaterwellness({ project }) {
	const heroColorStyle = { backgroundColor: "white" };
	return (
		<div>
			<div className="project-hero-img" style={heroColorStyle}>
				<Image
					className="img"
					src={awhero}
					alt={"Wellness App Mock Ups"}
					priority
				/>
			</div>
			<ProjectHeader project={project} />
			<div className="project-container">
				{/* OVERVIEW SECTION */}
				<div className="project-section">
					<h2 className="project-h2">Overview</h2>
					<label className="project-label-large">Design Process</label>
					<div className="label-card-large">
						<label className="label-card-large-label">Design Question</label>
						<p className="label-card-large-p">
							What strategies can we use to effectively promote on-campus health
							events and improve personal wellness for undergraduate students,
							while optimizing the use of resources at the wellness center?
						</p>
					</div>
					<Image
						className="project-img-full"
						src={designprocess}
						alt={"Product Prospective"}
						quality={100}
					/>
				</div>

				{/* USER RESEARCH SECTION */}
				<div className="project-section">
					<h2 className="project-h2">User Research</h2>
					<label className="project-label-large">Clarifying the Problem</label>
					<div className="project-subsection">
						<h3 className="project-h3">Stakeholder Elicitation</h3>
						<p className="project-p">
							As part of our mobile app development project, our team
							collaborated with stakeholders from the UCI Health and Wellness
							Center over a four-week period.
						</p>
						<p className="project-p">
							During the first stage of our collaboration, we conducted
							elicitation sessions with the center&apos;s staff to gather information
							on the goals and requirements of the Anteater Wellness
							Application.
						</p>
						<p className="project-p">
							Although we were not provided with prior research conducted by the
							center due to confidentiality concerns, we used the insights
							gained from these sessions to develop a comprehensive product
							perspective. This included identifying product functions, user
							characteristics, general constraints, assumptions and
							dependencies, and apportioning of requirements.
						</p>
						<Image
							className="project-img-full"
							src={productprospectiveimg}
							alt={"Product Prospective"}
							quality={100}
						/>
						<p className="project-p">
							In addition to these findings, the wellness center staff provided
							us with requests for both functional and non-functional
							requirements for the application. Specifically, the Anteater
							Wellness Application was designed to foster continuous progress in
							the mental health and overall wellbeing of UCI students.
						</p>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">User Identification</h3>
						<label className="project-label-18">UCI Students</label>
						<p className="project-p">
							The primary users of the Anteater Wellness application are UCI
							students, both graduate and undergraduate, who are currently
							enrolled at the university. The application&apos;s functionality is
							designed specifically to improve the health and well-being of
							these students. It provides a valuable resource for individuals
							who seek to enhance their physical, emotional, intellectual,
							financial, social, and spiritual health. The Anteater Wellness
							application offers personalized wellness assessments, goal-setting
							tools, and access to wellness-related events, making it a
							comprehensive resource for students committed to improving their
							overall health and well-being.
						</p>
						<label className="project-label-18">
							The Center for Student Wellness and Health Promotion
						</label>
						<p className="project-p">
							The UCI Wellness Center staff is responsible for posting
							UCI-affiliated wellness events on the app and encouraging student
							participation. They may also interact with student users by
							commenting on posts and providing feedback on their wellness
							progress. In addition, staff members may use the app to connect
							with students who may require further assistance or support in
							enhancing their wellness. The system generates reports on user
							engagement, goal completion rates, and other relevant metrics to
							assist staff members in improving the effectiveness of the app in
							promoting student wellness.
						</p>
						<label className="project-label-18">
							UCI Office of Information Technology
						</label>
						<p className="project-p">
							The UCI Office of Information Technology is responsible for
							maintaining the technical infrastructure and ensuring that the
							Anteater Wellness application is functioning correctly. Their
							responsibilities may include server maintenance, database
							management, troubleshooting technical issues, and updating the
							application to ensure compatibility with new devices and operating
							systems.
						</p>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Surveying Students</h3>
						<p className="project-p">
							To gather a better perspective on the scope of the issues, I sent
							out surveys to students attending the University of California,
							Irvine. The main goal of these survey was to understand the health
							& wellness status of students across the campus as well as their
							awareness of health-related events hosted by the health and
							wellness center.
						</p>
						<p className="project-p">
							Understanding the application requirements, identification of the
							apps users was essential to further design the features and
							functionality of the application as a whole. This was identified
							within our software requirements specification document and
							further mapped within a domain model.
						</p>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Constructing the Survey</h3>
						<p className="project-p">
							After gathering a sample of students that met the user
							characteristics, I sent them a brief 12-question survey to lay the
							foundation of my knowledge of the problem. Some of these questions
							included:
						</p>
						<div className="row">
							<InfoCard
								content={
									"Have you ever attended a health-related event hosted by the UCI Wellness Center?"
								}
							/>
							<InfoCard
								content={
									"Are you aware of any upcoming health-related events hosted by the UCI Wellness Center?"
								}
							/>
							<InfoCard
								content={"Do you feel like you have a good work-life balance?"}
							/>
						</div>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Survey Results</h3>
						<p className="project-p">
							With a sample size of 24, the survey revealed highly insightful
							information of health & wellness and campus events.
						</p>
						<Image
							className="project-img-full"
							src={surveyresultsimg}
							alt={"Survey Results"}
							quality={100}
						/>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Personas</h3>
						<p className="project-p">
							Based on my surveys and elicitation sessions, I visualized the
							relationship between students&apos; experiences with health and
							wellness and the goals of the Wellness Center. To ensure
							inclusivity for all students, I created a persona for each of the
							main student types I encounter
						</p>
						<Image
							className="project-img-full"
							src={persona1}
							alt={"Survey Results"}
						/>
						<Image
							className="project-img-full"
							src={persona2}
							alt={"Survey Results"}
						/>
						<Image
							className="project-img-full"
							src={persona3}
							alt={"Survey Results"}
						/>
					</div>
				</div>
				{/* BRAINSTORMING SECTION */}
				<div className="project-section">
					<h2 className="project-h2">Brainstorming</h2>
					<label className="project-label-large">Filling the Market Cap</label>
					<div className="project-subsection">
						<h3 className="project-h3">Competitive Analysis</h3>
						<p className="project-p">
							Initially, I conducted market research to identify similar
							applications and their feature sets. Since this particular
							application focuses on improving students&apos; mental health through
							event scheduling and health tracking, I specifically looked at the
							main features of mental health, events, and goal tracking apps.
						</p>
						<Image
							className="project-img-full"
							src={awcompanalysis}
							alt={"Competitive Analysis"}
							quality={100}
						/>
						<p className="project-p">
							Studying these key areas, I gained a better understanding of the
							functionalities and design patterns that have proven to be
							successful in similar apps. I realized the application would have
							to incorporate some of these distinct features to make is
							practical for the students to use.
						</p>
						<p className="project-p">
							The competitive analysis revealed that the Anteater Wellness app
							should incentivize wellness categories by tracking the status of
							each with a virtual indicator. Progression through the categories
							could be achieved by attending events listed by the wellness
							center, with each event associated with a specific category or set
							of categories.
						</p>
						<p className="project-p">
							Other notable findings from the competitive analysis suggested the
							idea of forming a network or community of students who share
							similar health interests. I believe that providing inclusion
							within software is crucial and have identified an entry point to
							make this apparent in the application.
						</p>
					</div>

					<div className="project-subsection">
						<h3 className="project-h3">Deriving Design Goals</h3>
						<p className="project-p">
							Based on the initial elicitation sessions and surveys with the
							Wellness Center staff, our team drafted a goal model that
							identified preliminary goals of the application: foster
							relationships between students, encourage students to achieve
							personal wellness goals, connect the Wellness Center staff with
							students, increase Wellness Center event participation, and keep
							students information secure.
						</p>
						<p className="project-p">
							After identifying the market gap, I generated goals for the
							product. When crafting these goals, I prioritized the biggest
							concern for students: creating and maintaining health awareness in
							a way that actively unites and uplifts their wellness goals.
						</p>
						<div className="row">
							<InfoCard
								content={
									"Display on-campus events for students to register for, and attend to increase their wellness wheel."
								}
							/>
							<InfoCard
								content={
									"Provide a sense of support with the Wellness Center and through virtual communities within the app."
								}
							/>
							<InfoCard
								content={
									"Enable students to complete wellness goals of their interest."
								}
							/>
						</div>
						<p className="project-p">
							Studying these key areas, I gained a better understanding of the
							functionalities and design patterns that have proven to be
							successful in similar apps. I realized the application would have
							to incorporate some of these distinct features to make is
							practical for the students to use.
						</p>
					</div>
				</div>

				{/* WIREFRAMING SECTION */}
				<div className="project-section">
					<h2 className="project-h2">Wireframing</h2>
					<label className="project-label-large">Mapping the Journey</label>
					<h3 className="project-h3">User Flow</h3>
					<p className="project-p">
						With the design goals outlined, I began sketching basic user flows
						for the main features of the application: logging into the
						application for the first time, creating a wellness event,
						registering for a wellness event, suggesting a goal, and adding a
						goal to your goal list.
					</p>
					<p className="project-p">
						When drafting user flows, I often choose between flow charts and
						wireframes to display the tasks the user flows. For this scenario, I
						aimed to create an information foundation to understand the events
						in each process without being preoccupied with minor details. For a
						project with fewer user flows to consider, I would opt to use
						wireframes to visualize the process.
					</p>
					<Image
						className="project-img-full"
						src={userflowimg}
						alt={"User Flow"}
					/>
					<p className="project-p">
						The software requirements and specification documentation includes a
						dedicated section for usage models that expands upon all use case
						scenarios, diagrams, and descriptions. Each use case description
						considers actors, preconditions, end conditions, triggers,
						basic/alternative/exception flows, and relationships to other use
						cases.
					</p>
				</div>

				{/* PROTOTYPING SECTION */}
				<div className="project-section">
					<h2 className="project-h2">Prototyping</h2>
					<label className="project-label-large">
						Crafting The Full Experience
					</label>
					<div className="project-subsection">
						<h3 className="project-h3">Stylistic Decisions</h3>
						<p className="project-p">
							When deciding on the style of the UI, I carefully considered the
							product environment that this application would live in. It was
							obvious this product would need to fit within UCI’s traditional
							colors of blue and yellow. A light shade of blue was chosen as the
							primary accent color to create a sense of trust and calmness,
							while a golden yellow was chosen as a secondary accent to add
							vibrancy and warmth. Blue is easy on the eyes and won&apos;t cause any
							unnecessary strain, making it an ideal choice for long periods of
							use. By using blue and yellow as accent colors, the application
							will feel familiar and welcoming to students who are already
							familiar with the university&apos;s colors.
						</p>
						<p className="project-p">
							To complement the color palette, the font Poppins was selected for
							its modern and clean aesthetic. Poppins is versatile and easy to
							read on various devices, making it an excellent choice for
							displaying different types of information. The font&apos;s fresh and
							contemporary feel aligns with the application&apos;s overall objective
							of promoting health and wellness among college students.
							Additionally, the use of Poppins creates consistency throughout
							the application and helps to establish a recognizable visual
							identity for the brand.
						</p>
						<Image
							className="project-img-full"
							src={poppinsimg}
							alt={"Styling"}
							quality={100}
						/>
						<h3 className="project-h3">Displays</h3>
						<div className="display-container">
							<Image
								className="project-img-display"
								src={display1}
								alt={"Product Prospective"}
								quality={100}
							/>
							<div className="display-description">
								<label className="project-label-18">Events Page</label>
								<p className="project-p">
									The events page showcases all events available to student
									users. Students can easily access this page to view and add
									featured events to their registered events list, and receive
									updates and notifications regarding those events. The events
									posted by the Wellness Center are uniquely categorized to
									align with students&apos; wellness needs and goals, and are
									designed to help them make progress on their wellness wheel.
								</p>
							</div>
						</div>
						<div className="display-container">
							<Image
								className="project-img-display"
								src={display2}
								alt={"Product Prospective"}
								quality={100}
							/>
							<div className="display-description">
								<label className="project-label-18">Community Page</label>
								<p className="project-p">
									The community page functions as a central hub for students to
									discover and join communities that share similar interests.
									Each community is associated with a primary wellness category
									that the Wellness Center promotes by providing additional
									resources and related events. This helps to further support
									students&apos; holistic wellness journeys by connecting them with
									like-minded peers and relevant resources.
								</p>
							</div>
						</div>
						<div className="display-container">
							<Image
								className="project-img-display"
								src={display3}
								alt={"Product Prospective"}
								quality={100}
							/>
							<div className="display-description">
								<label className="project-label-18">Goals Page</label>
								<p className="project-p">
									The goals page offers a variety of suggested goals for
									students to schedule and accomplish. In addition, students
									have the flexibility to create their own goals and categorize
									them based on the various dimensions of their wellness wheel.
									The Wellness Center provides personalized goal suggestions
									based on the student&apos;s current status in their wellness
									journey.
								</p>
							</div>
						</div>
						<div className="display-container">
							<Image
								className="project-img-display"
								src={display4}
								alt={"Product Prospective"}
								quality={100}
							/>
							<div className="display-description">
								<label className="project-label-18">Profile Page</label>
								<p className="project-p">
									Every user on the platform has a personalized profile page
									that displays their wellness wheel, which is a composite of
									various health metrics. This unique feature provides students
									with an indication of their overall wellness status and helps
									them identify areas that may require attention.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* REFLECTION SECTION */}
				<div className="project-section">
					<h2 className="project-h2">Reflection</h2>
					<label className="project-label-large">Closing Thoughts</label>
					<div className="project-subsection">
						<h3 className="project-h3">
							Strong User Connections Produces Good Design
						</h3>
						<p className="project-p">
							I found great satisfaction in designing this health and wellness
							product for a community that I highly value. Throughout the design
							process, I prioritized the needs of the users, keeping a
							user-centered approach at the forefront of all design decisions.
							By closely considering user pain points and personas, I was able
							to create a product that is tailored to the needs of the students
							who will use it.
						</p>
						<p className="project-p">
							Improving health and wellness is an important personal goal of
							mine, and I was able to channel this passion into the design
							process. While no design is perfect, I am proud to have solved the
							design problem in a way that will provide tangible benefits to the
							user community. I was able to create a product that is both
							functional and effective.
						</p>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Maintaining The Scope</h3>
						<p className="project-p">
							Through elicitation sessions held over the first four weeks, it
							became clear that catering to every stakeholder request was not
							feasible. My field notes quickly became a long list of feature
							descriptions, which seemed overwhelming at first. However, after
							conducting a survey with UCI students, I was able to identify the
							most feasible features that could be completed within the given
							timeline.
						</p>
						<p className="project-p">
							I found this challenge to be particularly valuable, as it provided
							me with a greater understanding of what is realistically
							achievable within a given timeframe, and how to prioritize quality
							deliverables. By focusing on the most impactful features, I was
							able to achieve a balance between the project timeline and the
							final deliverables. Overall, this experience has enhanced my
							ability to manage stakeholder expectations, prioritize
							deliverables and make decisions that result in a successful
							outcome.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
