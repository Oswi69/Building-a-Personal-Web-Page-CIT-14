function gotoLink(link, openInNewTab){
    console.log(link.value);
    if (openInNewTab) {
        window.open(link.value, "_blank")
    } else{
        location.href = link.value;
    }
}

