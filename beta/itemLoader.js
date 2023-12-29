const loader = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

$(".hiddenR, .hiddenL, .hidden").each(function(){
    loader.observe(this);
});

