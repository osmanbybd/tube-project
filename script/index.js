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

const loadCategoiViedo =(id) =>{
    console.log(id)
}

const displayCategoris = (categori) =>{
    const ccategoriContainer = document.getElementById("categori-container");

    for(let cat of categori){
        const containerdiv = document.createElement("div");
        containerdiv.innerHTML = `
         <button onclick='loadCategoiViedo(${cat.category_id})' class="btn text-base font-medium  hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
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
                <figure class="relative">
                    <img class= "w-full h-[250px]"
                    src="${video.thumbnail}" />
                    <span class="absolute bottom-2 right-2 bg-black  text-gray-300 px-2 text-sm rounded-sm">3hrs 56 min ago</span>
                </figure>

                <div class="flex px-0 py-5 gap-5 items-center">
                    <div class="profile">
                        <div class="avatar">
                            <div class="w-15 rounded-full">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                    </div>
                    <div class="intro">
                        <h1 class="text-xl font-semibold ">${video.title}</h1>
                        <p class="text-gray-400 text-sm flex  gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                        <p class="text-gray-400 text-sm">${video.others.views} views</p>
                    </div>
                </div>
                </div>
                
        `;
         viedoContainer.appendChild(viedoDiv);

        
    });

}





loadCategotis()

