import React , { useState } from "react";
import styles from "../genre/GenrePage.module.css";
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
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [lengthWarning, setLengthWarning] = useState(false);
  
  const bgColors = [
		"#11B800",
		"#D7A4FF",
		"#11B800",
		"#84C2FF",
		"#902500",
		"#7358FF",
		"#FF4ADE",
		"#E61E32",
		"#6CD061",
	];
  const removeGenre = (index) => {
    console.log(index);
    const newGenres = selectedGenres.filter((item) => item !== index);
    setSelectedGenres(newGenres);

  };


  const selectGenre = (index) => {
		//one element will get added after the execution of this function
		if (selectedGenres.length == 2) {
			// in future, the length will become 3
			setLengthWarning(false);
		}
		// index  = 4
		setSelectedGenres([...selectedGenres, index]);
	};
  const handleNext = () => {
		if (selectedGenres.length < 3) {
			setLengthWarning(true);
		} else {
			setLengthWarning(false);
		}
	};


  return (
  <div className={styles.page}>
  <div className={styles.left}>
    <h2>Super app</h2>
    <h1>Choose your entertainment category</h1>
    {lengthWarning && <p>Minimum 3 category required</p>}
    <div className={styles.selected}>
      {selectedGenres.map((item)=>(
        <div key={item} className={styles.selectedGenre}>
          {genres[item].title}
             <button onClick={() => removeGenre(item)}>X</button>

          </div>

      ))}

    </div>

  </div>
  <div className={styles.right}>
    <div className={styles.genreGrid}>
    {genres.map((genre, index) => (
   <div
    key ={index} className={styles.genreCard}
    onClick={() => selectGenre(index)}
    style={{backgroundColor:bgColors[index]}}
  >
   {genre.title}

   <img src={genre.bgImage} alt="photo"/>
</div>
))}

  </div>
<button className={styles.next} onClick = {handleNext}>Next</button>

  </div>
  </div>
  );
  
}
export default GenrePage;
