 const input_El = document.getElementById("inputEl")
 const save_El = document.getElementById("saveEl")
 const Ul_El = document.getElementById("UlEl")
 const del_El = document.getElementById("btn-delete")
 const btn_tab = document.getElementById("btn-tab")
 let MyPages = []



 // to convert the string variable pages to an array and store it in "pagesFromLocalStorage"
 const pagesFromLocalStorage = JSON.parse(localStorage.getItem("MyPages"))
 console.log(pagesFromLocalStorage)


//  conditional to validate if pagesFromLocalStorage is null or has elements inside array, 
//  if has elements inside array pages will be equals to pagesFromLocalStorage to show the 
//  values that has store inside localStorage in the website 
 if(pagesFromLocalStorage){
    
   MyPages=pagesFromLocalStorage
   show(MyPages)
 }

 


btn_tab.addEventListener("click", function(){

   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

      MyPages.push(tabs[0].url)
      localStorage.setItem("MyPages", JSON.stringify(MyPages))
      show(MyPages)

   })
})

 function show(pages){
   let pagesArray = ""
   for(let i =0; i<pages.length; i++){


    pagesArray += `
    <li>
        <a href='${pages[i]}' target='_blank'>

        ${pages[i]}
        
        <br> </br>

        </a> 
    
    </li>
    
    
    `
    
    
   }
   Ul_El.innerHTML = pagesArray
}



del_El.addEventListener ("dblclick",function(){

   localStorage.clear()
   MyPages = []
   show(MyPages)
})



 save_El.addEventListener ("click",function(){
    MyPages.push(input_El.value)
    input_El.value = ""
    //to save what i already have inside array array "pages" in localStorage but converted in string  
    localStorage.setItem("MyPages", JSON.stringify(MyPages))
    show(MyPages)
   
    //to verify that it works:
    console.log(localStorage.getItem("MyPages"))
    
 })

 
 
