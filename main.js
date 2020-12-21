menu_list_array=[
    "Chicken Tandoori Pizza",
    "Veg Supreme Pizza",
    "Delux Veggie Pizza",
    "Veg Extravaganza Pizza",
    "Margreta Pizza",
];
function getmenu(){
    var htmldata;
    htmldata = <ol class="menu_list"></ol>
    menu_list_array.sort();
    for(vari=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '</li>'
    }
    htmldata=htmldata+'<ol>'
    document.getElementById("display_menu").innerHTML= htmldata;
}
 function additem(){
     var htmldata;
     var item=document.getElementById("add_item").value;
     menu_list_array.push(item);
     menu_list_array.sort;
     htmldata="<section class='cards' >"
     for(vari=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards">' + '<img src="pizzalmg.png">'  + menu_list_array[i]+ '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
 }