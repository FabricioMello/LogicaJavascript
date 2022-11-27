import fetch from "node-fetch";
import md5 from "md5";
var timestamp = new Date().getTime();
let apiKey = '4cfecf8cc939c54878616532dcd6ac9f' //chave publica
let privateKey = 'f6683fa18a1a90aa6afd0ba0aea2914ce9ff9629'
let hash = md5(timestamp+privateKey+apiKey).toString()

export function listaHerois() {
    let url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
    return fetch(url)
}

