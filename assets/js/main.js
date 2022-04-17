function ScrollUp()
{
    var t,s;
    s = document.body.scrollTop||window.pageYOffset;
    t = setInterval(function(){if(s>0)window.scroll(0,s-=5);else clearInterval(t)},5);
}

function elemClose(propsID)
{
    /* 
    #   propsID --> это айди блока, который необходимо скрывать.
    #   Синтаксис: onclick="elemClose('id')"
    */
    const elemD = document.getElementById(propsID);
    elemD.classList.toggle('elem__none');
}

function selectCategory(categoryID, postID)
{
    const category = document.getElementById(categoryID);
    const post = document.getElementById(postID);
}
