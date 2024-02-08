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

const form = document.querySelector("form");

form.addEventListener("click", (event) => {
  event.preventDefault();
  const message = document.querySelector("[data-message]");
  message.innerText="This form does nothing";
})

const shiftFocus = document.querySelector("[data-shift-focus]");
const receiveFocus = document.querySelector("[data-receive-focus]"); 
shiftFocus.addEventListener("blur", (event) => {
    receiveFocus.setAttribute("tabindex", "-1");
    receiveFocus.focus();
  });
