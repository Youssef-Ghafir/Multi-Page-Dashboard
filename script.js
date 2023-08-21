document.body.innerHTML += `<div class="load_container">
<span class="load"></span>
</div>`;
window.addEventListener('load',_ => {
    document.querySelector('.load_container').classList.add('hide');
    setTimeout(() => {
        document.querySelector('.load_container').remove()
    }, 200);
})
let images = Array.from(document.images);
images.forEach(e => {
    if(e.getAttribute('alt') == '') {
        e.setAttribute('alt','Deafult Alt')
    }
})
let links = document.querySelectorAll('.sidebar ul li a span');
links.forEach(e => {
    if(window.location.pathname.includes(e.textContent.toLowerCase())) {
        e.parentElement.classList.add('active')
    }
})
if(window.location.href.includes('settings')) {
    let change = document.getElementById('change');
    let email = document.getElementById('email')
    change.addEventListener('click',_ => {
        if(change.textContent != 'Save') {
            email.removeAttribute('disabled')
            email.classList.add('active')
            change.textContent = 'Save';
        }else {
            email.setAttribute('disabled','')
            email.classList.remove('active')
            change.textContent = 'Change';
        }
    })   
}
function RandPrice(min,max,arr) {
    arr.forEach(element => {
        element.innerHTML += Math.floor((Math.random() * (max - min) + min))
    })
}
function GetRandomDate() {
    let start_date = new Date("2015/01/01");
    let end_date = new Date().getTime();
    return new Date((Math.random() * (start_date - end_date) + end_date));
}
if(window.location.href.includes('projects')) {
    let regex = /\d{2,}\s\d{4,}\s\d{2,}/ig;
    let dates = document.querySelectorAll('.date');
    dates.forEach(element => {
        let date = String(GetRandomDate()).match(regex).join().replaceAll(' ','/');
        element.textContent = date;
    })
    let price = document.querySelectorAll('.price_container > span:last-of-type');
    price.forEach(element => {
        element.innerHTML = `<i class="fa-solid fa-dollar-sign"></i>`;
    })
    RandPrice(500,3000,price)
}
if(window.location.href.includes('courses')) {
    let user_numbers = document.querySelectorAll('.user_number')
    let price_number = document.querySelectorAll('.price_number')
    RandPrice(300,3000,user_numbers);
    RandPrice(300,3000,price_number);
}
let logo = document.querySelector('.sidebar h3');
logo.textContent = 'YG'