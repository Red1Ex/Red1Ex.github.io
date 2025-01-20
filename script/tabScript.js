function openTab(tabName){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("property__list--slide");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove('active');
    }

    tablinks = document.getElementsByClassName("tabs__button");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add("active");
}