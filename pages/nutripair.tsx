import fsPromises from "fs/promises";
import path from "path";

export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "json/work.json");
	const jsonData: any = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);
  console.log(objectData)

	return {
		props: objectData[0],
	};
};

type nutripairProps = {
  project: any
}

export default function nutripair({project}:nutripairProps) {
  console.log(project)
  return (
    <div>nutripair</div>
  )
}
