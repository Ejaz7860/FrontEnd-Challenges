window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

function menuToggle(){
    const mToggle = document.querySelector('.menuToggle');

    const navigation =  document.querySelector('.navigation');
    mToggle.classList.toggle('active');
    navigation.classList.toggle('active')
}


