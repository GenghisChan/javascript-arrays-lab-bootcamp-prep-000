const app = "I don't do much."

let kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
 var moreKittens = kittens.push(name)
 return moreKittens
}

function removeLastKitten(){
  return kittens.slice(-1)
}

function removeFirstKitten(){
  return kittens.slice(1)
  
  
}