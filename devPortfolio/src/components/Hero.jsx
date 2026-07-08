export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8">
      <h1 className="text-5xl font-bold">
        Jason Wong
      </h1>

      <h2 className="text-3xl mt-4 text-gray-600">
        Software Developer
      </h2>

      <p className="mt-6 max-w-xl text-lg">
        I specialize in building modern web applications with React and JavaScript. I also have experience developing custom WordPress solutions and creating responsive user experiences.
      </p>

      <div className="mt-8">
        <a
          href="#projects"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}