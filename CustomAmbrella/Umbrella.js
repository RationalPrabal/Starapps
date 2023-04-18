//! Selecting all the required elements

let logoInput= document.querySelector("#uploader>input")
let umbrella = document.querySelector("#umbrella")
let uploader= document.querySelector("#uploader div")
let loader= document.querySelector("#loader")
let uploadLoader=document.querySelector("#uploadLoader")
let uploadIcon= document.querySelector("#uploadIcon")

let logo;

//! what should be happening when user uploads or changes the logo.
//! it is an onChange event and a function is being invoked here after changing or updating the logo

logoInput.addEventListener("change",changeLogoFunction)


function changeLogoFunction(){

    let brandLogo=document.querySelector("#brandLogo")

    //! taking the file uploaded by the user
    logo= logoInput.files[0]
    
    //! making loaders visible and umbrella and upload icon display none
    umbrella.style.display="none"
    loader.style.display="inline"
    uploadLoader.style.display="inline"
    uploadIcon.style.display="none"
    brandLogo ? brandLogo.style.display="none":""
    
    
    //! Providing delay of 2 seconds to show the progress, since we are not making any api calls
    setTimeout(()=>{
    
        //! showing the umbrella and upload icon and hiding the loaders
        umbrella.style.display="inline"
        loader.style.display="none"
        uploadLoader.style.display="none"
    uploadIcon.style.display="inline"
    
    //! changing the text of upload button and replacing it with the File Name
    
        let fileName= document.querySelector("#uploader  h4")
        fileName.innerText=logo.name
    
    //! Showing the logo at the bottom of the umbrella
    
        const previewURL=URL.createObjectURL(logo)
        let imageDiv= document.querySelector("#imageDiv")

    
        //! creating image tag for the logo
        let image= document.createElement("img")
        image.setAttribute('id', 'brandLogo');
        image.src=previewURL
    
        //! all the necessary css for the logo
        image.style.position="absolute"
        image.style.width="70px"
        image.style.bottom="30px"
        image.style.right="45%"
    
        //! appending it into the box containing umbrellla image
        imageDiv.append(image)
    },2000)
    
}


//! How theme should be changed when user we click over the theme buttons.

let blueThemePicker= document.querySelector('#blue')

blueThemePicker.addEventListener("click",function(){

    document.body.style.backgroundColor="#B9E9FC" 
    umbrella.src="resources/Blue umbrella.png"            
    uploader.style.backgroundColor="#00a3e0"             
})

let pinkThemePicker= document.querySelector('#pink')

pinkThemePicker.addEventListener("click",function(){
  
   document.body.style.backgroundColor="rgba(226, 51, 179, 0.2)"
   umbrella.src="resources/Pink umbrella.png"
   uploader.style.backgroundColor="#d8318a"
})

let yellowThemePicker= document.querySelector('#yellow')

yellowThemePicker.addEventListener("click",function(){
  
   document.body.style.backgroundColor="#FFFBEB"
   umbrella.src="resources/Yello umbrella.png"
   uploader.style.backgroundColor="#fed141"
})
