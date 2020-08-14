const fs = require('fs');

//===========================================
//=======Calcula cantidad de objet===========
//===========================================

// fs.readFile("setsFinalSinMugre.json" , (err, data)=>{
//     let json = JSON.parse(data)
//     console.log(json.setsDofus.length) 
// })


//===========================================
//=====Elimina objetos sin atributos=========
//===========================================

// fs.readFile("setsFinal.json", (err, data) => {
//     let json = JSON.parse(data)
//     json.setsDofus.forEach((element,index) => {
//         if (element.caracteristicas.length == 0 && element.tipo != "Dofus") {
//             json.setsDofus.splice(index, 1)
//         }
//     });
//     fs.writeFile("setsFinal2.json", JSON.stringify(json), (err2) => {
//         if (err2) throw err;
//         console.log('Saved PartsSets!');
//     })
// })

//===========================================
//=====Elimina la ruta=========
//===========================================

fs.readFile("setsFinalSinMugre.json", (err, data) => {
    let json = JSON.parse(data)
    json.forEach((element) => {
        delete element["imagen"]
    });
    fs.writeFile("setsFinalSinRutas.json", JSON.stringify(json), (err2) => {
        if (err2) throw err;
        console.log('Saved PartsSets!');
    })
})

//===========================================
//=======Elimina objetos repetidos===========
//===========================================

// fs.readFile("sets copy.json" , (err, data)=>{
//     let json = JSON.parse(data)
//     json.setsDofus = removeDuplicates(json.setsDofus, "id")
//     fs.writeFile("sets copy.json", JSON.stringify(json), (err2) => {
//         if (err2) throw err;
//         console.log('Saved PartsSets!');
//     })
// })

// function removeDuplicates(originalArray, prop) {
//     var newArray = [];
//     var lookupObject  = {};

//     for(var i in originalArray) {
//        lookupObject[originalArray[i][prop]] = originalArray[i];
//     }

//     for(i in lookupObject) {
//         newArray.push(lookupObject[i]);
//     }
//      return newArray;
// }

