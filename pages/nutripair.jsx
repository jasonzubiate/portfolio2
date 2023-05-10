import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import nhero from "@/public/assets/img/nutripair.png";
import smartlook from "@/public/assets/img/smartlook.png";
import nutriform from "@/public/assets/img/nutriform.png";
import researchmethods from "@/public/assets/img/researchmethods.png";
import nutritask1 from "@/public/assets/img/nutritask1.png";
import nutritask2 from "@/public/assets/img/nutritask2.png";
import nutritask3 from "@/public/assets/img/nutritask3.png";
import nutrimindmap from "@/public/assets/img/nutrimindmap.png";
import nutrihome from "@/public/assets/img/nutrihome.png";
import nutrirestaurant from "@/public/assets/img/nutrirestaurant.png";
import nutrimenuitem from "@/public/assets/img/nutrimenuitem.png";
import nutricompanalysis from "@/public/assets/img/nutricompanalysis.png";
import ubereatsmenu from "@/public/assets/img/ubereatsmenu.png";
import mcdonaldsdeals from "@/public/assets/img/mcdonaldsdeals.png";
import nutripaircaurosel from "@/public/assets/img/nutripaircaurosel.png";
import { useState } from "react";

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "json/work.json");
	const fileContents = await fsPromises.readFile(filePath, "utf8");
	const data = JSON.parse(fileContents);
	const nutripair = data.work.find((project) => project.url === "nutripair");
	return {
		props: {
			project: nutripair,
		},
	};
}

export default function Nutripair({ project }) {
	const [view, setView] = useState(false);
	const heroColorStyle = { backgroundColor: "white" };
	return (
		<div>
			<div className="project-hero-img" style={heroColorStyle}>
				<Image className="img" src={nhero} alt={"Nutripair Logo"} priority />
			</div>
			<ProjectHeader project={project} view={view} setView={setView} />
			<div className="project-container">
				{view && (
					<>
						<div className="project-section">
							<h2 className="project-h2">Overview</h2>
							<label className="project-label-large">
								Nutritional Health At Glance
							</label>
							<p className="project-p">
								Nutripair is a nutritional health management startup located in
								Irvine, California. The company is dedicated to developing a
								mobile application tailored to individuals with specific dietary
								restrictions. The application offers comprehensive nutritional
								and allergen information for menu items available at prominent
								food chains and esteemed local restaurants across the Southern
								California area.
							</p>
							<div className="row">
								<Image
									className="project-img-display center"
									src={nutrihome}
									alt={"Nutripair App"}
									quality={100}
									priority
								/>
								<Image
									className="project-img-display center"
									src={nutrirestaurant}
									alt={"Nutripair App"}
									quality={100}
									priority
								/>
								<Image
									className="project-img-display center"
									src={nutrimenuitem}
									alt={"Nutripair App"}
									quality={100}
									priority
								/>
							</div>
							<p className="project-p">
								The team was preparing for the alpha release of their mobile
								application, and I had the privilege of leading the user
								experience design team.{" "}
								<span className="highlight">
									My main responsibility was to develop a comprehensive
									usability testing plan and oversee the iterative improvements
									to the application
								</span>{" "}
								based on feedback from our group of dedicated user testers. This
								marked the first time the general public would get a glimpse of
								the application, making it crucial for us to capture and analyze
								users&apos; initial impressions.
							</p>
						</div>
						<div className="project-section">
							<h2 className="project-h2">Usability Testing Design Plan</h2>
							<label className="project-label-large">
								Building a Better Experience
							</label>
							<div className="project-subsection">
								<h3 className="project-h3">Identifying Research Goals</h3>
								<p className="project-p">
									The research goals for the usability testing plan were focused
									on assessing how easy the app was to use, whether it was
									effective at recommending safe fast food options, and how well
									it handled searches and identified safe menu items. The plan
									also looked at how the app catered to users with multiple
									dietary restrictions, its accessibility for users with
									different abilities, and how well it recovered from errors.
								</p>
								<p className="project-p">
									<span className="bold">Usability: </span>Assessing the ease of
									use and overall user experience of the application, including
									navigation, layout, and functionality, especially for
									searching options based on food intolerances/dietary
									restrictions.
								</p>
								<p className="project-p">
									<span className="bold">Effectiveness: </span>Determining if
									the recommended fast food options are appropriate for the
									user&apos;s specified dietary restrictions and if the
									recommendations are accurate.
								</p>
								<p className="project-p">
									<span className="bold">Searchability: </span>Assessing the
									effectiveness and accuracy of the search function for finding
									restaurants and menu items that meet the user&apos;s dietary
									restrictions.
								</p>
								<p className="project-p">
									<span className="bold">Identification: </span>Evaluating the
									ability of the application to clearly identify which menu
									items are safe for users.
								</p>

								<p className="project-p">
									<span className="bold">Multiple Dietary Restrictions</span>
									Testing how well the application can cater to users with
									multiple dietary restrictions and search for restaurants that
									offer a wide range of options that are safe for them to eat.
								</p>
								<p className="project-p">
									<span className="bold">Accessibility: </span>Evaluating the
									accessibility of the application for users with different
									abilities, including those with visual or auditory
									impairments.
								</p>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Determining Research Methods</h3>
								<p className="project-p">
									To gain meaningful insights into the needs of our users and to
									improve our Nutripair mobile application, we will be utilizing
									a range of research methods. These include usability testing,
									observations, focus groups, interviews, A/B testing, and
									surveys. By combining these methods, we aim to collect user
									feedback through different channels and identify areas where
									the application can be improved. By implementing the insights
									gained from this research, we strive to enhance the overall
									user experience of the mobile application, ensuring that it
									caters effectively to our users&apos; dietary needs and
									restrictions.
								</p>
								<Image
									className="img"
									src={researchmethods}
									alt={"Research Methods"}
								/>
								<br />
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Testing Agenda</h3>
								<p className="project-p">
									For our first round of usability testing, we split our 50
									users into groups led by members of our UX team.{" "}
									<span className="highlight">
										Each group was assigned three tasks that aligned with
										specific design goals.
									</span>{" "}
									We recorded the users as they interacted with the application
									using Smartlook Analytics. After completing each task,{" "}
									<span className="highlight">
										we asked the testers to fill out a Google form with four
										questions, two of which were related to the task at hand and
										the other two more general questions about their overall
										experience.
									</span>{" "}
									This approach helped us collect targeted feedback on each task
									and gain broader insights into the users&apos; experience as a
									whole.
								</p>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Usability Tasks</h3>
								<Image
									className="img center"
									src={nutritask1}
									alt={"Feedback Form"}
									// width={800}
								/>
								<br />
								<Image
									className="img center"
									src={nutritask2}
									alt={"Feedback Form"}
									// width={800}
								/>
								<br />
								<Image
									className="img center"
									src={nutritask3}
									alt={"Feedback Form"}
									// width={800}
								/>
								<br />
								<p className="project-p">
									The usability testing session yielded highly positive results,
									with the majority of users successfully accomplishing all
									assigned tasks.{" "}
									<span className="highlight">
										However, a notable challenge encountered during the session
										was the slight delay in the smarlook session recordings.
									</span>{" "}
									The recordings were approximately one minute behind the actual
									user interactions, which hindered our ability to live-monitor
									the users as they performed their tasks. As a result,{" "}
									<span className="highlight">
										our team had to review the recorded sessions retrospectively
									</span>{" "}
									in order to observe the users&apos; initial experiences with
									the app.
								</p>
							</div>

							<div className="project-subsection">
								<h3 className="project-h3">Insights With Smartlook</h3>
								<p className="project-p">
									During the testing session we tracked user interactions with
									Smartlook. This provided our team with real-time session
									replays, heatmaps, and funnels to help identify areas for
									improvement and optimize user experience.
								</p>
								<Image
									className="img"
									src={smartlook}
									alt={"Smartlook Analytics"}
								/>
							</div>
						</div>
						<div className="project-section">
							<h2 className="project-h2">One On One Feedback</h2>
							<label className="project-label-large">
								Hearing From Our Testers
							</label>
							<div className="project-subsection">
								<h3 className="project-h3">Form Feeback</h3>
								<p className="project-p">
									As previously mentioned,{" "}
									<span className="highlight">
										after each usability task, we administered a Google form to
										collect feedback from the users.
									</span>
									This form consisted of two task-related questions and two
									general usability questions, which were included in all the
									forms. By incorporating these questions into the forms, we
									aimed to gather valuable insights about the users&apos;
									experiences with specific tasks as well as their overall
									impressions of the usability of the application.
								</p>
								<Image
									className="img center"
									src={nutriform}
									alt={"Feedback Form"}
									width={700}
								/>
								<br />
								<p className="project-p">
									Our Google Forms provided us with some of the most valuable
									feedback of the entire testing cohort. Those who left detailed
									comments on the form were asked to further discuss their
									comments within the testing group. This allowed us to gain a
									better understanding of the critiques as well as give me the
									opportunity to ask the testers any follow up questions based
									on their feedback.
								</p>
								<q className="quotes center">
									One recommendation would be to{" "}
									<span className="highlight2">
										use different colors to separate the macro breakdown section
									</span>{" "}
									that uses green with the green on the food allergen.
								</q>
								<br />
								<br />
								<q className="quotes center">
									It was{" "}
									<span className="highlight2">
										not intuitively clear how the Details section is different
										from the Nutrition section.
									</span>{" "}
									Both pages display nutritional information such as calories,
									protein, carbs, and fats.
								</q>
								<br />
								<br />
								<q className="quotes center">
									If a users is able to search or filter menu items by category
									it would be useful.{" "}
									<span className="highlight2">
										It was a bit difficult to scroll through entire the menu
										list
									</span>{" "}
									to find the item.
								</q>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Mapping User Feedback</h3>
								<Image className="img" src={nutrimindmap} alt={"Miro Board"} />
								<br />
								<p className="project-p">
									Our team thoroughly documented all the feedback received from
									our usability testing session on a Miro board and identified
									three primary areas of concern within the application. We
									began organizing the feeback into categories related to either
									the pages/components they were occuring on or an apporpriate
									usability experience.
								</p>
								<p className="project-p">
									<span className="highlight">
										It became evident that the menu item page of our application
										received the highest amount of feedback, indicating
										significant usability issues.
									</span>{" "}
									The page suffered from poor visuals, which not only posed
									accessibility challenges but also contributed to user
									confusion. Additionally, the presence of two subpages that
									shared similar information further added to user perplexity.{" "}
								</p>
								<p className="project-p">
									<span className="highlight">
										Additionaly, the navigation experience within our restaurant
										menu pages proved to be slow and cumbersome.
									</span>{" "}
									Users were compelled to scroll through the entire menu, which
									proved to be time-consuming, especially for menus with a large
									number of items. Lastly, there was a clear demand for expanded
									filter options beyond the current selection of 8 allergens.
									Based on these findings, we formulated three key deliverables
									to be communicated to the frontend team for implementation in
									the upcoming major application update:
								</p>
								<br />
								<div className="bullet center">
									<div className="bullet-point">1</div>
									<p className="bullet-text">
										<span className="bold">Revamped Menu Item Page:</span>{" "}
										Addressing the issues identified, we proposed a redesign of
										the menu item page to enhance its visual appeal and improve
										accessibility. To alleviate user confusion from the presence
										of two subpages with similar information, we consolidated
										these subpages into a single, coherent layout.
									</p>
								</div>
								<div className="bullet center">
									<div className="bullet-point">2</div>
									<p className="bullet-text">
										<span className="bold">Streamlined Menu Navigation:</span>{" "}
										To mitigate the slow navigation experience within the
										restaurant menu pages, we recommend implementing an
										efficient menu navigation mechanism. This could include
										options such as category filters, allowing users to quickly
										locate desired menu sections without the need for extensive
										scrolling.
									</p>
								</div>
								<div className="bullet center">
									<div className="bullet-point">3</div>
									<p className="bullet-text">
										<span className="bold">Expanded Filter Options:</span> To
										enhance the search experience for menu items, it has been
										agreed upon to expand the number of search options to
										include a wider range of nutritional factors.
									</p>
								</div>
							</div>
						</div>
						<div className="project-section">
							<h2 className="project-h2">Design Iteration</h2>
							<label className="project-label-large">
								Transforming Feedback into Experiences
							</label>
							<div className="project-subsection">
								<div className="project-h3">Menu Item Page</div>
								<p className="project-p">
									To improve the menu item page, we focused on enhancing the
									visualization of the macro breakdown. Additionally, we decided
									to consolidate the sub pages information into one main page.
									This would include combining the nutrition facts with the
									allergen information. By combining this information, users
									will have a clearer and more comprehensive view of the
									nutritional content, including the macro breakdown, directly
									on the menu item page. This simplification ensures that users
									can make informed dietary choices without the need to navigate
									to a separate page.
								</p>
								<p className="project-p">
									As part of my research, I performed a competitive analysis of
									menu item page designs sourced from Dribbble. Specifically, I
									focused on designs that showcased visually compelling methods
									for presenting nutritional information, while also addressing
									the challenge of effectively organizing the combined
									information from two subpages. Given the expanded information
									we need to display, it was crucial to consider the hierarchy
									and layout of this information to ensure clarity and ease of
									understanding.{" "}
									<span className="highlight">
										I gathered inspiration and insights to guide the development
										of our enhanced menu item page, emphasizing strong visuals
										and an intuitive presentation of the nutritional details.
									</span>
								</p>
								<Image
									className="img center"
									src={nutricompanalysis}
									alt={"Competitive Analysis"}
								/>
								<br />
								<p className="project-p">
									In addition to the competitive analysis, I took a detailed
									approach by identifying the most effective components from
									each design, with a specific focus on color coordination,
									iconography, as well as strengths and weaknesses. This
									exercise enabled me to effectively communicate to my team the
									specific elements they should incorporate into their mock-ups
									for the enhanced menu item page.
								</p>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Menu Navigation</h3>
								<p className="project-p">
									Given the high demand for faster searching on the restaurant
									page when viewing menu items,{" "}
									<span className="highlight">
										I conducted research on restaurant menus and food delivery
										apps to explore how they handle navigation within long
										menus.
									</span>{" "}
									This aimed to identify effective strategies used in the
									industry to enhance the browsing experience. By studying these
									platforms, I gained valuable insights into techniques such as
									intelligent filtering, intuitive categorization, and efficient
									menu organization. These findings assisted in devising
									solutions to optimize the search and navigation process within
									our application&apos;s restaurant page, ensuring users could
									easily navigate through extensive menus and quickly find the
									items they desired.
								</p>
								<Image
									className="project-img-display center"
									src={ubereatsmenu}
									alt={"Uber Eats Menu"}
									width={400}
								/>
								<br />
								<br />
								<Image
									className="project-img-display center"
									src={mcdonaldsdeals}
									alt={"McDonalds"}
									width={400}
								/>
								<br />
								<br />
								<p className="project-p">
									Based on my research,{" "}
									<span className="highlight">
										I decided to implement a carousel of intuitive menu
										categories.
									</span>{" "}
									This feature allowed users to click on a category within the
									carousel, and the page would automatically scroll to the
									corresponding section of the menu. The carousel itself
									visually updated as users scrolled through the menu, providing
									a seamless and visually engaging browsing experience. This
									solution greatly simplified menu navigation, improved
									usability, and made it easier for users to find their desired
									menu sections.
								</p>
								<Image
									className="project-img-display center"
									src={nutripaircaurosel}
									alt={"Nutripair App"}
									width={400}
								/>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">Expanded Filter Options</h3>
								<p className="project-p">
									In response to the users&apos; request for additional
									filtering options, our team conducted thorough research on
									various factors related to managing nutritional health.{" "}
									<span className="highlight">
										We identified several key considerations to expand our
										filtering capabilities. These include gluten, lactose, added
										sugars, high sodium, GMOs, organic, vegan or vegetarian
										options, low-FODMAP, specific dietary plans, and custom
										filters.
									</span>{" "}
									By incorporating these factors into our filtering options, we
									aim to provide users with a more comprehensive and
									customizable experience, allowing them to align their menu
									choices with their specific nutritional needs and preferences.
								</p>
								<p className="project-p">
									Our backend team was working on the implementation of the
									requested filters, which will be included in a future update.
									These filters will be part of a comprehensive filter modal
									redesign aimed at providing users with a more intuitive and
									user-friendly interface for selecting and applying their
									desired filters. This redesign will ensure that users can
									easily navigate and customize their filtering options.
								</p>
							</div>
						</div>
					</>
				)}
				<div className="project-section">
					<h2 className="project-h2">Reflection</h2>
					<label className="project-label-large">My Experience</label>
					{!view && (
						<p className="project-p">
							Although I cannot publicly disclose the details of my internship
							with Nutripair. I had a thrilling experience working with a close
							bonded startup out of my own university, UC Irvine.
						</p>
					)}
					<div className="project-subsection">
						<h3 className="project-h3">What I Learned</h3>
						<label className="project-label-18">
							Startups Pose Unique Challenges
						</label>

						<p className="project-p">
							As a new designer working in a startup environment, I quickly
							realized that there were unique obstacles that challenged certain
							parts of the design process that I was previously familiar with.
							One of the biggest challenges was maintaining user retention for
							an application that was new to users and did not have the
							advantage of familiarity that larger, more established companies
							possess. As a designer who loves to iterate based on feedback, I
							had to ensure that our team was keeping users engaged throughout
							the testing phase.
						</p>
						<label className="project-label-18">
							Understanding What Is Feasible
						</label>
						<p className="project-p">
							Given my prior background in frontend development, and my previous
							position as a frontend intern at Nutripair, my team valued the
							feasibility of my design decisions in relation to the capabilities
							of the remaining tech development team. Throughout the testing
							cohort, I worked closely with the frontend team to clarify
							high-priority items that could realistically be delivered in our
							fast-paced testing timeline and backlog items that would require
							more time allocation to implement. This ultimately ensured that
							our team rolled out features with the highest value to the users,
							without overwhelming the rest of the team.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
