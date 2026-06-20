function scrollMenu(amount) {
    const track = document.getElementById('menuTrack');
    track.scrollBy({
        left: amount,
        behavior: 'smooth'
    });
}


function openMessageForCart(){
    alert("No item in cart")
}