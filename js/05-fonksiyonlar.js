// // function merhaba(name = "Bilgi Yok",age = "Bilgi Yok"){

// //        if (typeof name === "undefined") name = "Bilgi Yok";
// //        if (typeof age === "undefined") age = "Bilgi Yok";

// //     console.log(`İsim:${name} Yaş:${age} Hoşgeldiniz!` )
// // }

// // merhaba("Adnan",25)

// // merhaba("Kadir")

// function square(x){
//     return x*x
// }

// function cube(x){
//     console.log(x*x*x)
// }

const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi")
    },
    get: function(){
        console.log("Elde Edildi")
    },
    update: function(id){
        console.log(`ID: ${ıd} güncellendi`)
    },
    delete: function(id){
        console.log(`ID: ${ıd} silindi`)
    }
}

