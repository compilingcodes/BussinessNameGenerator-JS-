let first,second,third;

let random=Math.random()
if(random<0.33){
    first="Crazy"
}
else if(random>=0.33 && random<0.66){
    first="Amazing"
}
else{
    first="Happy"
}

let random2=Math.random()

if(random2<0.33){
    second="19"
}
else if(random2>=0.33 && random2<0.66){
    second="65"
}
else{
    second="59"
}

let random3=Math.random()


if(random3<0.33){
    third="exe"
}
else if(random3>=0.33 && random3<0.66){
    third="Ltd"
}
else{
   third="Pvt"
}

console.log(`${first} ${second} ${third}`)

