//document.addEventListener('mousemove'(e)=>){//
document.addEventListener('mousemove', (e) =>  { 
    const eyes = document.querySelectorAll('.eye');

    eyes.forEach(eye=>{

        const pupil = eye.querySelector('.pupil');
        const eyeRect = eye.getBoundingClientRect();
        const eyecenterX = eyeRect.left + eyeRect.width/2;
        const eyecenterY =eyeRect.top + eyeRect.height /2;

        const angle = Math .atan2 (e.clientY-eyecenterY,e.clientX-eyecenterX);
        const distance = Math . min(5,Math.sqrt(Math.pow (e.clientX-eyecenterX,2)+Math.pow(e.clientY-eyecenterY,2))/10);

        const pupilX = Math.cos(angle)*distance;
        const pupilY = Math.sin(angle)*distance;

        pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
});

