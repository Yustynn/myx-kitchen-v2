/** SAMPLE DATA
{
    category: 'Spaghetti',
    items: [
        {
            itemNo: 1,
            name: 'Ribeye Steak (wtf kd how is this spag?)',
            inStock: true
        }
    ]
}
*/

const NUM_ITEMS_PER_CATEGORY = 8
const IN_STOCK_PROBABILITY = 0.7

const CATEGORIES = [
    'Spaghetti',
    'Oreos',
    'Pizza',
    'Prata',
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
    'gong cha'
]

const PREFIX_MODIFIERS = [
    'Strawless',
    'Godly',
    'Somewhat okay',
    'Mint',
    'Above average',
    'Delicious',
    'Food-like',
    'Nearly edible'
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
    'with the blood of children'
]

const choice = (arr) => {
    const { floor, random } = Math
    const idx = floor(arr.length * random())

    return arr[idx]
}
const genName = () => [PREFIX_MODIFIERS, FOOD_BASE_NAMES, POSTFIX_MODIFIERS]
    .map(choice)
    .join(' ')

let itemNo = 0
const data = []

for (let category of CATEGORIES) {
    const items = []
    for (let i = 0; i < NUM_ITEMS_PER_CATEGORY; i++) {
        items.push({
            itemNo: ++itemNo,
            name: genName(),
            inStock: Math.random() < IN_STOCK_PROBABILITY
        })
    }

    data.push({
        category,
        items
    })
}

export default data
