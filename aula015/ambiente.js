let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`) 

num[5] = 7
console.log(num)

num.push(1)
console.log(num)

num[2] = 6
console.log(num)

console.log(`O vetor tem ${num.length} posições`)

num.sort()
console.log(num)