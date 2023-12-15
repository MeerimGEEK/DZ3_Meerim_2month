var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var countTag = {}

for (var i = 0; i < tags.length; i++ ) {
    var noTags = tags[i]

    if (countTag[noTags]) {
        countTag[noTags] += 1
    } else {
        countTag[noTags] = 1
    }
}
console.log(countTag)


var names = ["name", "John", "lastname", "Black","age", "23"]
var results = {}

for (var i = 0; i < names ; i+=2 ) {
    var key = names[i]
    var value = names[i + 1]
    results[key] = value
}
console.log(results)

function getDataType(value) {
    console.log(typeof value)
}

getDataType(false)
getDataType("HELLO WORLD!")
getDataType(42)