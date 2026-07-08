import ProjectsCard from "./ProjectsCard";
import thunderImage from "../assets/thunder.png";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <ProjectsCard
          title="Thunder Monetize"
          description="A website built using React, Vite, and Ant Design based on provided Figma designs."
          image={thunderImage}
          link="https://github.com/jwong65/Thunder-Monetize-Website"
        />
      </div>
    </section>
  );
}