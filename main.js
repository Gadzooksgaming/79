name_array = [];


function submit(){

    var name1= document.getElementById("text1").value;
    var name2= document.getElementById("text2").value;
    var name3= document.getElementById("text3").value;
    var name4= document.getElementById("text4").value;



    name_array.push(name1);
    name_array.push(name2);
    name_array.push(name3);
    name_array.push(name4);

    console.log(name_array);

    document.getElementById("list").innerHTML = name_array;
    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}


function sort(){
    name_array.sort();
    
    document.getElementById("list").innerHTML = name_array



}