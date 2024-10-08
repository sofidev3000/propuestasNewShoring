const d = document;
const suscribeModalButton = d.getElementById("suscribe-btn");
const subscribeModal = d.getElementById("suscribe-modal");
const closeModal = d.getElementById("close-modal");
suscribeModalButton.addEventListener("click", (e) => {
  console.log("ver modal");
  subscribeModal.showModal();
});

if(closeModal){
  closeModal.addEventListener("click", (e) => {
    subscribeModal.close();
  });
}




export default suscribeModalButton;
