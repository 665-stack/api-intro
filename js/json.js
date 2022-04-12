// JavaScript Object Notation
// JSON
// server e data padhanor jonno JSON stringify() use korte hoy.
// and server theke stringify abosthay anar por shetake normal code anar jonno  JSON parse() use korte hoy.
const user = { id: 112, name: 'mahmodul shahin', job: 'web developer' };
const stringified = JSON.stringify(user);
// console.log('user -- ', user)
// console.log('stringified -- ', stringified);
// ======== another example =======
const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    owner: {
        name: 'Alia  Bhatt',
        profession: 'actor'
    },
    products: ['laptop', 'mobile', 'headphone'],
    isExpensive: false,
}
const shopStringified = JSON.stringify(shop);
// console.log('shop -- ', shop)
console.log('shopStringified -- ', shopStringified);
const converted = JSON.parse(shopStringified)
console.log('converted -- ', converted);
console.log('product -- ', converted.products);