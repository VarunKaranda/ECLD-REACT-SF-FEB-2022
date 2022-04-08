import styles from "./App.module.css";
import Players from "./components/Players";

const squad = [
  {
    name: "Wan Bisakka",
    src: "/Manutd/BISAKKA.jpg",
    alt: "Wan Bisakka",
    position: "Right Back",
    rating: "4.1⭐",
    country: "England",
  },
  {
    name: "Bruno Fernandes",
    src: "/Manutd/BRUNO.jpg",
    alt: "Bruno Fernandes",
    position: "Attacking Midfielder",
    rating: "4.4⭐",
    country: "Portugal",
  },
  {
    name: "Edinson Cavani",
    src: "/Manutd/CAVANI.jpg",
    alt: "Edinson Cavani",
    position: "Central Forward",
    rating: "4.6⭐",
    country: "Uruguay",
  },
  {
    name: "David Degea",
    src: "/Manutd/DEGEA.jpg",
    alt: "David Degea",
    position: "Goal Keeper",
    rating: "4.7⭐",
    country: "Spain",
  },
  {
    name: "Mason Greenwood",
    src: "/Manutd/MGW.jpg",
    alt: "Mason Greenwood",
    position: "Right Winger",
    rating: "4.1⭐",
    country: "England",
  },
  {
    name: "Victor Lindelof",
    src: "/Manutd/LINDELOF.jpg",
    alt: "Victor Lindelof",
    position: "Central Back",
    rating: "4.2⭐",
    country: "Sweden",
  },
  {
    name: "Harry Maguire",
    src: "/Manutd/MAGUIRE.jpg",
    alt: "Harry Maguire",
    position: "Central Back",
    rating: "4.2⭐",
    country: "England",
  },
  {
    name: "Paul Pogba",
    src: "/Manutd/POGBA.jpg",
    alt: "Paul Pogba",
    position: "Attacking Midfielder",
    rating: "4.5⭐",
    country: "France",
  },
  {
    name: "Marcus Rashford",
    src: "/Manutd/RASHFORD.jpg",
    alt: "Marcus Rashford",
    position: "Striker",
    rating: "4.2⭐",
    country: "England",
  },
  {
    name: "Cristiano Ronaldo",
    src: "/Manutd/CR7.jpg",
    alt: "Cristiano Ronaldo",
    position: "Central Forward",
    rating: "4.8⭐",
    country: "Portugal",
  },
  {
    name: "Jadon Sancho",
    src: "/Manutd/SANCHO.jpg",
    alt: "Jadon Sancho",
    position: "Left Winger",
    rating: "4.4⭐",
    country: "England",
  },
  {
    name: "Alex Telles",
    src: "/Manutd/TELLES.jpg",
    alt: "Alex Telles",
    position: "Left Back",
    rating: "4.3⭐",
    country: "Brazil",
  },
];

function App() {
  return (
    <>
      <div className={styles.row}>
        {
          squad.map((item) => {
          return (
            <Players
              name={item.name}
              src={item.src}
              alt={item.alt}
              position={item.position}
              rating={item.rating}
              country={item.country}
            />
          );
          })
        }
      </div>
    </>
  );
}

export default App;
