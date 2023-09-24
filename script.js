console.log("hi")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'

        setTimeout(() => {
        document.querySelector('.cross').style.display = 'inline'
        }, 354);
    }
})

const readMoreButtons = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.parentElement.querySelector('.hidden-content');
        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block';
            button.textContent = 'Read Less';
        } else {
            content.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});