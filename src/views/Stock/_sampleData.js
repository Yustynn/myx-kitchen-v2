/** SAMPLE DATA
{
    category: 'Spaghetti',
    items: [
        {
            itemNum: 1,
            name: 'Ribeye Steak (wtf kd how is this spag?)',
            inStock: true
        }
    ]
}
*/

const MIN_PRICE = 1
const MAX_PRICE = 15
const NUM_ITEMS_PER_CATEGORY = 8
const IN_STOCK_PROBABILITY = 0.7

const CATEGORIES = [
    'Spaghetti',
    'Oreos',
    'Pizza',
    'Kady cookin',
    'Food',
    'Sushi'
];

const FOOD_BASE_NAMES = [
    'cellphone',
    'tortilla',
    'ice cream',
    'pizza',
    'prata',
    'gabriel',
    'rice',
    'kopi c',
    'gong cha',
    'nasi lemak',
    'ban mian',
    'chicken chop',
    'fried rice',
]

const PREFIX_MODIFIERS = [
    'Strawless',
    'Godly',
    'Somewhat okay',
    'Mint',
    'Above average',
    'Delicious',
    'Food-like',
    'Nearly edible',
    'Yos-approved'
]
const POSTFIX_MODIFIERS = [
    'of healing',
    '(Chris Poskitt version)',
    'made by Cheryl Chan',
    '(with straw)',
    'with curry',
    'with mayo',
    'by design',
    'lassi',
    'that only zoos likes',
    '(to save the environment)'
]

const choice = (arr) => {
    const { floor, random } = Math
    const idx = floor(arr.length * random())

    return arr[idx]
}
const genName = () => [PREFIX_MODIFIERS, FOOD_BASE_NAMES, POSTFIX_MODIFIERS]
    .map(choice)
    .join(' ')

const genPrice = () => {
    const { max, random } = Math
    const randomPrice = +(MAX_PRICE/10 * random()).toFixed(2) * 10
    const lowerBounded = max(MIN_PRICE, randomPrice)

    return lowerBounded.toFixed(2)
}

let itemNum = 0
const data = []

for (let category of CATEGORIES) {
    const items = []
    for (let i = 0; i < NUM_ITEMS_PER_CATEGORY; i++) {
        items.push({
            itemNum: ++itemNum,
            name: genName(),
            inStock: Math.random() < IN_STOCK_PROBABILITY,
            price: genPrice()
        })
    }

    data.push({
        category,
        items
    })
}

export default data
