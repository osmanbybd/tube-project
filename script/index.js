const activeClassButton =()=>{
    const activeButtons = document.getElementsByClassName("active");
    for(let btn of activeButtons){
        btn.classList.remove("active");
    }
}


const loadCategotis =async () =>{


   const respons = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories');
   const data = await respons.json();
   displayCategoris(data.
    categories)
}

const loadVedios = (searchText = "") =>{
     fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then (respons=>respons.json())
    .then((data)=>{
        activeClassButton();
       document.getElementById("btn-all").classList.add("active");
        displayVedios(data.videos)
    })
}

const loadCategoiViedo = (id) =>{
    // console.log(id)
    const url =`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    console.log(url);
    
     fetch(url)
    .then(respons=> respons.json()) 
    .then((data)=>{
        activeClassButton();
       const clickButton = document.getElementById(`btn-${id}`);
       clickButton.classList.add("active")
        displayVedios(data.category)
    });
    
}

const displayCategoris = (categori) =>{
    const ccategoriContainer = document.getElementById("categori-container");

    for(let cat of categori){
        const containerdiv = document.createElement("div");
        containerdiv.innerHTML = `
         <button id="btn-${cat.category_id}" onclick='loadCategoiViedo(${cat.category_id})' class="btn text-base font-medium  hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;
        ccategoriContainer.appendChild(containerdiv);
        
    }
}

const displayVedios = (cateviedos) =>{
    const viedoContainer = document.getElementById("viedo-container");
    viedoContainer.innerHTML= "";

    if(cateviedos.length === 0){
        viedoContainer.innerHTML= `
        <div class="col-span-full flex flex-col text-center justify-center items-center py-8 gap-4">
            <img class="w-40" src="./assets/Icon.png" alt="">
            <h1 class="text-3xl font-semibold">Oops!! Sorry, There is no content here</h1>
           </div>
        `;
        return;
    }
    cateviedos.forEach(video => {
        const viedoDiv = document.createElement("div");

        // console.log(video)
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
                            <div class="w-10 rounded-full">
                              <img src="${video.authors[0].profile_picture}" />
                            </div>
                          </div>
                    </div>
                    <div class="intro">
                        <h1 class="text-xl font-semibold ">${video.title}</h1>
                        <p class="text-gray-400 text-sm flex  gap-1">${video.authors[0].profile_name} 
                        ${video.authors[0].verified == true ? `<img class="w-4 h-4" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : ``} 
                        </p>
                        <p class="text-gray-400 text-sm">${video.others.views} views</p>
                    </div>
                </div>
                <button onclick=loadingViedoDetails('${video.video_id}') class="btn btn-block">show details</button>
                </div>
                
        `;
         viedoContainer.appendChild(viedoDiv);

        
    });

}

 const loadingViedoDetails =(videoId)=>{
    console.log(videoId)
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/aaac`;
    fetch(url)
    .then(res => res.json())
    .then((data) => displayVideoDetails(data.video))
    
 }

 const displayVideoDetails =(video)=>{
     console.log(video)

    document.getElementById("vidoe_details").showModal();
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
    <div class="card bg-base-100 image-full w-96 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      
    </div>
  </div>
</div>
    `;
 }

document.getElementById("search-input").addEventListener("keyup",(e)=>{

    const input = e.target.value;
    loadVedios(input)
    
})

loadCategotis()

