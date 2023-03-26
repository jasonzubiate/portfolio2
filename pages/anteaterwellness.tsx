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
      <div>
        <h2 className="project-h2">Overview</h2>
        <label htmlFor="">Clarifying The Problem</label>
        <h3 className="project-h3">Stakeholder Elicitation</h3>
        <p className="project-p">
          As part of our mobile app development project, our team collaborated
          with stakeholders from the UCI Health and Wellness Center over a
          four-week period.
        </p>
        <p className="project-p">
          During the first stage of our collaboration, we conducted elicitation
          sessions with the center's staff to gather information on the goals
          and requirements of the Anteater Wellness Application.
        </p>
        <p className="project-p">
          Although we were not provided with prior research conducted by the
          center due to confidentiality concerns, we used the insights gained
          from these sessions to develop a comprehensive product perspective.
          This included identifying product functions, user characteristics,
          general constraints, assumptions and dependencies, and apportioning of
          requirements.
        </p>
        <p className="project-p">
          In addition to these findings, the wellness center staff provided us
          with requests for both functional and non-functional requirements for
          the application. Specifically, the Anteater Wellness Application was
          designed to foster continuous progress in the mental health and
          overall wellbeing of UCI students.
        </p>
        <h2 className="project-h2">User Research</h2>
        <h2 className="project-h2">Brainstorming</h2>
        <h2 className="project-h2">Wireframing</h2>
        <h2 className="project-h2">Reflection</h2>
        <h3 className="project-h3">User Identification</h3>
        <label className="project-label-18">UCI Students</label>
        <p className="project-p">
          The primary users of the Anteater Wellness application are UCI
          students, both graduate and undergraduate, who are currently enrolled
          at the university. The application's functionality is designed
          specifically to improve the health and well-being of these students.
          It provides a valuable resource for individuals who seek to enhance
          their physical, emotional, intellectual, financial, social, and
          spiritual health. The Anteater Wellness application offers
          personalized wellness assessments, goal-setting tools, and access to
          wellness-related events, making it a comprehensive resource for
          students committed to improving their overall health and well-being.
        </p>
        <label className="project-label-18">
          The Center for Student Wellness and Health Promotion
        </label>
        <p className="project-p">
          The UCI Wellness Center staff is responsible for posting
          UCI-affiliated wellness events on the app and encouraging student
          participation. They may also interact with student users by commenting
          on posts and providing feedback on their wellness progress. In
          addition, staff members may use the app to connect with students who
          may require further assistance or support in enhancing their wellness.
          The system generates reports on user engagement, goal completion
          rates, and other relevant metrics to assist staff members in improving
          the effectiveness of the app in promoting student wellness.
        </p>
        <label className="project-label-18">
          UCI Office of Information Technology
        </label>
        <p className="project-p">
          The UCI Office of Information Technology is responsible for
          maintaining the technical infrastructure and ensuring that the
          Anteater Wellness application is functioning correctly. Their
          responsibilities may include server maintenance, database management,
          troubleshooting technical issues, and updating the application to
          ensure compatibility with new devices and operating systems.
        </p>
        <h3>Surveying Students</h3>
        <p className="project-p">
          To gather a better perspective on the scope of the issues, I sent out
          surveys to students attending the University of California, Irvine.
          The main goal of these survey was to understand the health & wellness
          status of students across the campus as well as their awareness of
          health-related events hosted by the health and wellness center.
        </p>
        <label htmlFor="">
          The students were surveyed from a pool of various major and social
          involvements.
        </label>
        <p className="project-p">
          Understanding the application requirements, identification of the apps
          users was essential to further design the features and functionality
          of the application as a whole. This was identified within our software
          requirements specification document and further mapped within a domain
          model.
        </p>
        <h3>Constructing the Survey</h3>
        <p className="project-p">
          After gathering a sample of students that met the user
          characteristics, I sent them a brief 12-question survey to lay the
          foundation of my knowledge of the problem. Some of these questions
          included:
        </p>
        <h3>Survey Results</h3>
        <p className="project-p">
          With a sample size of 24, the survey revealed highly insightful
          information of health & wellness and campus events.
        </p>
        <h3>Personas</h3>
        <p className="project-p">
          With a sample size of 24, the survey revealed highly insightful
          information of health & wellness and campus events.
        </p>
        {/* BRAINSTORMING SECTION */}
        <h2 className="project-h2">Overview</h2>
        <label htmlFor="">Clarifying The Problem</label>
        <h3 className="project-h3">Competitive Analysis</h3>
        <p className="project-p">
          Initially, I conducted market research to identify similar
          applications and their feature sets. Since this particular application
          focuses on improving students' mental health through event scheduling
          and health tracking, I specifically looked at the main features of
          mental health, events, and goal tracking apps.
        </p>
        <p className="project-p">
          Studying these key areas, I gained a better understanding of the
          functionalities and design patterns that have proven to be successful
          in similar apps. I realized the application would have to incorporate
          some of these distinct features to make is practical for the students
          to use.
        </p>
        <p className="project-p">
          The competitive analysis revealed that the Anteater Wellness app
          should incentivize wellness categories by tracking the status of each
          with a virtual indicator. Progression through the categories could be
          achieved by attending events listed by the wellness center, with each
          event associated with a specific category or set of categories.
        </p>
        <p className="project-p">
          Other notable findings from the competitive analysis suggested the
          idea of forming a network or community of students who share similar
          health interests. I believe that providing inclusion within software
          is crucial and have identified an entry point to make this apparent in
          the application.
        </p>

        <h3 className="project-h3">Deriving Design Goals</h3>
        <p className="project-p">
          Based on the initial elicitation sessions and surveys with the
          Wellness Center staff, our team drafted a goal model that identified
          preliminary goals of the application: foster relationships between
          students, encourage students to achieve personal wellness goals,
          connect the Wellness Center staff with students, increase Wellness
          Center event participation, and keep students information secure.
        </p>
        <p className="project-p">
          After identifying the market gap, I generated goals for the product.
          When crafting these goals, I prioritized the biggest concern for
          students: creating and maintaining health awareness in a way that
          actively unites and uplifts their wellness goals.
        </p>

        <p className="project-p">
          Studying these key areas, I gained a better understanding of the
          functionalities and design patterns that have proven to be successful
          in similar apps. I realized the application would have to incorporate
          some of these distinct features to make is practical for the students
          to use.
        </p>
        <p className="project-p">
          The competitive analysis revealed that the Anteater Wellness app
          should incentivize wellness categories by tracking the status of each
          with a virtual indicator. Progression through the categories could be
          achieved by attending events listed by the wellness center, with each
          event associated with a specific category or set of categories.
        </p>
        <p className="project-p">
          Other notable findings from the competitive analysis suggested the
          idea of forming a network or community of students who share similar
          health interests. I believe that providing inclusion within software
          is crucial and have identified an entry point to make this apparent in
          the application.
        </p>

				{/* HERE */}
        <h3>Deriving Design Goals</h3>
        <p className="project-p">
          To gather a better perspective on the scope of the issues, I sent out
          surveys to students attending the University of California, Irvine.
          The main goal of these survey was to understand the health & wellness
          status of students across the campus as well as their awareness of
          health-related events hosted by the health and wellness center.
        </p>
        <label htmlFor="">
          The students were surveyed from a pool of various major and social
          involvements.
        </label>
        <p className="project-p">
          Understanding the application requirements, identification of the apps
          users was essential to further design the features and functionality
          of the application as a whole. This was identified within our software
          requirements specification document and further mapped within a domain
          model.
        </p>
        <h3>Constructing the Survey</h3>
        <p className="project-p">
          After gathering a sample of students that met the user
          characteristics, I sent them a brief 12-question survey to lay the
          foundation of my knowledge of the problem. Some of these questions
          included:
        </p>
        <h3>Survey Results</h3>
        <p className="project-p">
          With a sample size of 24, the survey revealed highly insightful
          information of health & wellness and campus events.
        </p>
        <h3>Personas</h3>
        <p className="project-p">
          With a sample size of 24, the survey revealed highly insightful
          information of health & wellness and campus events.
        </p>
      </div>
    </div>
  );
}
