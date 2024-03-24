#!/usr/bin/env node

const yargs=require("yargs");
const {argv}=yargs(process.argv);

const pokimoves=async (pokimonName)=>{
    const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokimonName}`);
    const jdata=await data.json();
    
    let moves=jdata.moves.map(({move})=>move.name);
    moves=moves.slice(0,5);
    console.log(moves);

}

pokimoves(argv.pokimon);