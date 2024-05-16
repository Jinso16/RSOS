var btnId

function anchor() {
    var buttons = document.querySelectorAll('.cab_ajudar')
    buttons.forEach(function(button) {

        button.addEventListener('click', function() {
            btnId = this.id 

            window.location.href = `index.html?scrollTo=true&id=${btnId}`
        });
    });
}