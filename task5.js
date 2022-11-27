import { listaHerois } from './task4.js'
import fs from "fs";
listaHerois()
.then(response => {
    return response.json()
})
.then(jsonParsed => {

    criaPasta('Characters')
    jsonParsed.data.results.forEach(({ name, id, description, modified }) => {
        fs.writeFile(`${process.cwd()}/Characters/${name}.JSON`, JSON.stringify({name, id, description, modified}), (err) => {
            if (err) throw err;
          console.log('O arquivo foi criado!');
        });
        criaPasta(`${process.cwd()}/Characters/${hero.name}`)
    })
})

function criaPasta(name){
    try {
        if (!fs.existsSync(name)) {
          fs.mkdirSync(name)
        }
      } catch (err) {
        console.error(err)
      }
}
// fs.writeFile(`./Characters.txt`, "conteúdo",
//     function (erro) {
//         if (erro) {
//             throw erro;
//         }
//         console.log("Arquivo salvo com sucesso!");
//     });