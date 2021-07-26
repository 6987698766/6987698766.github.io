var title = document.getElementById("title");//取得元素
var content = document.getElementById("content");//取得元素
var btn = document.getElementById("btn");//取得元素
var list = document.getElementById("list");//取得元素

btn.addEventListener("click", function(){ //監聽按下，觸發函示
    //就是list裡面的HTML
    list.innerHTML = list.innerHTML +`   
    <div class="article">
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>
    ` ;//點是模板語法
    title.value = "";
    content.value = "";  
})