import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'
import Title from './components/Title'
import Filter from './components/Filter'



const TabCaracters = [
{
  id : 1,
  img:"https://www.tomsguide.fr/content/uploads/sites/2/2022/07/netflix-the-witcher-3.jpg.webp",
  Name: "Géralt de Rive",
  descrip: "Geralt de Riv en polonais : Geralt z Rivii, aussi connu sous le nom de Loup blanc,il est sorceleur.",
  color: "red",
  type : "male",
  age : "40",
  poid : "80",
},

{
  id : 2,
  img:"https://www.tomsguide.fr/content/uploads/sites/2/2020/05/the-witcher-3-ciri.jpg",
  Name:"Ciri",
  descrip:"Ciri est une sorceleuse.",
  color: "blue",
  type : "Female",
  age : "40",
  poid : "60",
},
{
  id : 3,
  img:"https://www.tomsguide.fr/content/uploads/sites/2/2020/09/jaskier.jpg",
  Name:"Jaskier",
  descrip:"Jaskier est un Barde.",
  color: "blue",
  type : "male",
  age : "30",
  poid : "70",
},

{ 
  id:4,
  img:"https://images6.alphacoders.com/773/773084.jpg",
  Name:"Triss Merigold",
  descrip:"Triss Merigold est une sorcière.",
  color: "blue",
  type : "Female",
  age : "50",
  poid : "60",
},

{
  id:5,
  img:"https://static1.thegamerimages.com/wordpress/wp-content/uploads/2022/12/the-witcher-3-vesemir-mod.jpg?q=50&fit=contain&w=1140&h=570&dpr=1.5",
  Name:"Vésémir",
  descrip:"Vésémir est un Padré.",
  color: "blue",
  type : "male",
  age : "40",
  poid : "90",
},

{
  id:6,
  img:"https://cdn.akamai.steamstatic.com/steam/apps/370002/ss_4c485ae96035688946168813b1195c598695702f.1920x1080.jpg?t=1659619207",
  Name:"Yennefer de Vengerberg",
  descrip:"Yennefer de Vengerberg est une sorcière.",
  color: "blue",
  type : "Female",
  age : "100",
  poid : "55",
},

{
  id:7,
  img:"https://staticdelivery.nexusmods.com/images/952/20423129-1519904230.jpg",
  Name:"Eredin Bréacc Glas",
  descrip:"Eredin Bréacc Glas est un Boss.",
  color: "blue",
  type : "male",
  age : "100",
  poid : "100",
},

{
  id : 8,
  img:"https://static.wikia.nocookie.net/witcher/images/2/20/Tw3_journal_baron.png/revision/latest/scale-to-width-down/350?cb=20160702134425",
  Name:"Phillip Strenger",
  descrip:"Phillip Strenger est un Lord.",
  color: "blue",
  type : "male",
  age : "100",
},
];


const App = () => {
  const [filteredCharacters, setFilteredCharacters] = useState(TabCaracters);

  const handleFilter = () => {
    const maleCharacters = TabCaracters.filter((character) => character.type === "male");
    setFilteredCharacters(maleCharacters);
  };
  return (
    <>
      < Title />
     
        <div className='box2'>
          {TabCaracters.map((TabCaracters) => {
            return < Cards clef={TabCaracters} key={TabCaracters.id}/>
            })}
          {/* < Cards clef={TabCaracters[0]}/> */}
        </div>
        
        <div className="Filt">
        <Filter />
        </div>
    
    </>
  )
}

export default App;
