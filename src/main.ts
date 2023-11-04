import { XScene } from "./scene/x_scene"
import './style.css'

function initializeCanvas() {
    return new Promise(() => {
        const x=document.getElementById('app');
        if(x){
            x.style.height="500px";
            x.style.width="400px";
            x.style.left="300px";
            x.style.top="200px";
            const xscene=new XScene();
            xscene.animate();
         }
    });
  }
  
  async function asyncCall() {
    await initializeCanvas();
  }
  
  asyncCall();


