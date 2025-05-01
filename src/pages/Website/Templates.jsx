import { Link } from "react-router-dom";

function Templates() {
  const templates = [
    {
      id: 1,
      title: "Modern",
      description: "Una plantilla moderna y minimalista para CV",
      image: "https://picsum.photos/id/1015/200/300"
    },
    {
      id: 2,
      title: "Creative",
      description: "Una plantilla creativa y colorida para CV",
      image: "https://picsum.photos/id/1016/200/300"
    },
    {
      id: 3,
      title: "Classic",
      description: "Una plantilla clásica y profesional para CV",
      image: "https://picsum.photos/id/1018/200/300"
    }
  ];

  return (
    <div className="container pt-2 mb-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {templates.map(template => (
          <div className="col" key={template.id}>
            <Link
              to={`/templates/${template.id}`}
              className="text-decoration-none"
            >
              <div className="card h-100 shadow">
                <img
                  src={template.image}
                  className="card-img-top rounded"
                  alt={`Plantilla ${template.title}`}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{template.title}</h5>
                  <p className="card-text">{template.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Templates;
