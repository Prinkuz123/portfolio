function sendmail(e)
{
  let ld=document.querySelector('#ld')
  let sm=document.querySelector('#sm')
  ld.style.display="block"
  sm.style.display="block"

    event.preventDefault();
    console.log("conected",document.getElementById('name').value,);
    console.log("conected",document.getElementById('email').value,);

    console.log("conected",document.getElementById('subject').value,);

    console.log("conected",document.getElementById('message').value,);


  var params ={
    name:document.getElementById('name').value,
    from_name:document.getElementById('email').value,
    sub:document.getElementById('subject').value,
    message:document.getElementById('message').value
    };
  
    const serviceID="service_xty3e8o";
    const TemplateID="template_76oyjls"
    emailjs.send(serviceID,TemplateID,params)
    .then((res)=>{
      
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("subject").value=""; 
        document.getElementById("message").value="";
        console.log(res);
        alert("your message send successfully"+res);
        ld.style.display="none"
        sm.style.display="block"

    })
    .catch((err) =>console.log(err));
    ld.style.display="block"
    sm.style.display="none"
    }