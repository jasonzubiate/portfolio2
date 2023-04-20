import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import nhero from "@/public/assets/img/nutripair.png";

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
					<h2 className="project-h2">Overview</h2>
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
