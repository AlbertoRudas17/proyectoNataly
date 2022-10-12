
const persona={
    primerNombre:"Luis",
    segundoNombre:"Alberto",
    apellido:"rudas",
    nombreCompleto:function()
    {
        return this.primerNombre+' '+this.segundoNombre+' '+this.apellido;
    }


}



addEventListener('DOMContentLoaded',()=>{

var x=document.getElementById('persona');
x.innerHTML=persona.nombreCompleto();

    
});