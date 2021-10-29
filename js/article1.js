                const sections=document.querySelectorAll(".section")
                const goTop=document.querySelector(".go_top")
                const section3=document.querySelector(".section3")
                const sectionHeader=document.querySelector(".tittle ").getBoundingClientRect()
                const images=document.querySelectorAll(".img--blur")
                

                console.log(images)
                //whole page //
                const oberF=function(entries,observe) {
                const [entry]=entries
                if(entry.isIntersecting) {
                 entry.target.classList.remove("hidden")
                }
                  
                }
                   
                  const obsever=new IntersectionObserver(oberF,{
                    root:null,
                    threshold:.1
                  })
                  sections.forEach(function(section){
                    obsever.observe(section)
                    section.classList.add("hidden")
                  })

                  //section3
                  const observer2=new IntersectionObserver(entries=>{
                    const [entry]=entries
                    console.log(entry)
                   if(entry.isIntersecting){
                    goTop.style.position="flexed"
                   }
                  },{
                      root:null,
                      threshold:1,
                  })
                  observer2.observe(section3)
                  

                  //
                 
                  goTop.addEventListener("click",function(){
                    const sectionHeaderTop=sectionHeader.top
                    window.scrollTo( { top:sectionHeaderTop , behavior: 'smooth' }) 
                  })

                const swiper = new Swiper(".mySwiper", {
                spaceBetween: 0.1,
                lazy: true,
                centeredSlides: true,
                autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                spaceBetween:0
                },
            });
            const imagesOption={}
            
            let observer3=new IntersectionObserver((entries)=>{
              entries.forEach(entry=>{
                if(!entry.isIntersecting)return;
                const image=entry.target;
                const newSrc=image.src.replace("blur","")
                console.log(newSrc)
                image.src=newSrc;
                console.log(image)
              })
            },imagesOption)
            
            images.forEach(image=>{
              observer3.observe(image)
            })