"use strict";
const animes = ['azul', 'verde', 'rojo'];
const animeObject = Array.from(animes, anime => {
    const algo = {};
    algo[anime] = true;
    return algo;
});
console.log('animeObject :', animeObject);
