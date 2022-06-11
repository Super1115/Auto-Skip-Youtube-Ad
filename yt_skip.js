
function skip(){
    try{
    let skip_button = document.querySelector(".ytp-ad-skip-button")
    skip_button.click();
}catch(e){
    console.log("好像有一些錯誤!錯誤訊息:",e)
}
return new Promise((resolve, reject)=>{
    setTimeout(resolve, 750)
})
}
while(true){
    await skip()
    console.log("正確執行")
}

