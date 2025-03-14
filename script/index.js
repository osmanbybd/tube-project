const loadCategotis =async () =>{

   const respons = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
   const data = await respons.json();
   displayCategoris(data.
    categories)
}

const loadVedios =async () =>{
    const respons =await fetch('https://openapi.programming-hero.com/api/phero-tube/videos');
    const data = await respons.json();
    displayVedios(data.videos
    )
}


const displayCategoris = (categori) =>{
    const ccategoriContainer = document.getElementById("categori-container");

    for(let cat of categori){
        const containerdiv = document.createElement("div");
        containerdiv.innerHTML = `
         <button class="btn text-base font-medium  hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        ccategoriContainer.appendChild(containerdiv);
        
    }
}

const displayVedios = (cateviedos) =>{
    const viedoContainer = document.getElementById("viedo-container");
    cateviedos.forEach(video => {
        const viedoDiv = document.createElement("div");

        console.log(video)
        viedoDiv.innerHTML = `
        
        <div class="card bg-base-100 shadow-sm">
        <figure>
            <img
            src="${video.thumbnail}" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
                
        `;
         viedoContainer.appendChild(viedoDiv);

        
    });

}





loadCategotis()

loadVedios()
