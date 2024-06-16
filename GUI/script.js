// ----------------------- Home ----------------------

const header = document.querySelector("header")
    window.addEventListener("scroll",function(){
        x = window.pageYOffset
        // console.log(x)
        if(x > 0){
            header.classList.add("sticky")
        }
        else{
            header.classList.remove("sticky")
        }
    })


    const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
    const imgContainer = document.querySelector(".aspect-ratio-169")
    const dotItem = document.querySelectorAll('.dot')
    let imageNumber = imgPosition.length
    let index = 0

    imgPosition.forEach(function(image,index){
        image.style.left = index*100 + '%'
        dotItem[index]. addEventListener('click',function(){
            slider(index)
        })
    })


    function imgSlide (){
        index++ ;
        console.log(index)
        if(index >= imageNumber) {index  = 0}
        slider(index)
    }
    function slider (index){
        imgContainer.style.left = "-" + index*100 + "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove('active')
        dotItem[index].classList.add('active')
    }


    setInterval(imgSlide,5000)

// ----------------------- item-SlideBar-Category ----------------------

const itemslideBar = document.querySelectorAll(".category-left-li") 
itemslideBar.forEach(function(menu,index){
    menu.addEventListener("click" ,function(){
        menu.classList.toggle("block")
    })
})

// ----------------------- Product ----------------------

const largeImg = document.querySelector('.product-content-left-large-img img')
const smallImg = document.querySelectorAll('.product-content-left-small-img img')

smallImg.forEach(function(imgItem,x){
    imgItem.addEventListener('click', function(){
        largeImg.src = imgItem.src
    })
})



const protect = document.querySelector('.protect')
const detail = document.querySelector('.detail')

if (protect) {
    protect.addEventListener("click", function(){
        document.querySelector('.product-content-right-bottom-content-detail').style.display ='none'
        document.querySelector('.product-content-right-bottom-content-protect').style.display ='block'
    })
}
if (detail) {
    detail.addEventListener("click", function(){
        document.querySelector('.product-content-right-bottom-content-detail').style.display ='block'
        document.querySelector('.product-content-right-bottom-content-protect').style.display ='none'
    })
}

const button = document.querySelector('.product-content-right-bottom-top')
if (button) {
    button.addEventListener("click", function() {
        document.querySelector('.product-content-right-bottom-content-large').classList.toggle('activeB')
    })
}