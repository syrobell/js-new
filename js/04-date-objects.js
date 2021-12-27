let value;

const now = new Date(); // Şu anki zamanı almamızı sağlar

const date1 = new Date("12-18-1996 08:30:00")

const date2 = new Date("December 18 1996")

const date3 = new Date("12/18/1996")

value = date1.getMonth()
value = now.getHours();


console.log(value)