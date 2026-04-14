// java script idk man

console.log("Man how do I even do this\n")
console.log("Script loaded!")


let imagePool = []

function getImages() {
    console.log("Loading images...")
    imagePool = [
        { url: 'https://www.belleayre.com/wp-content/uploads/sites/5/2024/12/BelleTrailMap-24-25-02-1.jpg', answer: 'BelleayreTest' },
        { url: 'https://www.skiresort.info/fileadmin/_processed_/ae/e9/99/90/18b9791257.jpg', answer: 'RevelstokeTest' },
        { url: 'https://scene7.vailresorts.com/is/image/vailresorts/20250204_WB_top-of-world-routes_map_001?wid=3800&hei=2528&resMode=sharp2', answer: 'WhistlerTest'},
    ];
    console.log("Images loaded!")
    return imagePool;
}


//All data/stats/facts are sourced from onthesnow.com
getImages();
const answerPool = [
    {
        'name': "Belleayre",
        'country': "United States",
        'region': "East Coast",
        'state': "New York",
        'summit': "3,429 ft",
        'vertical': "1,404 ft",
        'trails': 62,
        'acreage': 175,
        'lifts': 8,
        'image': imagePool[0],
    },
    {
        'name': "Revelstoke",
        'country': "Canada",
        'region': "West Coast",
        'state': "British Colombia",
        'summit': "7,300 ft",
        'vertical': "5,620 ft",
        'trails': 42,
        'acreage': 3121,
        'lifts': 5,
        'image': imagePool[1],
    },
    {
        'name': "Whistler-Blackcomb",
        'country': "Canada",
        'region': "West Coast",
        'state': "British Colombia",
        'summit': "7,490 ft",
        'vertical': "5,280 ft",
        'trails': 295,
        'acreage': 8171,
        'lifts': 26,
        'image': imagePool[2],
    },
]


console.log(imagePool.length);
function selectRandomTarget() {
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    return imagePool[randomIndex];
}
selectRandomTarget();
let currentTarget = selectRandomTarget();

console.log(currentTarget);
//
// function chooseImageOfDay() {
//     const now = new Date();
//     console.log(now.getDate());
//     console.log(now);
//     if (now.getDate() > now.getDate()) {
//         console.log("Day changed")
//     }
// }

// getImages();
// chooseImageOfDay();