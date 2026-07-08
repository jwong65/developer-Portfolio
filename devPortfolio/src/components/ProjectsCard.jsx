const ProjectsCard = ({ title, description, image, link }) => {
  return (
    <div className="max-w-md rounded-xl border p-6 shadow-md">
        {image && (
        <div className="w-full flex items-center justify-center bg-gray-100 rounded-lg p-4">
            <img
            src={image}
            alt={title}
            className="max-w-xs max-h-40 object-contain"
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
            className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"
          >
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;