const linkup = document.querySelector('#linkbtn');
const upfrompc = document.querySelector('#fileup');
const show = document.querySelector('.container');

//-----img collect from link--------

function srcCollect(e) {
    let link = document.getElementById('url').value;
    console.log("userlink:" + link);
    getMeta(link);
}
//---------------get img height width----------------

function getMeta(url) {

    var img = new Image();
      img.src = url;
    img.onload = function () {
        show.innerHTML += `<div class="item">
            <img src="${img.src}" alt="uploaded img" width="${this.width}" height="${this.height}">
            </div>`;
        console.log("inner html:" + show.innerHTML);
    }
  

};
linkup.addEventListener('click', srcCollect);








//-----img upload  from pc--------

/*function imgCollect(e) {
    const pcimg = document.getElementById('pc');
    console.log(pcimg);
    show.innerHTML+= `<div class="item">
    <img src="${e.src}" alt="uploaded img" width="${this.width}" height="${this.height}">
    </div>`;
}
upfrompc.addEventListener('click', imgCollect);*/

function readURL(input){
    if(input.files && input.files[0]){
        let reader = new FileReader();
        reader.onload = function(e){
            console.log(e);
            show.innerHTML+= `<div class="item">
            <img src="${e.target.result}" alt="uploaded img" width="${this.width}" height="${this.height}">
                         </div>`;
        }
        reader.readAsDataURL(input.files[0]);
    }
}
