
//https://picsum.photos/
const linkup = document.querySelector('#linkbtn');
const upfrompc = document.querySelector('#fileup');
const show = document.querySelector('.container');


//-----img collect from link--------

function srcCollect(e) {
    let link = document.getElementById('url').value;

    getMeta(link);
   
    document.getElementById('url').value='';
}
//---------------get img height width----------------

function getMeta(url) {

    let img = new Image();
    img.src = url;
    img.onload = function () {
        show.innerHTML += `<div class="item" id="zoom">
            <img src="${img.src}" alt="uploaded img" width="${this.width}" height="${this.height}">
            <button id="btn">Delete</button>
            </div>`;
    }
};
linkup.addEventListener('click', srcCollect);

/*------upload Item  from  pc-----*/

function readURL(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {

            show.innerHTML += `<div class="item" id="zoom">
            <img src="${e.target.result}" alt="uploaded img" width="${this.width}" height="${this.height}">
            <button id="btn">Delete</button>
            </div>`;
        }
        reader.readAsDataURL(input.files[0]);
    }
    document.getElementById('pc').value='';
}

/*------Delete Item-----*/

let dltItem = document.querySelector('.container .btn');


 window.addEventListener('click',function(e){
     if(e.target.id == 'btn'){
        console.log(e.target);
        let l = e.target;
        let p = l.parentElement;
        p.remove();
     }
    
});




    




