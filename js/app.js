// JavaScript Object Notation
// JSON
const user = { id: 112, name: 'mahmodul shahin', job: 'web developer' };
const stringified = JSON.stringify(user);
// console.log('user -- ', user)
// console.log('stringified -- ', stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir road',
    profit: 15000,
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    products: ['laptop', 'mobile', 'headphone'],
    isExpensive: false,
}
const shopStringified = JSON.stringify(shop);
// console.log('shop -- ', shop)
console.log('shopStringified -- ', shopStringified);
const converted = JSON.parse(shopStringified)
console.log('converted -- ', converted)