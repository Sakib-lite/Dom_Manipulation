let styleObject ={
color: 'red',
padding:'10px',
fontSize:'25px',
textDecoration:'none'


}
let listObject={
     backgroundColor:'black',
     padding:'10px'

}

// a tag
let a=document.getElementsByClassName('a-class')
let arr=[...a]
arr.forEach(li=> Object.assign(li.style,styleObject));


//li tag
let li=document.querySelectorAll('li');
let arr2=[...li]
arr2.forEach(list => Object.assign(list.style,listObject))