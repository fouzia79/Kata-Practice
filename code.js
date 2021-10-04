function reverseWord(word) {
    results = word.split("").reverse().join("")
    console.log(results)
    return results
}


function test() {
    console.assert(reverseWord('kenzie') === 'eiznek', 'failed for kenzie :' + reverseWord('kenzie'))
    console.assert(reverseWord('greet') === 'teerg', 'failed for greet :' + reverseWord('greet'))
}
test()

function reverseSentence(str) {
    results = str.split(" ").reverse().join(" ")
    console.log(results)
    return results
}

function test1() {
    console.assert(reverseSentence('Student at kenzie Academy') === 'Academy kenzie at Student', 'error message:' + reverseSentence('Student at kenzie Academy'))
    console.assert(reverseSentence('open the developer tools') === 'tools developer the open', 'error message:' + reverseSentence('open the developer tools'))
}
test1()

function minimumValue(numbers) {
    let minNum = numbers.split(' ')
    minNum = Math.min.apply(Math, minNum)
    console.log(minNum)
    return minNum
}
function test2() {
    console.assert(minimumValue('1 3 9 15 11') === 1, 'error message:' + minimumValue('1 3 9 15 11'))
    console.assert(minimumValue('-7 -10 4 -12') === -12, 'error message:' + minimumValue('-7 -10 4 -12'))
}
test2()

function maximumValue(arrayNum) {
    let maxNum = arrayNum[0]
    for (let index = 0; index < arrayNum.length; index++) {
        if(typeof arrayNum[index] !== "number"){
            return NaN;
        }
         if(arrayNum[index] > maxNum){
             maxNum = arrayNum[index]
         } 

        console.log(maxNum)
        
    }
    return maxNum;
}
function test3() {
    console.assert(maximumValue([96, 54, 79, 60]) === 96, 'error message:' + maximumValue([96, 54, 79, 60]))
    console.assert(Number.isNaN(maximumValue(["light", "mango", "chair"])) === true, 'error message:' + maximumValue(["light", "mango", "chair"]))
}
test3()

function calculateRemainder(first, second) {
    let remainderNum = second % first
    console.log(remainderNum)
    return remainderNum;
}
function test4(remNum) {
    console.assert(calculateRemainder(2, 5) === 1, 'error message:' + calculateRemainder(2, 5))
}

test4()

function distinctValue(values) {
    let output = []
    let arrayValues = values.split(" ")
   for (let index = 0; index < arrayValues.length; index++) {
       let newValue = arrayValues[index];
       if(output.indexOf(newValue) === -1){
           output.push(newValue)
       }
    }
    return output.join(" ")
    /* const newValue = [new Set(values)]
        return newValue;*/
}
function test5() {
    console.assert(distinctValue("1 3 5 3 7 3 1 1 5") === '1 3 5 7', 'error message:' + distinctValue("1 3 5 3 7 3 1 1 5"))
    console.assert(distinctValue("3 6 2 2 1 1 4 5 5") === '3 6 2 1 4 5', 'error message:' + distinctValue("3 6 2 2 1 1 4 5 5"))
}
test5()




