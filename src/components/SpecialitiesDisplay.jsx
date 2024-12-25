const SpecialitiesDisplay = ({ content }) => {
  return (
    <div>
      {Object.entries(content).map(([key, value]) => (
        <div
          key={key}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h2>{value.title}</h2>
          <p>
            <strong>Pages:</strong>{" "}
            {value.description.split("Pages: ")[1].split(". Faculty:")[0]}
          </p>
          <p>
            <strong>Faculty:</strong>{" "}
            {value.description
              .split("Faculty: ")[1]
              .split(". Description:")[0] || "N/A"}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {value.description.split("Description: ")[1] ||
              "No description available."}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpecialitiesDisplay;
