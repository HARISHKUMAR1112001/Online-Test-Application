function store(){
    const fname= document.getElementById("fname");
    const technology = document.getElementById("technology").value;
    console.log(technology);
    localStorage.setItem("name", fname.value);
    localStorage.setItem("technology", technology);
    
    if(technology==='CSS')
    {
        window.location.href = "http://127.0.0.1:5501/templates/questionCss.html";
    }
    else if(technology==='HTML')
    {
        window.location.href = "http://127.0.0.1:5501/templates/questionHtml.html";
    }
    else if(technology==='JavaScript')
    {
        window.location.href = "http://127.0.0.1:5501/templates/questionJavaScript.html";
    }
}