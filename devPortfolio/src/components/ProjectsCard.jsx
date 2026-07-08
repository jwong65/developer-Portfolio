const ProjectsCard = ({ title, description, image, link }) => {
  return (
    <div className="rounded-xl border p-6 shadow-md">
      {image && (
        <div className="w-full h-80 overflow-hidden rounded-lg bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-gray-600">
          {description}
        </p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;