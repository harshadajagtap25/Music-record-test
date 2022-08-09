import { Box, Grid, Image } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getMusicRecords } from "../Redux/AppReducer/action";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  //location has location.search has all category
  // use to render if we select or deselect filter checkbox
  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };

      dispatch(getMusicRecords(queryParams));
    }
  }, [location.search]);
  // console.log(musicRecords);
  return (
    <div>
      <Grid
        templateColumns={{ xl: "repeat(5, 1fr)", sm: "repeat(2, 1fr)" }}
        gap={"4"}
      >
        {musicRecords.length > 0 &&
          musicRecords.map((album) => (
            <Box key={album.id} border={"1px solid gray"}>
              <Link to={`/music/${album.id}`}>
                <div>{album.name}</div>
                <div>
                  <Image boxSize="100px" src={album.img} alt="" />
                </div>
                <div>{album.year}</div>
                <div>{album.genre}</div>
              </Link>
            </Box>
          ))}
      </Grid>
    </div>
  );
};

export default MusicRecords;
