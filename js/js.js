            const preload=document.querySelector(".preload")
            const main=document.querySelector(".main")
            const container=document.querySelector(".row--container")
            const containerMainImg=document.querySelectorAll(".main__images")
            const partOfPhoto=document.querySelectorAll(".partOfPhoto")
            const firstiimages=containerMainImg[0].getBoundingClientRect().height
            const sliders=document.querySelectorAll(".section")
            const previousbtn=document.querySelector(".previous")
            const nextBtn=document.querySelector(".next")
            const typedot=document.querySelector(".type-dot")   
            const slideContainer=document.querySelector(".slideContainer")
            const slideSections=document.querySelectorAll(".slideSection")
            const slide=document.querySelectorAll(".slide")
            const btnLeft=document.querySelector(".slider__btn--left")
            const btnRight=document.querySelector(".slider__btn--right")
            const slideup=document.querySelectorAll(".row")
            const buger=document.querySelector(".buger")
            const verticalbar=document.querySelector(".vertical-nav")
            // const darkerNav=document.querySelector(".darker-nav")
            
        
            
        // loading img
        window.addEventListener('load', (event) => {
        preload.style.display="none"
          });
        //
          //buger//
          buger.addEventListener("click",function(){
            verticalbar.classList.toggle("hidden")
            verticalbar.style.left="0"
            // darkerNav.classList.toggle("hidden")
          })

        //scroll animation//
        let tl=gsap.timeline({
          scrollTrigger:{
            trigger:".home",
            start:"0%",
            end:"30%",
            scrub:1 ,
          },
        });

        let t2=gsap.timeline({
          scrollTrigger:{
            trigger:".home",
            start:"0%",
            end:"10%",
            scrub:1 ,
          },
        });

        t2.fromTo('.navBar__logo',{x:250,y:410,scale:3},{x:0,y:-35,scale:1});
        tl.fromTo('.main--tittle',{scale:2.5},{scale:0.5,opacity:0});

        // scroll show//
        const oberF=function(entries,observe) {
          const [entry]=entries
          console.log(entry)
          if(entry.isIntersecting) {
          entry.target.classList.remove("hidden")
          }else{
            entry.target.classList.add("hidden")
          }
        
      }
         
        const obsever=new IntersectionObserver(oberF,{
          root:null,
          threshold:0.01
        })
        slideup.forEach(function(section){
          obsever.observe(section)
          section.classList.add("hidden")
        })

        const oberF2=function(entries,observe2) {
          const [entry]=entries
          console.log(entry)
          if(entry.isIntersecting) {
          entry.target.classList.remove("hidden")
          }else{
            entry.target.classList.add("hidden")
          }
        
      }
         
        const obsever2=new IntersectionObserver(oberF2,{
          root:null,
          threshold:0.01
        })
        slideSections.forEach(function(section){
          obsever.observe(section)
          section.classList.add("hidden")
        })

    
       

      //slider//

      
      let currSlide=0
      let slideLimit=slide.length
      console.log(`this is length ${slideLimit}`)
      slideSections.forEach((slide,i)=>
        slide.style.transform=`translateX(${200 * i}%)`);
       
        
        //slide right//
        btnRight.addEventListener("click",function(){
          if(currSlide>=slide.length-1){
            currSlide=0
          }
         else{
          currSlide++
         }
          console.log(`this is curr ${currSlide}`)
        slideSections.forEach((slide,i)=>
        slide.style.transform=`translateX(${200*(i
          -currSlide)}%)`);
        });
       

        //slide left//
        btnLeft.addEventListener("click",function(){
          if(currSlide<=0){
            currSlide=slideLimit-1
          }else{
            currSlide--
          }
        slideSections.forEach(function(slide,i){
          console.log(`this is curr ${currSlide}`)
        slide.style.transform=`translateX(${200 *(i-currSlide)}%)`
        })
    })
