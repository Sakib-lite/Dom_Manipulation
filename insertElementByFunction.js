let p1=createElement('p','lead','My name is Sakib')
let p2=createElement('p','lead','My name is Rakib')

let parentDiv=document.createElement('div')
append(parentDiv,[p1,p2])

function createElement(tagName,className,attrs) {
let tag=document.createElement(tagName)
tag.className=className||''
tag.innerHTML=attrs||''
return tag
}
function append(parentDiv,children){
children.forEach(child => parentDiv.append(child))     
}
console.log(parentDiv)