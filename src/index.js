fetch ('http://localhost:3000/ramens')
.then((res)=>res.json())
.then ((data)=> {data.forEach(ramen=> addRamen(ramen))})

let ramenMenuDiv = document.querySelectorAll("#ramen-menu")

function addRamen(ramen){
let ramenDetailImg = document.querySelector(".detail-image")
let ramenDetailName = document.querySelector(".name")
let ramenDetailRestaurant = document.querySelector(".restaurant")
let ramenDetailRating = document.querySelector("#rating-display")
let ramenDetailComment= document.querySelector("#comment-display")
let ramenMenuDiv = document.querySelector("#ramen-menu")
let ramenImg = document.createElement("img")
    ramenImg.src=ramen.image
ramenMenuDiv.append(ramenImg)
    ramenImg.addEventListener("click", ()=>{
        ramenDetailImg.src = ramen.image
        ramenDetailName.textContent = ramen.name
        ramenDetailRestaurant.textContent = ramen.restaurant
        ramenDetailRating.textContent = ramen.rating
        ramenDetailComment.textContent = ramen.comment
    })
}

const ramenForm = document.querySelector("#new-ramen")
ramenForm.addEventListener("submit", (e)=> {
    e.preventDefault()

    let newRamenName = ramenForm.getElementsByTagName("input")[0].value
    let newRamenRestaurant = ramenForm.getElementsByTagName("input")[1].value
    let newRamenImage = ramenForm.getElementsByTagName("input")[2].value
    let newRamenRating = ramenForm.getElementsByTagName("input")[3].value
    let newRamenComment = ramenForm.querySelector("#new-comment").value
    
    let newRamen = {
        name: newRamenName ,
        restaurant: newRamenRestaurant ,
        image: newRamenImage , 
        rating: newRamenRating ,
        comment: newRamenComment 
    }
    addRamen(newRamen)
})



