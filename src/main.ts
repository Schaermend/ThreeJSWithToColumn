import { XScene } from "./scene/x_scene"
import './style.css'

function initializeCanvas() {
    return new Promise(() => {
        const sw=window.innerWidth;
        const sh=window.innerHeight;
        const app=document.getElementById('app');
        const right=document.getElementById('col_right');
        const left=document.getElementById('col_left');
        if(app && right && left){
            const lw=sw*0.75;
            app.style.width=lw+"px";
            app.style.height=sh*0.95+"px";
            //left.style.width=sw-sw*0.75-20+"px"
            right.style.width=lw+'px';
;           const xscene=new XScene();
            xscene.animate();
         }
    });
  }
  
  async function asyncCall() {
    await initializeCanvas();
  }
  
  asyncCall();


