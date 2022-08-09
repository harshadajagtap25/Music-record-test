import { Box, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getMusicRecords,
  updateMusicRecords,
} from "../Redux/AppReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusic, setCurrentMusic] = useState({});
  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (musicName && artistName) {
      const payload = {
        musicName: musicName,
        artistName: artistName,
      };

      dispatch(updateMusicRecords(id, payload)).then(() =>
        dispatch(getMusicRecords())
      );
    }
  };
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [dispatch, musicRecords.length]);

  useEffect(() => {
    if (id) {
      //find in musicRecords
      const album = musicRecords.find((album) => album.id === id);
      album && setCurrentMusic(album);

      setMusicName(currentMusic.name);
      setArtistName(currentMusic.artist);
    }
  }, [id, musicRecords,setArtistName]);
  console.log(musicRecords)
  console.log(musicName,artistName)
  return (
    <div>
      EditMusicRecord
      <form onSubmit={handleSubmit}>
        <Box>
          <label>Album Name</label>
          <Input
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
          />

          <label>Artist Name</label>

          <Input
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
          <button type={"submit"}>Update</button>
        </Box>
      </form>
    </div>
  );
};

export default EditMusicRecord;
