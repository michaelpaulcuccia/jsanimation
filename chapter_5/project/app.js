//FORM DOM ELEMENTS, TIMELINE - does not include checkbox
const containers = document.querySelectorAll('.input-container');
const form = document.querySelector('form');
const tl = gsap.timeline({ defaults: { duration: 1} });

//LINE ANIMATION
const start = "M0 0.999512C0 0.999512 60.5 0.999512 150 0.999512C239.5 0.999512 300 0.999512 300 0.999512";
const end = 'M1 0.999512C1 0.999512 61.5 7.5 151 7.5C240.5 7.5 301 0.999512 301 0.999512';

//ELASTIC EFFECT
//loop through containers and see if input is focused
containers.forEach(container => {
    const input = container.querySelector('.input');
    const line = container.querySelector('.elastic-line');
    const placeholder = container.querySelector('.placeholder');

    //focus - no two elements can be focused at same time
    input.addEventListener('focus', () => {
        //check if there is any text in input
        if(!input.value) {
            tl.fromTo(line, 
                //attr
                //https://greensock.com/docs/v3/GSAP/CorePlugins/AttrPlugin
                {attr: {d: start}},
                {attr: {d: end}, ease: 'Power2.easeOut', duration: .75},
            );
            tl.to(line, 
                //'<50%' means run halfway through previous animation
                {attr: {d: start}, ease: 'elastic.out(3, .5)'}, '<50%'
            );
            //placeholder shift
            //'<15%' means run fifteen percent through previous animation
            tl.to(placeholder, 
                {top: -15, left: 0, scale: .7, duration: .5, ease: 'Power2.easeOut'}, "<15%"
            );
        }
    })
});

//REVERT BACK IF NOT FOCUSED
form.addEventListener('click', () => {
    containers.forEach(container => {
        const input = container.querySelector('.input');
        const line = container.querySelector('.elastic-line');
        const placeholder = container.querySelector('.placeholder');

        if(document.activeElement !== input) {
            //ensure input is blank
            if(!input.value){
                gsap.to(placeholder, 
                    {top: 0, left: 0, scale: 1, duration: .5, ease: "Power2.easeout"}
                );
            }
        }

    })
});

//CHECKBOX DOM ELEMENT, TIMELINE
const checkbox = document.querySelector('.checkbox');
const tl2 = gsap.timeline({defaults: { duration: .5, ease: 'Power2.eastOut'} });
////const tickMarkPath = document.querySelector('.tick-mark path');
//const pathLength = tickMarkPath.getTotalLength();

checkbox.addEventListener('click', () => {
    //NOTE: Position is bottom-right corner of box, need to fix
    if(checkbox.checked) {
        tl2.to('.checkbox-fill', 
            {top: '0%'}
        );
    }
})