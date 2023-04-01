console.log("main.js loaded")

const canvas = document.getElementById(canvas)
const ctx =  canvas.getcontext("2d")
function update(){
    ctx.fillrect(0, 0, 50, 50)
    requestAnimationFrame(update)
}
update