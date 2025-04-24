
import { displayMediaPhotographer } from "./photographers.js";

const openFilterMenuBtn = document.querySelector(".fa-chevron-down")
const closeFilterMenuBtn = document.querySelector(".fa-chevron-up")
const filterMenu = document.querySelector(".select")
const allMaskedOptions = document.querySelectorAll(".option + .mask");

function openNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions) {
    openFilterMenuBtn.classList.add("mask")
    closeFilterMenuBtn.classList.remove("mask")
    filterMenu.setAttribute("aria-expanded", "true")
    filterMenu.classList.add("select_shadow")
    allMaskedOptions.forEach(option => {
      option.classList.remove("mask")
    })
    allMaskedOptions[0].querySelector("p").focus()
  }
  
  function closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions) {
    closeFilterMenuBtn.classList.add("mask")
    openFilterMenuBtn.classList.remove("mask")
    filterMenu.setAttribute("aria-expanded", "false")
    filterMenu.classList.remove("select_shadow")
    allMaskedOptions.forEach(option => {
      option.classList.add("mask")
    })
    openFilterMenuBtn.focus()  
  }
  
  export function manageNavigationSortMenu() {

  
    ["keydown", "click"].forEach((evenment) => {
      openFilterMenuBtn.addEventListener(evenment, (event) => {
        if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
          openNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
        }
      })
    });
  
    ["keydown", "click"].forEach((evenment) => {
      closeFilterMenuBtn.addEventListener(evenment, (event) => {
        if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
          closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
        }
      })
    }) 
  }
  
  export function manageSortGalery(artist, artistMedias) {
    const allOptionsTarget = document.querySelectorAll(".option p");
  
    allOptionsTarget.forEach((option) => {
      ["keydown", "click"].forEach((evenment) => {
        option.addEventListener(evenment, (event) => {
          if (evenment === "click" || (evenment === "keydown" && event.key === "Enter")){
            const allOptionsTarget = document.querySelectorAll(".option p");
            const firstOption = allOptionsTarget[0]
            const parentOption = option.parentElement
            const firstParentOption = firstOption.parentElement
            const sortKey = option.getAttribute("id")
  
            if(option != firstOption) {
              parentOption.appendChild(firstOption)
              firstParentOption.prepend(option)
              if (sortKey === "date") {
                artistMedias.sort((a, b) => {return a.date.localeCompare(b.date) });
  
              } else if (sortKey === "title" ) {
                artistMedias.sort((a, b) => {return a.title.localeCompare(b.title)});
  
              } else {
                artistMedias.sort((a, b) => b.likes - a.likes);
              }
              
              displayMediaPhotographer(artist, artistMedias);
              closeNavigationSortMenu(openFilterMenuBtn, closeFilterMenuBtn, filterMenu, allMaskedOptions)
            }
          }
        });
      });
    });
  }