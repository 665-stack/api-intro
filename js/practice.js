const stuInfo = JSON.stringify({ name: "James", roll: 3 });
console.log('1st -- ', stuInfo.name);
//==========
const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } }
const { brand } = premikas.cars;
console.log('2nd -- ', brand)
//================
const info = {
    data: [{ language: "Javascript", library: "React" }]
}
console.log('3rd', info.data[0].library)



