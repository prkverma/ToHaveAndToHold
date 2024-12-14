const select= (el, all= false)=>{
    el=el.trim();
    if(all){
        return [...document.querySelectorAll(el)];
    }else{
        return document.querySelector(el);
    }
};

const on =(type, el, listener, all =false) => {
    let selectEl= select(el, all);
    if(selectEl){
        if(all){
            selectEl.forEach(e=> e.addEventListener(type, listener));
        }else{
            selectEl.addEventListener(type, listener);
        }
    }
};

window.addEventListener('load', ()=>{
    
    let portfolioContainer=select('.portfolio-container');
    //alert(portfolioContainer);
    if(portfolioContainer){
        let portfolioIsotope=new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
        });

        let portfolioFilter= select('#portfolio-filters li', true);

        on(
            'click', 
            '#portfolio-filters li',
            function (e){
                e.preventDefault();
                portfolioFilter.forEach(function(el){
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter'),
                });
                portfolioIsotope.on('arrangeComplete', function(){
                    AOS.refresh();
                });
            },
            true
        );
    }
});