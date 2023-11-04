import { XScene } from "./scene/x_scene"
import './style.css'

function initializeCanvas() {
    return new Promise(() => {
        const x=document.getElementById('app');
        const right=document.getElementById('col_right');
        if(x && right){
            x.style.width=right.clientWidth+"px";
            x.style.height=right.clientHeight+"px";

            const xscene=new XScene();
            xscene.animate();
         }
    });
  }
  
  async function asyncCall() {
    await initializeCanvas();
  }
  
  asyncCall();


