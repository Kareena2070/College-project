import { Link } from "react-router-dom";

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-10">

      {/* About */}
      <section id="about" className="py-6">
        <h1 className="text-3xl font-bold">Kareena Yadav</h1>
        <p className="text-gray-700 mt-2">
          Career transition from educator & social impact leader to full-stack web developer. Over 1 year of intensive front-end
        training with hands-on experience in React, JavaScript, HTML, CSS, Bootstrap, PostgreSQL. Built interactive web apps,
        data visualization dashboards, and end-to-end UI development with Netlify deployment. Strong problem-solving,
        teamwork, and communication skills developed via 3+ years of social work and Agile team projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-6 bg-gray-100">
        <h2 className="text-2xl font-semibold  m-2">Skills</h2>
        <ul className="list-disc ml-8">
          <li>HTML</li>
          <li>CSS / Tailwind</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </section>

      {/* Education */}
      <section id="education" className="py-6">
        <h2 className="text-2xl font-semibold m-2">Education</h2>
        <p className="m-2">BCA - Akal College of Engineering and Technology</p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-6 bg-gray-100">
        <h2 className="text-2xl font-semibold m-2">Projects</h2>
        <ul className="list-disc ml-8">
          <li>Portfolio Website</li>
          <li>Pexels Clone</li>
          <li>Country Data Visualizer</li>
        </ul>

        <Link
          to="/projects"
          className="text-blue-600  block mt-3 m-5"
        >
          View All Projects →
        </Link>
      </section>

      {/* Contact */}
      <section id="contact" className="py-6">
        <h2 className="text-2xl font-semibold m-2">Contact</h2>
        <p className="m-2">Email: kareenayadav1088@gmail.com</p>
      </section>
    </div>
  );
}
