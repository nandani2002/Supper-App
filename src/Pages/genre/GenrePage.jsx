import React , { useState } from "react";
import actionBG from "../../assets/Action.png";
import dramaBG from "../../assets/Drama.png";
import romanceBG from "../../assets/Romance.png";
import thrillerBG from "../../assets/Thriller.png";
import WesternBG from "../../assets/Western.png";
import horrorBG from "../../assets/Horror.png";
import fantasyBG from "../../assets/Fantasy.png";
import musicBG from "../../assets/Music.png";
import fictionBG from "../../assets/Fantasy.png"


export  function GenrePage() {
  const [genres, setSetGenres] = useState([
    {
      title: "Action",
      bgImage:actionBG,
    },
    {
      title: "Drama",
      bgImage:dramaBG,
    },
    {
      title: "Romance",
      bgImage:romanceBG,
    },
    {
      title: "Thriller",
      bgImage:thrillerBG,
    },
    {
      title: "Western",
      bgImage:WesternBG,
    },
    {
      title: "Horror",
      bgImage:horrorBG ,
    },
    {
      title: "Fantasy",
      bgImage:fantasyBG,
    },
    {
      title: "Music",
      bgImage:musicBG,
    },
    {
      title: "Fiction",
      bgImage:fictionBG,
    },
  ]);
  const [selectedGenres, setSelectedGenres] = useState([1, 3, 5]);
  return <div>Genrepage</div>;
  
}
export default GenrePage;
