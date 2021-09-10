const toggleBtn = $('.sidebar-toggle');
const closeBtn = $('.close-btn');
const sidebar = $('.sidebar');

toggleBtn.click(function(){
    // console.log(sidebar);
    sidebar.toggleClass('show-sidebar');
})

closeBtn.click(function(){
    sidebar.removeClass('show-sidebar');
})