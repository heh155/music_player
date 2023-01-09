console.log("welcome to music player")
let audioelement=new Audio('/audio/1.mp3')

let masterplay = document.getElementById('masterplay')
let mp = document.getElementById('mp')
let progressbar=document.getElementById('pb')
let index=0;
let songitems = Array.from(document.getElementsByClassName('songitems'));
let songs=[
    {songname:"Under the Influence",filePath:"/audio/1.mp3"},
    {songname:"Najaa",filePath:"/audio/2.mp3"},
    {songname:"Dil Bechara",filePath:"/audio/3.mp3"},
    {songname:"Its You",filePath:"/audio/4.mp3"},
    {songname:"As it Was",filePath:"/audio/5.mp3"},
    {songname:"Kesariya",filePath:"/audio/6.mp3"},
    {songname:"One Dance",filePath:"/audio/7.mp3"},
    {songname:"Senorita",filePath:"/audio/8.mp3"},
    {songname:"No Love",filePath:"/audio/9.mp3"},
    {songname:"The Hills",filePath:"/audio/10.mp3"},
]
songitems.forEach((e,i)=>{
    console.log(e,i);
    e.getElementsByClassName("mp")[0].innerText=songs[i].songname;
})

masterplay.addEventListener('click',()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
    }else{
        audioelement.pause();
    }
})

audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progess=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progess)
    progressbar.value=progess
})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})


Array.from(document.getElementsByClassName('mp')).forEach((e)=>{
    e.addEventListener('click',(q)=>{
        index=parseInt(q.target.id)
        audioelement.src=`/audio/${index}.mp3`;
        audioelement.currentTime=0; 
        audioelement.play();
    })
   
})


document.getElementById('next').addEventListener('click',()=>{
    if(index>=10){
        index=1;
    }else{
        index+=1;
    }
    audioelement.src=`/audio/${index}.mp3`;
    audioelement.currentTime=0; 
    audioelement.play();
})
document.getElementById('pre').addEventListener('click',()=>{
    if(index<=1){
        index=10;
    }else{
        index-=1;
    }
    audioelement.src=`/audio/${index}.mp3`;
    audioelement.currentTime=0; 
    audioelement.play();
})