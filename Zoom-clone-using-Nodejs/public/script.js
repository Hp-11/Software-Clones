
const vedioGrid = document.getElementById('vedio-grid');
console.log(vedioGrid);
const myVedio = document.createElement('vedio');
myVedio.muted=true;

let myVedioStream


navigator.mediaDevices.getUserMedia({
    vedio:true,
    audio: true
}).then(stream => {
    myVedioStream = stream;
    addVedioStream(myVedio, stream);
})

const addVedioStream = (vedio,stream)=> {
    vedio.srcObject = stream;
    vedio.addEventListener('loadedmetadata',()=>{
        vedio.play();
    })
    vedioGrid.append(vedio);
}