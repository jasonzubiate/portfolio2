import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import cdhero from "@/public/assets/img/coughdiarization.png";

export async function getStaticProps() {
	const filePath = path.join(process.cwd(), "json/work.json");
	const fileContents = await fsPromises.readFile(filePath, "utf8");
	const data = JSON.parse(fileContents);
	const coughdiarization = data.work.find(
		(project) => project.url === "coughdiarization"
	);
	return {
		props: {
			project: coughdiarization,
		},
	};
}

export default function coughdiarization({ project }) {
	const heroColorStyle = { backgroundColor: "#00000" };
	return (
		<div>
			<div className="project-hero-img" style={heroColorStyle}>
				<Image className="img" src={cdhero} alt={"ObvioHealth Logo"} priority />
			</div>
			<ProjectHeader project={project} />
			<div className="project-container">
				<div className="project-section">
					<h2 className="project-h2">Overview</h2>
					<label className="project-label-large">My Experience</label>
					<p className="project-p">
						Although I cannot publicly disclose the details of my two quarter
						capstone with ObvioHealth and Hyfe AI. I had an insightful
						experience working with innovative technology
					</p>
					<div className="project-subsection">
						<h3 className="project-h3">Logistics</h3>
						<p className="project-p">
							For my senior design capstone, I partnered with ObvioHealth and
							Hyfe AI as a machine learning developer for 20 weeks. Even though
							it was a backend project, I gained valuable experiences throughout
							the entire process, from onboarding to the final showcase on
							campus. I am truly fascinated by the work I have accomplished and
							the impact it will have on the industry.
						</p>
						<h3 className="project-h3">What I Learned</h3>
						<label className="project-label-18">Exit My Comfort Zone</label>
						<p className="project-p">
							I never considered backend development as an area of interest. It
							was always difficult for me to stay motivated on work where I
							could not visually see the output. However, the opportunity to
							work on something so innovative pushed me out of my comfort zone.
							I am grateful to my project manager, Austin Lamb, and our research
							director, Brian Cohn, for emphasizing the importance of the
							project I worked on and connecting each task to the previous ones
							throughout our sprints. This helped me to visualize all the
							working parts of the project and understand the impact of my
							contributions towards the research goals.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
