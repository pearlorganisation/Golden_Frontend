import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchNotes = async () => {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_APP_BACKEND_DEV_BASE_URL
          }notes/search?query=${query}`
        );

        setNotes(response.data.data);
      } catch (err) {
        setError(err?.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [query]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && Array.isArray(notes) && notes.length === 0 && (
        <p>No notes found for "{query}".</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.isArray(notes) &&
          notes.map((note) => (
            <div
              key={note._id}
              className="border bg-black text-white p-4 rounded shadow"
            >
              <img
                src={note?.subject?.banner[0].secure_url}
                alt={note?.name}
                className="w-full h-48 object-contain rounded-lg shadow-lg"
              />
              <h2 className="text-xl font-semibold">{note?.name}</h2>

              <p>Discounted Price: Rs. {note?.price}</p>
              <p>Pages: {note?.pages}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResults;
