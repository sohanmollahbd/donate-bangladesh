document.getElementById('show-donation').addEventListener('click',function(){
   showSectionById('donate-section');
})
document.getElementById('show-history').addEventListener('click',function(){
   showSectionById('transaction-history');
});

// home page to blog 
document.getElementById('blog-btn').addEventListener('click',function(){
   window.location.href = 'blog.html';
})


// btn active 
document.getElementById('show-donation').addEventListener('click',function(){
   document.getElementById('show-donation').classList.add('btn-active')
})
document.getElementById('show-history').addEventListener('click',function(){
   document.getElementById('show-history').classList.add('btn-active')
})