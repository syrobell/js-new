let value;
const programmer = {
    name : "Adnan Dedeoğlu",
    age : 25,
    email: "adnandedeogluu@gmail.com",
    langs : ["Python", "Java", "Javascript"],

    adress : {
        city : "Kahramanmaraş",
        street : "Bahçelievler"
    },

    work : function(){
        console.log("Programcı Çalışıyor...")
    }

}

value = programmer;
value = programmer.email;
value = programmer["email"];

value = programmer.langs
value = programmer.adress.city



console.log(value)