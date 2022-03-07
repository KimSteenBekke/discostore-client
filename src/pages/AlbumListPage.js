import { useState, useEffect } from "react";
import axios from "axios";

import AlbumCard from "./../components/AlbumCard";

const API_URL = "http://localhost:5005";

function AlbumListPage() {
  const [albums, setAlbums] = useState([]);

  const getAllAlbums = () => {
    axios
      .get(`${API_URL}/api/albums`)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllAlbums();
  }, []);

  return (
    <div className="AlbumListPage">
      
      {albums.map((album) => (
        <AlbumCard key={album._id} {...album} />
      ))}
    </div>
  );
}

export default AlbumListPage;
