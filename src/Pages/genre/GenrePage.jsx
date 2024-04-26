import React , { useState } from "react";
// import Action from "..."

export  function GenrePage() {
  const [genres, setSetGenres] = useState([
    {
      title: "Action",
      bgImage:""
    },
    {
      title: "Drama",
      bgImage:""
    },
    {
      title: "Romance",
      bgImage:""
    },
    {
      title: "Thriller",
      bgImage:""
    },
    {
      title: "Western",
      bgImage:""
    },
    {
      title: "Horror",
      bgImage:""
    },
    {
      title: "Fantasy",
      bgImage:""
    },
    {
      title: "Music",
      bgImage:""
    },
    {
      title: "Fiction",
      bgImage:""
    },
  ]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  return <div>Genrepage</div>;
  
}
