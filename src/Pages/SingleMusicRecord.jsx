import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecords } from "../Redux/AppReducer/action";
import { Box, Image } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

//get id from params
// filter the music album based on id
// get album
const SingleMusicRecord = () => {
  const { id } = useParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [currentMusic, setCurrentMusic] = useState({});
  const dispatch = useDispatch();

  //if we refresh page, musicrecords will get empty
  // so again get musicrecords
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
    }
  }, [id, musicRecords]);

  // console.log(musicRecords);
  // console.log(currentMusic)
  return (
    <div>
      <Box w={"30%"} m={"auto"} key={currentMusic.id} border={"1px solid gray"}>
        <div>{currentMusic.name}</div>
        <div>
          <Image boxSize="100px" src={currentMusic.img} alt="" />
        </div>
        <div>{currentMusic.year}</div>
        <div>{currentMusic.genre}</div>
      </Box>

      <Box>
        <Link to={`/music/${currentMusic.id}/edit`} >Edit</Link>
      </Box>
    </div>
  );
};

export default SingleMusicRecord;
