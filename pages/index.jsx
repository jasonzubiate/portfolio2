import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import ProjectCard from "@/components/common/ProjectCard";
import jasonimg from "@/public/assets/img/me.png";
import fsPromises from "fs/promises";
import path from "path";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const inter = Inter({ subsets: ["latin"] });

// retrieves all of my previous work from work.json
export const getStaticProps = async () => {
	const filePath = path.join(process.cwd(), "json/work.json");
	const jsonData = await fsPromises.readFile(filePath);
	const objectData = JSON.parse(jsonData);
	return {
		props: objectData,
	};
};

export default function Home(objectData) {
	const { work, freelance } = objectData;

	const h1Ref1 = useRef();
	const h1Ref2 = useRef();
	const imgRef = useRef();
	const tagRef1 = useRef();
	const tagRef2 = useRef();
	const tRef1 = useRef();
	const tRef2 = useRef();
	const tRef3 = useRef();
	const sRef1 = useRef();
	const sRef2 = useRef();
	const sRef3 = useRef();

	useEffect(() => {
		let tl = gsap.timeline({
			defaults: { ease: "power2", duration: 2, delay: .5 },
		});
		tl.to(imgRef.current, {
			scale: 1.05,
		})
			.to(
				h1Ref1.current,
				{
					duration: 1.5,
					y: 0,
				},
				"-=2"
			)
			.to(
				h1Ref2.current,
				{
					duration: 1.5,
					y: 0,
				},
				"-=2"
			)
			.to(
				[tagRef1.current, tagRef2.current],
				{
					duration: 1.2,
					y: 0,
				},
				"-=1.8"
			)
			.to(
				[
					tRef1.current,
					sRef1.current,
					tRef2.current,
					sRef2.current,
					tRef3.current,
					sRef3.current,
				],
				{
					stagger: 0.1,
					duration: 1.2,
					// opacity: 1,
					// clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
					y: 0,
				},
				"-=1.7"
			);
	}, []);

	return (
		<>
			<Head>
				<title>jasonzubiate</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.hero}>
					<div className={styles.hero_content}>
						<div className={styles.title}>
							<div className={styles.mask}>
								<h1 className={styles.h1} ref={h1Ref1}>
									Jason
								</h1>
							</div>
							<div className={styles.mask}>
								<h1 className={styles.h1} ref={h1Ref2}>
									Zubiate
								</h1>
							</div>
						</div>
						<div className={styles.mask}>
							<h2 className={styles.catchline} ref={tagRef1}>
								0 to 1 designer - of software, interfaces, and
							</h2>
						</div>
						<div className={styles.mask}>
							<h2 className={styles.catchline} ref={tagRef2}>
								experiences
							</h2>
						</div>
						<div className={styles.statuses}>
							<div className={styles.status}>
								<div className={styles.mask}>
									<label className={styles.status_title} ref={tRef1}>
										Currently
									</label>
								</div>
								<div className={styles.mask}>
									<label className={styles.status_body} ref={sRef1}>
										Preparing for gradute school in fall 2023
									</label>
								</div>
							</div>
							<div className={styles.vl}></div>

							<div className={styles.status}>
								<div className={styles.mask}>
									{" "}
									<label className={styles.status_title} ref={tRef2}>
										Thinking About
									</label>
								</div>
								<div className={styles.mask}>
									<label className={styles.status_body} ref={sRef2}>
										Latest design trends, new techniques in dance music
										production
									</label>
								</div>
							</div>
							<div className={styles.vl}></div>
							<div className={styles.status}>
								<div className={styles.mask}>
									<label className={styles.status_title} ref={tRef3}>
										Previously
									</label>
								</div>
								<div className={styles.mask}>
									<label className={styles.status_body} ref={sRef3}>
										UX Lead @{" "}
										<span className={styles.bold}>
											<a className="link" href="https://www.nutripair.co/">
												Nutripair
											</a>
										</span>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.hero_image}>
						<Image
							className={styles.img}
							src={jasonimg}
							alt={"Jason Zubiate"}
							priority
							ref={imgRef}
						/>
					</div>
				</div>
				<div className={styles.section}>
					<h2 className={styles.h2}>My Work</h2>
					<div className={styles.projects}>
						{work.map((project) => {
							return (
								<div key={project.id}>
									<hr className={styles.hr} />
									<ProjectCard project={project} />
								</div>
							);
						})}
					</div>
				</div>
				{/* <div className={styles.section}>
          <h2 className={styles.h2}>Freelancing</h2>
          {freelance.map((project) => {
            return (
              <SmallCard project={project}/>
            )
          })}
        </div> */}
			</main>
		</>
	);
}
