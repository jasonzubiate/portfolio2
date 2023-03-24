import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader"

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


export default function nutripair({project}) {
  console.log(project)
  return (
    <div>
      <Image src={`/${project.img}`} alt="Nutripair Logo" fill/>
      <ProjectHeader project={project}/>
    </div>
  )
}

