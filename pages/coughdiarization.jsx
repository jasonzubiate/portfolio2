import fsPromises from "fs/promises";
import path from "path";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import cdhero from "@/public/assets/img/coughdiarization.png";
import techstack from "@/public/assets/img/hyfetechstack.png";
import hyfeposter from "@/public/assets/img/hyfeposter.png";
import { useState } from "react";

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
	const [view, setView] = useState(false);
	const heroColorStyle = { backgroundColor: "#00000" };
	return (
		<div>
			<div className="project-hero-img" style={heroColorStyle}>
				<Image className="img" src={cdhero} alt={"ObvioHealth Logo"} priority />
			</div>
			<ProjectHeader project={project} setView={setView} />
			<div className="project-container">
				{view && (
					<>
						<div className="project-section">
							<h2 className="project-h2">Overview</h2>
							<label className="project-label-large">
								What Is Cough Diarization?
							</label>
							<p className="project-p">
								Our capstone team was assigned the responsibility of enhancing
								the machine learning model used in a cough diarization software.
								The primary objective of this software was to accurately
								identify the individual who coughed within a room and provide
								insights into the respiratory illnesses they might be
								experiencing. Through advanced machine learning techniques, we
								improved the model's ability to distinguish between different
								individuals and accurately associate their coughs with specific
								respiratory conditions.
							</p>
							<div className="project-subsection">
								<h3 className="project-h3">Tech Stack</h3>
								<Image
									className="img"
									src={techstack}
									alt={"ObvioHealth Logo"}
									quality={100}
								/>
							</div>
						</div>
						<div className="project-section">
							<h2 className="project-h2">Implementations</h2>
							<label className="project-label-large">
								Improving Voice Detection{" "}
							</label>
							<div className="project-subsection">
								<h3 className="project-h3">Whisper Voice Activity Detection</h3>
								<p className="project-p">
									The task involved integrating the Whisper model from OpenAI
									for voice activity detection into the existing codebase. The
									goal was to utilize the model as a preprocessing network to
									enhance the accuracy of cough voicing detection. By
									integrating Whisper, we aimed to improve the precision and
									reliability of identifying cough instances within the audio
									data. This integration successfully contributed to the overall
									effectiveness and performance of the cough detection system,
									resulting in more accurate and reliable results.
								</p>
								<p className="project-p">
									<span className="highlight3">
										The integration of the Whisper model enabled us to
										effectively differentiate between different segments within
										our WAV files.
									</span>{" "}
									Specifically, we were able to classify and distinguish between
									noise/empty segments, voicing segments (indicating the
									occurrence of a cough), and the end of a cough.
								</p>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">
									Hugging Face Voice Activity Detection
								</h3>
								<p className="project-p">
									The task involved evaluating and integrating the Hugging Face
									voice activity detection model, known as speechbrain, into the
									existing codebase. The purpose was to utilize it as a
									preprocessing network to enhance the accuracy of cough voicing
									detection. The primary goal was to improve the overall
									performance of the cough characterization system. By
									integrating the speechbrain model, we aimed to achieve more
									precise and reliable identification of cough instances in the
									audio data. This integration played a crucial role in
									enhancing the accuracy of the cough characterization system
									and improving its overall performance.
								</p>
							</div>
							<div className="project-section">
								<h2 className="project-h2">Dataloading</h2>
								<label className="project-label-large">
									Up To Date Training Data
								</label>
								<div className="project-subsection">
									<h3 className="project-h3">
										Epic: Google Cloud and Pipeline Integration
									</h3>
									<p className="project-p">
										The purpose of this epic was to fully integrate Google Cloud
										and the cough characterization system pipeline. By
										integrating Google Cloud, the system was able to operate at
										scale, effectively handling large volumes of data. This
										integration enabled the cough characterization system to
										deliver accurate and reliable results consistently, meeting
										the requirements of real-world usage scenarios.
									</p>
								</div>
								<div className="project-subsection">
									<h3 className="project-h3">
										Connect to GCP Cough Diarization Bucket
									</h3>
									<p className="project-p">
										We needed to establish a connection to the GCP
										CoughDiarization bucket using the Google Cloud SDK and the
										provided service account. This enabled us to access the data
										stored in the bucket, which was crucial for training the
										cough characterization system. By utilizing the Google Cloud
										SDK and authenticating with the provided service account, we
										were able to securely retrieve and utilize the necessary
										data from the bucket to train and enhance the performance of
										the cough characterization system.
									</p>
								</div>
								<div className="project-subsection">
									<h3 className="project-h3">
										GCP Integration & Stream Data from Buckets
									</h3>
									<p className="project-p">
										The objective of this task was to integrate the Google Cloud
										Storage library into the existing codebase. This would
										facilitate the streaming of data from buckets, enabling
										convenient access to the training data required for the
										cough characterization system.{" "}
										<span className="highlight3">
											By incorporating the Google Cloud Storage library, we
											aimed to establish a seamless and efficient data retrieval
											mechanism, ensuring easy and reliable access to the
											necessary training data.
										</span>
									</p>
								</div>
							</div>
						</div>
						<div className="project-section">
							<h2 className="project-h2">Lightning And Hydra</h2>
							<label className="project-label-large">
								One Integrated Pipeline
							</label>
							<div className="project-subsection">
								<h3 className="project-h3">
									Integrate Dataloader, Preprocessing, Encoding, and Training
									Into One Pipeline
								</h3>
								<p className="project-p">
									The purpose of this task was to streamline the cough
									diarization process by integrating the dataloading,
									preprocessing, encoding, and training steps into a single
									pipeline. The objective was to simplify the process for
									researchers and ensure consistent results across different
									experiments. By consolidating these steps into a cohesive
									pipeline, we aimed to enhance the efficiency and effectiveness
									of the cough diarization workflow.
								</p>
								<p className="project-p">
									<span className="highlight3">
										With the integration of Lightning and Hydra into the
										pipeline, we were able to optimize the model execution by
										reducing the number of required parameters.
									</span>{" "}
									We utilized hyperparameters that facilitated the seamless
									execution of our files in a well-organized sequential order.
									This integration streamlined the workflow and improved the
									efficiency of running the model, enabling us to achieve better
									results with fewer parameters. The combination of Lightning
									and Hydra provided a robust framework that enhanced the
									overall performance and manageability of the pipeline.
								</p>
								<Image
									className="img"
									src={hyfeposter}
									alt={"Hyfe Poster"}
									quality={100}
								/>
							</div>
						</div>
						<div className="project-section">
							<h2 className="project-h2">Audio Augmentation</h2>
							<label className="project-label-large">
								Perfecting Our Processing
							</label>
							<div className="project-subsection">
								<h3 className="project-h3">
									Spectrogram and Audio Augmentation
								</h3>
								<p className="project-p">
									In order to enhance the cough detection model, our project
									manager proposed the implementation of spectrogram and audio
									augmentations.{" "}
									<span className="highlight3">
										These techniques involve applying frequency and time masking
										to the spectrogram data, as well as performing audio
										augmentations like time shifting, pitch shifting, time
										stretching, and adding background noise.
									</span>{" "}
									This would reduceoverfitting and help generate more diverse
									data. By implementing these enhancements, we developed a more
									robust and accurate cough detection system that could
									effectively identify coughs across different audio settings
									and conditions.
								</p>
							</div>
							<div className="project-subsection">
								<h3 className="project-h3">
									Jaccard Error Rate and Diarization Error Rate Metrics
								</h3>
								<p className="project-p">
									We successfully accomplished the implementation of two new
									metrics, namely the Jaccard Error Rate and the Diarization
									Error Rate, to enhance the evaluation of our cough
									classification and diarization models. These metrics were
									selected based on the insights provided by Prof. Shri
									Narayanan's research paper.{" "}
									<span className="highlight3">
										The Jaccard Error Rate served as a measure of similarity
										between the predicted and true segmentation, while the
										Diarization Error Rate provided a comprehensive assessment
										of the speaker diarization performance.
									</span>
								</p>
								<p className="project-p">
									Integrating these metrics allowed us to identify both the
									strengths and weaknesses of our models, enabling us to make
									targeted improvements where necessary. This achievement
									aligned with our purpose of enhancing the model evaluation
									process and striving for continuous improvement in our cough
									classification and diarization models.
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
							Although I cannot publicly disclose the details of my two quarter
							capstone with ObvioHealth and Hyfe AI. I had an insightful
							experience working with innovative technology
						</p>
					)}
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
