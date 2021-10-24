if(window.navigator.onLine){
  online();
}else {
  offline();
}

window.addEventListener('online',  ()=>{
  online()
});

window.addEventListener('offline',  ()=>{
  offline();
});


function online(){
  document.querySelector(".status").innerText="I'm Online";
  document.querySelector(".status").style.backgroundColor="blue";
}

function offline(){
  document.querySelector(".status").innerText="I'm offline";
  document.querySelector(".status").style.backgroundColor="red";
}
