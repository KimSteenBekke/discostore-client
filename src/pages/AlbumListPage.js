import { useState, useEffect } from "react";
import axios from "axios";

import AlbumCard from "./../components/AlbumCard";

const API_URL = "https://discostore-client.netlify.app/";

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
