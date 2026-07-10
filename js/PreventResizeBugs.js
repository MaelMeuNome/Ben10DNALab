        //Prevents Element Bug Position
        function loop() {
            //Alien Text 1
            alientext1.style.left = interactivecanvas.offsetLeft + 290;
            alientext1.style.top = interactivecanvas.offsetTop + 428;

            selectAlien.style.left = interactivecanvas.offsetLeft + 250 // Ajuste o valor para a posição X desejada
            selectAlien.style.top = interactivecanvas.offsetTop + 80  // Ajuste o valor para a posição Y desejada

            //Alien Text 2
            alientext2.style.left = interactivecanvas.offsetLeft + 535;
            alientext2.style.top = interactivecanvas.offsetTop + 428;

            //Input 1
            newInput1.style.left = interactivecanvas.offsetLeft + 273;
            newInput1.style.top = interactivecanvas.offsetTop + 555;

            //Input 2
            newInput2.style.left = interactivecanvas.offsetLeft + input2x;
            newInput2.style.top = interactivecanvas.offsetTop + input2y;

            //Submit Button 1
            submitbutton1.style.left = interactivecanvas.offsetLeft + 280;
            submitbutton1.style.top = interactivecanvas.offsetTop + 590;

            //Submit Button 2
            submitbutton2.style.left = interactivecanvas.offsetLeft + 528;
            submitbutton2.style.top = interactivecanvas.offsetTop + 590;

            //Back Button
            backbutton.style.left = interactivecanvas.offsetLeft + 280;
            backbutton.style.top = interactivecanvas.offsetTop + 590;

            //Back Button2
            backbutton2.style.left = interactivecanvas.offsetLeft + 528;
            backbutton2.style.top = interactivecanvas.offsetTop + 590;

            //Input Box 1
            inputbox1.style.left = interactivecanvas.offsetLeft + 258;
            inputbox1.style.top = interactivecanvas.offsetTop + 555;

            //Input Box 2
            inputbox2.style.left = interactivecanvas.offsetLeft + 504;
            inputbox2.style.top = interactivecanvas.offsetTop + 555;

            //Input 1 Alien
            input1alien.style.left = interactivecanvas.offsetLeft + 250;
            input1alien.style.top = interactivecanvas.offsetTop + 417;

            //Input 2 Alien
            input2alien.style.left = interactivecanvas.offsetLeft + 496;
            input2alien.style.top = interactivecanvas.offsetTop + 417;

            //Input Top 1
            inputtop1.style.left = interactivecanvas.offsetLeft + 250;
            inputtop1.style.top = interactivecanvas.offsetTop + 415;

            //Input Top 2
            inputtop2.style.left = interactivecanvas.offsetLeft + 495;
            inputtop2.style.top = interactivecanvas.offsetTop + 415;

            //Input Bottom 1
            inputbottom1.style.left = interactivecanvas.offsetLeft + 240;
            inputbottom1.style.top = interactivecanvas.offsetTop + 525;

            //Input Bottom 2
            inputbottom2.style.left = interactivecanvas.offsetLeft + 486;
            inputbottom2.style.top = interactivecanvas.offsetTop + 525;

            //Enter Alien Code 1
            enteraliencode1.style.left = interactivecanvas.offsetLeft + 256;
            enteraliencode1.style.top = interactivecanvas.offsetTop + 535;

            //Enter Alien Code 2
            enteraliencode2.style.left = interactivecanvas.offsetLeft + 502;
            enteraliencode2.style.top = interactivecanvas.offsetTop + 535;

            //Omnitrix Top
            omnitrixtop.style.left = interactivecanvas.offsetLeft + omnitrixtopX;
            omnitrixtop.style.top = interactivecanvas.offsetTop + omnitrixtopY;

            //Sound Img
            soundimg1.style.left = interactivecanvas.offsetLeft + 720;
            soundimg1.style.top = interactivecanvas.offsetTop + 40;

            //Omnitrix Charger Null
            omnitrixchargernull.style.left = interactivecanvas.offsetLeft + 195;
            omnitrixchargernull.style.top = interactivecanvas.offsetTop + 415;

            //Omnitrix Charger Full
            omnitrixchargerfull.style.left = interactivecanvas.offsetLeft + 195;
            omnitrixchargerfull.style.top = interactivecanvas.offsetTop + 415;

            //Download And Print
            downloadandprint.style.left = interactivecanvas.offsetLeft + 614;
            downloadandprint.style.top = interactivecanvas.offsetTop + 240;

            //Or
            or.style.left = interactivecanvas.offsetLeft + 640;
            or.style.top = interactivecanvas.offsetTop + 278;

            //Start Over
            startover.style.left = interactivecanvas.offsetLeft + 605;
            startover.style.top = interactivecanvas.offsetTop + 295;

            //Sinalizer
            sinalizer.style.left = interactivecanvas.offsetLeft + 437;
            sinalizer.style.top = interactivecanvas.offsetTop + 550;

            //Loading
            loading.style.top = 0;
            loading.style.bottom = 0;
            loading.style.right = 0;
            loading.style.left = 0;

            //Text
            /*
            text.style.left = interactivecanvas.offsetLeft - 240;
            text.style.top = interactivecanvas.offsetTop + 60;
            */

            requestAnimationFrame(loop);
        }
        loop();