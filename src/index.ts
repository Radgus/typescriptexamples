const animes: string[] = ['azul','verde','rojo'];

interface verdad {
  [key: string]: boolean;
}

const animeObject = Array.from(animes, anime => {
  const algo: verdad = {};
  algo[anime] = true
  return algo
});

console.log('animeObject :', animeObject);
