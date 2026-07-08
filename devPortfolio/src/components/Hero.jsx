export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center px-8">
      <h1 className="text-5xl font-bold">
        Jason Wong
      </h1>

      <h2 className="text-3xl mt-4 text-gray-600">
        Software Developer
      </h2>

      <p className="mt-6 max-w-xl text-lg">
        I build web applications and software solutions using
        modern technologies like React, JavaScript, and Python.
        I enjoy creating intuitive user experiences and solving
        complex problems through code.
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