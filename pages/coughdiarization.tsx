import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import cdhero from "@/public/assets/img/coughdiarization.png"

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
				<Image
					className="img"
					src={cdhero}
					alt={"ObvioHealth Logo"}
					quality={100}
					priority
				/>
			</div>
			<ProjectHeader project={project} />
		</div>
	);
}
