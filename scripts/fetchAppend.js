const getData = async (url) =>{

   try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
   } catch (error) {
       console.log("error");
   }
};

const append = (data,parent) => {
    parent.innerHTML = null;

    data.forEach(({title,image,price}) => {

      

        let div = document.createElement("div");

        let t = document.createElement("p");
        t.innerText = title;

        let img = document.createElement("img");
        img.src = image;

       let p = document.createElement("div");
       p.innerText = price;

       div.append(img,p,t);
       parent.append(div);
    })
};

export {getData, append};