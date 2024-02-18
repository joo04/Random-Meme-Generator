const memeBtn=document.querySelector(".meme-btn");
const memeTitle=document.querySelector(".meme-title");
const memeImg=document.querySelector(".meme-generator img");
const memeAuthor=document.querySelector(".meme-author");

const generateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=>response.json())
    .then((data)=>{
        uploadDetails(data.title,data.url,data.author);
    });
};

const uploadDetails=(title,url,author)=>{
    memeTitle.innerHTML=title;
    memeImg.setAttribute("src",url);
    memeAuthor.innerHTML=author;
}

memeBtn.addEventListener("click",generateMeme);