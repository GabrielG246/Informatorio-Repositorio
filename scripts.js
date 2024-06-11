
window.onload= ()=>{
    const closedEyeBtn= document.querySelector('.closed-eye');
    const openEyeBtn= document.querySelector('.open-eye');
    const sobreMiContainer= document.querySelector('.section__sobremi--info');
    const sobreMiP= document.querySelectorAll('.section__sobremi--info p');

    closedEyeBtn.addEventListener('click', ()=>{
        closedEyeBtn.classList.toggle('diseabled')
        openEyeBtn.classList.toggle('diseabled')
        /*sobreMiContainer.classList.toggle('diseabled')*/
        sobreMiContainer.style.height= '40%'
        sobreMiP.forEach(itemP => {
            itemP.style.opacity= '100%'
        });
    })

    openEyeBtn.addEventListener('click', ()=>{
        closedEyeBtn.classList.toggle('diseabled')
        openEyeBtn.classList.toggle('diseabled')
        sobreMiContainer.style.height= '0px'
        /*sobreMiContainer.classList.toggle('diseabled')*/
        sobreMiP.forEach(itemP => {
            itemP.style.opacity= '0%'
        });
    })

    const menuLinesBtn= document.querySelector('.nav__btn--lines');
    const menuCrossBtn= document.querySelector('.nav__btn--cross');
    const navegador= document.querySelector('.nav'); 
    const sobreMiFooter= document.querySelector('.section__sobremi_footer');


    menuLinesBtn.addEventListener('click',()=>{
        menuLinesBtn.classList.toggle('diseabled');
        menuCrossBtn.classList.toggle('diseabled');
        navegador.style.right= '0px'
        sobreMiFooter.style.display= 'none';
    })
    
    menuCrossBtn.addEventListener('click',()=>{
        menuCrossBtn.classList.toggle('diseabled');
        menuLinesBtn.classList.toggle('diseabled');
        navegador.style.right= '-100%'
        sobreMiFooter.style.display= 'flex';
    })

    const navItems= document.querySelectorAll('.nav__item');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click',()=>{
            menuCrossBtn.classList.toggle('diseabled');
            menuLinesBtn.classList.toggle('diseabled');
            navegador.style.right= '-100%'
        })
    }

    /*ESTUDIOS*/
    const estudioBtn1= document.querySelector('.section__estudio--btn-1');
    const estudioBtn2= document.querySelector('.section__estudio--btn-2');
    const estudioBtn3= document.querySelector('.section__estudio--btn-3');

    const estudioInfo1= document.querySelector('.sec_info-1');
    const estudioInfo2= document.querySelector('.sec_info-2');
    const estudioInfo3= document.querySelector('.sec_info-3');

    estudioBtn1.addEventListener('click', ()=>{
        estudioBtn1.style.backgroundColor= 'var(--primary)'
        estudioBtn2.style.backgroundColor= 'transparent'
        estudioBtn3.style.backgroundColor= 'transparent'

        estudioInfo1.style.order= 1;
        estudioInfo2.style.order= 2;
        estudioInfo3.style.order= 3;

        estudioInfo1.style.opacity= '1';
        estudioInfo2.style.opacity= '0';
        estudioInfo3.style.opacity= '0';

        estudioInfo1.style.height= '50vh';
        estudioInfo2.style.height= '0px';
        estudioInfo3.style.height= '0px';
    })

    estudioBtn2.addEventListener('click', ()=>{
        estudioBtn1.style.backgroundColor= 'transparent'
        estudioBtn2.style.backgroundColor= 'var(--primary)'
        estudioBtn3.style.backgroundColor= 'transparent'

        estudioInfo1.style.order= 2;
        estudioInfo2.style.order= 1;
        estudioInfo3.style.order= 3;

        estudioInfo1.style.opacity= '0';
        estudioInfo2.style.opacity= '1';
        estudioInfo3.style.opacity= '0';

        estudioInfo1.style.height= '0px';
        estudioInfo2.style.height= '50vh';
        estudioInfo3.style.height= '0px';
    })

    estudioBtn3.addEventListener('click', ()=>{
        estudioBtn1.style.backgroundColor= 'transparent'
        estudioBtn2.style.backgroundColor= 'transparent'
        estudioBtn3.style.backgroundColor= 'var(--primary)'

        estudioInfo1.style.order= 3;
        estudioInfo2.style.order= 2;
        estudioInfo3.style.order= 1;

        estudioInfo3.style.order= 1;

        estudioInfo1.style.opacity= '0';
        estudioInfo2.style.opacity= '0';
        estudioInfo3.style.opacity= '1';

        estudioInfo1.style.height= '0px';
        estudioInfo2.style.height= '0px';
        estudioInfo3.style.height= '50vh';
    })


    const proyectoBtn1= document.querySelector('.proy-btn-1');
    const proyectoBtn2= document.querySelector('.proy-btn-2');
    const proyectoBtn3= document.querySelector('.proy-btn-3');    

    const proyecto1= document.querySelector('.proy-1');
    const proyecto2= document.querySelector('.proy-2');
    const proyecto3= document.querySelector('.proy-3');

    const proyectoTitle1= proyectoBtn1.querySelector('h4');
    const proyectoTitle2= proyectoBtn2.querySelector('h4');
    const proyectoTitle3= proyectoBtn3.querySelector('h4');

    proyectoBtn1.addEventListener('click', ()=>{
        if(proyecto2.classList.contains('mostrar-proyecto')){
            proyecto2.classList.add('ocultar-proyecto');
            proyecto2.classList.remove('mostrar-proyecto');
        }
        
        if(proyecto3.classList.contains('mostrar-proyecto')){
            proyecto3.classList.add('ocultar-proyecto');
            proyecto3.classList.remove('mostrar-proyecto');
        }

        proyecto1.classList.toggle('mostrar-proyecto');
        proyecto1.classList.toggle('ocultar-proyecto');

        if(proyectoTitle1.innerText.includes('⯆')){
            proyectoTitle1.innerText = proyectoTitle1.innerText.replace('⯆', '⯈');
        } else {
            proyectoTitle1.innerText = proyectoTitle1.innerText.replace('⯈', '⯆');
        }

        if(proyectoTitle2.innerText.includes('⯆')){
            proyectoTitle2.innerText = proyectoTitle2.innerText.replace('⯆', '⯈');
        }

        if(proyectoTitle3.innerText.includes('⯆')){
            proyectoTitle3.innerText = proyectoTitle3.innerText.replace('⯆', '⯈');
        }
    })

    proyectoBtn2.addEventListener('click', ()=>{
        if(proyecto1.classList.contains('mostrar-proyecto')){
            proyecto1.classList.add('ocultar-proyecto');
            proyecto1.classList.remove('mostrar-proyecto');
        }
        
        if(proyecto3.classList.contains('mostrar-proyecto')){
            proyecto3.classList.add('ocultar-proyecto');
            proyecto3.classList.remove('mostrar-proyecto');
        }
        
        proyecto2.classList.toggle('mostrar-proyecto');
        proyecto2.classList.toggle('ocultar-proyecto');

        if(proyectoTitle2.innerText.includes('⯆')){
            proyectoTitle2.innerText = proyectoTitle2.innerText.replace('⯆', '⯈');
        } else {
            proyectoTitle2.innerText = proyectoTitle2.innerText.replace('⯈', '⯆');
        }

        if(proyectoTitle1.innerText.includes('⯆')){
            proyectoTitle1.innerText = proyectoTitle1.innerText.replace('⯆', '⯈');
        }

        if(proyectoTitle3.innerText.includes('⯆')){
            proyectoTitle3.innerText = proyectoTitle3.innerText.replace('⯆', '⯈');
        }
    })

    proyectoBtn3.addEventListener('click', ()=>{
        if(proyecto2.classList.contains('mostrar-proyecto')){
            proyecto2.classList.add('ocultar-proyecto');
            proyecto2.classList.remove('mostrar-proyecto');
        }
        
        if(proyecto1.classList.contains('mostrar-proyecto')){
            proyecto1.classList.add('ocultar-proyecto');
            proyecto1.classList.remove('mostrar-proyecto');
        }
        
        proyecto3.classList.toggle('mostrar-proyecto');
        proyecto3.classList.toggle('ocultar-proyecto');


        if(proyectoTitle3.innerText.includes('⯆')){
            proyectoTitle3.innerText = proyectoTitle3.innerText.replace('⯆', '⯈');
        } else {
            proyectoTitle3.innerText = proyectoTitle3.innerText.replace('⯈', '⯆');
        }

        if(proyectoTitle2.innerText.includes('⯆')){
            proyectoTitle2.innerText = proyectoTitle2.innerText.replace('⯆', '⯈');
        }

        if(proyectoTitle1.innerText.includes('⯆')){
            proyectoTitle1.innerText = proyectoTitle1.innerText.replace('⯆', '⯈');
        }
    })
}
