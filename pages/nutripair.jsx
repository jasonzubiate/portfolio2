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

export default function nutripair({ project }) {
	const heroColorStyle = { backgroundColor: "white" };
	return (
		<div>
			<div className="project-hero-img" style={heroColorStyle}>
				<Image className="img" src={nhero} alt={"Nutripair Logo"} priority />
			</div>
			<ProjectHeader project={project} />
			<div className="project-container">
				<div className="project-section">
					<h2 className="project-h2">Overvivew</h2>
					<label className="project-label-large">About Nutripair</label>
					<p className="project-p">
						Nutripair is a nutritional health management startup located in
						Irvine, California. The company is dedicated to developing a mobile
						application tailored to individuals with specific dietary
						restrictions. The application serves as an indispensable tool,
						offering comprehensive nutritional and allergen information for menu
						items available at prominent food chains and esteemed local
						restaurants across the Southern California area.
					</p>
					<p className="project-p">
						The team was preparing for the alpha release of their mobile
						application, and I had the privilege of leading the user experience
						design team. My main responsibility was to develop a comprehensive
						usability testing plan and oversee the iterative improvements to the
						application based on feedback from our group of dedicated user
						testers. This marked the first time the general public would get a
						glimpse of the application, making it crucial for us to capture and
						analyze users' initial impressions.
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
							The research goals for the usability testing plan are a good fit
							for the alpha release of the application. They are focused on
							assessing how easy the app is to use, whether it is effective at
							recommending safe fast food options, and how well it handles
							searches and identifying safe menu items. The plan also looks at
							how the app caters to users with multiple dietary restrictions,
							its accessibility for users with different abilities, and how well
							it recovers from errors. Finally, comparing the app with similar
							ones in the market will help identify areas for improvement.
							Overall, the testing plan is designed to capture users' initial
							thoughts and feedback on the app during its alpha release.
						</p>
						<label className="project-label-18">Usability</label>
						<p className="project-p">
							Assessing the ease of use and overall user experience of the
							application, including navigation, layout, and functionality,
							especially for searching options based on food
							intolerances/dietary restrictions.
						</p>
						<label className="project-label-18">Effectiveness</label>
						<p className="project-p">
							Determining if the recommended fast food options are appropriate
							for the user's specified dietary restrictions and if the
							recommendations are accurate.
						</p>
						<label className="project-label-18">Searchability</label>
						<p className="project-p">
							Assessing the effectiveness and accuracy of the search function
							for finding restaurants and menu items that meet the user's
							dietary restrictions.
						</p>
						<label className="project-label-18">Identification</label>
						<p className="project-p">
							Evaluating the ability of the application to clearly identify
							which menu items are safe for users.
						</p>
						<label className="project-label-18">
							Multiple Dietary Restrictions
						</label>
						<p className="project-p">
							Testing how well the application can cater to users with multiple
							dietary restrictions and search for restaurants that offer a wide
							range of options that are safe for them to eat.
						</p>
						<label className="project-label-18">Accessibility</label>
						<p className="project-p">
							Evaluating the accessibility of the application for users with
							different abilities, including those with visual or auditory
							impairments.
						</p>
					</div>

					<div className="project-subsection">
						<h3 className="project-h3">Determining Research Methods</h3>
						<p className="project-p">
							To gain meaningful insights into the needs of our users and to
							improve our Nutripair mobile application, we will be utilizing a
							range of research methods. These include usability testing,
							observations, focus groups, interviews, A/B testing, and surveys.
							By combining these methods, we aim to collect user feedback
							through different channels and identify areas where the
							application can be improved. By implementing the insights gained
							from this research, we strive to enhance the overall user
							experience of the mobile application, ensuring that it caters
							effectively to our users' dietary needs and restrictions.
						</p>
						<Image
							className="img"
							src={researchmethods}
							alt={"Research Methods"}
						/>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Testing Agenda</h3>
						<p className="project-p">
							For our first round of usability testing, we split our 50 users
							into groups led by members of our UX team. Each group was assigned
							three tasks that aligned with specific design goals. We recorded
							the users as they interacted with the application using Smartlook
							Analytics. After completing each task, we asked the testers to
							fill out a Google form with four questions, two of which were
							related to the task at hand and the other two more general
							questions about their overall experience. This approach helped us
							collect targeted feedback on each task and gain broader insights
							into the users' experience as a whole.
						</p>
						<Image
							className="img center"
							src={nutritask1}
							alt={"Feedback Form"}
							width={700}
						/>
						<br />
						<Image
							className="img center"
							src={nutritask2}
							alt={"Feedback Form"}
							width={700}
						/>
						<br />
						<Image
							className="img center"
							src={nutritask3}
							alt={"Feedback Form"}
							width={700}
						/>
						<br />
						<Image
							className="img center"
							src={nutriform}
							alt={"Feedback Form"}
							width={700}
						/>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Insights With Smartlook</h3>
						<p className="project-p">
							During the testing session we tracked user interactions with
							Smartlook. This provided our team with real-time session replays,
							heatmaps, and funnels to help identify areas for improvement and
							optimize user experience. data-driven decisions to improve it.
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
							Our Google Forms provided us with some of the most valuable
							feedback of the entire testing cohort. Those who left detailed
							comments on the form were asked to further discuss their comments
							within the testing group. This allowed us to gain a better
							understanding of the critiques as well as give me the opportunity
							to ask the testers any follow up questions based on their
							feedback.
						</p>
						<q className="quotes center">
							One recommendation would be to{" "}
							<span className="highlight">
								use different colors to separate the macro breakdown section
							</span>{" "}
							that uses green with the green on the food allergen.
						</q>
						<br />
						<br />
						<q className="quotes center">
							“It was{" "}
							<span className="highlight">
								not intuitively clear how the Details section is different from
								the Nutrition section.
							</span>{" "}
							Both pages display nutritional information such as calories,
							protein, carbs, and fats.”
						</q>
						<br />
						<br />
						<q className="quotes center">
							If a users is able to search or filter menu items by category it
							would be useful.{" "}
							<span className="highlight">
								It was a bit difficult to scroll through entire the menu list
							</span>{" "}
							to find the item.
						</q>
					</div>
					<div className="project-subsection">
						<h3 className="project-h3">Mapping User Feedback</h3>
						<Image
							className="img"
							src={nutrimindmap}
							alt={"Smartlook Analytics"}
						/>
						<br />
						<p className="project-p">
							Our team thoroughly documented all the feedback received from our
							usability testing session on a Miro board and identified three
							primary areas of concern within the application. These areas
							include page navigation, the Menu Item Page, and our menu item
							filtering functionality.
						</p>
						<div className="bullet center">
							<div className="bullet-point">1</div>
							<p className="bullet-text">
								Redesign the macro breakdown chart on the menu item details tab
							</p>
						</div>
						<div className="bullet center">
							<div className="bullet-point">2</div>
							<p className="bullet-text">
								Implement a menu category selector that navigates users to the corresponding section of the menu
							</p>
						</div>
						<div className="bullet center">
							<div className="bullet-point">3</div>
							<p className="bullet-text">
							Expand the current filter options from the existing set of 8 allergens to encompass a wider range of nutritional factors. 
							</p>
						</div>
					</div>
				</div>
				<div className="project-section">
					<h2 className="project-h2">Reflection</h2>
					<label className="project-label-large">My Experience</label>
					<p className="project-p">
						Although I cannot publicly disclose the details of my internship
						with Nutripair. I had a thrilling experience working with a close
						bonded startup out of my own university, UC Irvine.
					</p>
					<div className="project-subsection">
						<h3 className="project-h3">Logistics</h3>
						<p className="project-p">
							I currently intern with Nutripair as a User Experience Lead and
							manage a team of three. I originally was onboarded as a frontend
							developer and have since shifted to manage a cohort of user
							testing for a mobile application. I have been immersed in a close
							knit work environment and collaborate with the frontend and
							backend team on a weekly basis. Being in direct contact with the
							CEO of Nutripair, Catlin Tran, I have been able to communicate
							stakeholder requirements easily and have been able to quickly
							iterate on my teams design decisions.{" "}
						</p>
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
