// We want the sidebar to close when the x button is clicked, so we need to close-btn class.
// We want the sidebar to open and close when we click on the menu icon, so we need to sidebar-toggle class.
// We need a sidebar class for these two features to happen.

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click',function(){
    console.log(sidebar.classList);
    sidebar.classList.toggle('show-sidebar');
})

closeBtn.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})