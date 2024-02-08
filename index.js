const modalTriggers = document.querySelectorAll(`[data-modal-for]`);
const body = document.querySelector("body");

for (let trigger of modalTriggers) {
  const modal = document.getElementById(trigger.dataset.modalFor);
  trigger.addEventListener('click', () => {
    
    trigger.hasAttribute('open') && modal.showModal();
    trigger.hasAttribute('close') && modal.close();
    if(trigger.hasAttribute('open')) {
      body.setAttribute("inert", "");
    } else {
      body.removeAttribute("inert");
    }
  });
}

