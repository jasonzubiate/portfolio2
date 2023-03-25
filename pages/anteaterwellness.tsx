import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";

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
					src={`/assets/img/${project.img}`}
					alt="Wellness App Mock Ups"
					width={749}
					height={400}
					quality={100}
					priority
				/>
			</div>
			<ProjectHeader project={project} />
		</div>
	);
}
