        // Impede o arrasto de qualquer elemento <img> ou <canvas>
        document.addEventListener('dragstart', function(event) {
            if (event.target.tagName === 'IMG' || event.target.tagName === 'CANVAS') {
                event.preventDefault();
                return false;
            }
        }, false);

        // Adiciona o @font-face via JS para garantir que o navegador saiba onde buscar
        var style = document.createElement('style');
        style.innerHTML = `
            @font-face {
                font-family: 'HouseSampler';
                src: url('images/fonts/HouseSampler.otf') format('otf'); 
                font-display: swap;
            }
        `;
        document.head.appendChild(style);
                
        //Loading Screen
        var loading = document.createElement("img");
        loading.style.position = "absolute";
        loading.style.width = 770;
        loading.style.height = 650;
        loading.style.top = 0;
        loading.style.bottom = 0;
        loading.style.right = 0;
        loading.style.left = 0;
        loading.style.margin = "auto";
        loading.src = "images/loading/0.png";
        loading.style.zIndex = "7";
        document.body.appendChild(loading);

        //Create Canvas Elements
        var bgcanvas = document.createElement("canvas"); //Background Elements
        var omnitrixcanvas = document.createElement("canvas"); // OmnitrixTop
        var inputcanvas = document.createElement("canvas"); // Input Elements
        var inputecanvas = document.createElement("canvas"); // Input Text Elements
        var fusioncanvas = document.createElement("canvas"); // Fusion Render
        var prefusioncanvas = document.createElement("canvas"); // Pre Fusion Render
        var interactivecanvas = document.createElement("canvas"); // Interactive Elements


        //Define Canvas Contexts
        var bgcontext = bgcanvas.getContext("2d");
        var omnitrixcontext = omnitrixcanvas.getContext("2d");
        var inputcontext = inputcanvas.getContext("2d");
        var inputecontext = inputecanvas.getContext("2d");
        var fusioncontext = fusioncanvas.getContext("2d");
        var prefusioncontext = prefusioncanvas.getContext("2d");
        var interactivecontext = interactivecanvas.getContext("2d");

        //Define Canvas Size

        //BG CANVAS
        bgcanvas.width = 770;
        bgcanvas.height = 650;
        bgcanvas.style.zIndex = "1";

        //OMNITRIX CANVAS
        omnitrixcanvas.width = 770;
        omnitrixcanvas.height = 650;
        omnitrixcanvas.style.zIndex = "2";

        //INPUT CANVAS
        inputcanvas.width = 770;
        inputcanvas.height = 650;
        inputcanvas.style.zIndex = "3";

        //INPUT ELEMENTS CANVAS
        inputecanvas.width = 770;
        inputecanvas.height = 650;
        inputecanvas.style.zIndex = "4";

        //FUSION CANVAS
        fusioncanvas.width = 770;
        fusioncanvas.height = 650;
        fusioncanvas.style.zIndex = "5";

        //PRE-FUSION CANVAS
        prefusioncanvas.width = 770;
        prefusioncanvas.height = 650;
        prefusioncanvas.style.zIndex = "5";

        //INTERACTIVE CANVAS
        interactivecanvas.width = 770;
        interactivecanvas.height = 650;
        interactivecanvas.style.zIndex = "6";

        //Set All Canvas Inside Body
        document.body.appendChild(bgcanvas);
        document.body.appendChild(omnitrixcanvas);
        document.body.appendChild(inputcanvas);
        document.body.appendChild(inputecanvas);
        document.body.appendChild(fusioncanvas);
        document.body.appendChild(prefusioncanvas);
        document.body.appendChild(interactivecanvas);

        //All Elements
        var soundimg1 = document.createElement("img");
        var alientext1 = document.createElement("img");
        var alientext2 = document.createElement("img");
        var input1alien = document.createElement("img");
        var input2alien = document.createElement("img");
        var inputbox1 = document.createElement("img");
        var inputbox2 = document.createElement("img");
        var submitbutton1 = document.createElement("img");
        var submitbutton2 = document.createElement("img");
        var backbutton = document.createElement("img");
        var backbutton2 = document.createElement("img");
        var downloadandprint = document.createElement("img");
        var or = document.createElement("img");
        var startover = document.createElement("img");
        var inputtop1 = document.createElement("img");
        var inputtop2 = document.createElement("img");
        var inputbottom1 = document.createElement("img");
        var inputbottom2 = document.createElement("img");
        var enteraliencode1 = document.createElement("img");
        var enteraliencode2 = document.createElement("img");
        var omnitrixtop = document.createElement("img");
        var omnitrixchargernull = document.createElement("img");
        var omnitrixchargerfull = document.createElement("img");
        var sinalizer = document.createElement("img");

        //All Buttons/Inputs Configuration

        //SUBMIT BUTTON 1
        submitbutton1.style.width = "98px";
        submitbutton1.style.height = "22px";
        submitbutton1.style.position = "absolute";
        submitbutton1.style.left = interactivecanvas.offsetLeft + 280;
        submitbutton1.style.top = interactivecanvas.offsetTop + 590;
        submitbutton1.style.zIndex = "6";
        submitbutton1.src = "images/bg/DNALab/inputs/button_1.png";

        //SUBMIT BUTTON 2
        submitbutton2.style.width = "98px";
        submitbutton2.style.height = "22px";
        submitbutton2.style.position = "absolute";
        submitbutton2.style.left = interactivecanvas.offsetLeft + 528;
        submitbutton2.style.top = interactivecanvas.offsetTop + 590;
        submitbutton2.style.zIndex = "4";
        var canIAnimeIt = false;
        submitbutton2.src = "images/bg/DNALab/inputs/buttoninactive.png";

        //BACK BUTTON
        backbutton.style.width = "98px";
        backbutton.style.height = "22px";
        backbutton.style.position = "absolute";
        backbutton.style.left = interactivecanvas.offsetLeft + 280;
        backbutton.style.top = interactivecanvas.offsetTop + 590;
        backbutton.style.zIndex = "0";
        backbutton.src = "images/bg/DNALab/inputs/back.png";

        //BACK BUTTON 2
        backbutton2.style.width = "98px";
        backbutton2.style.height = "22px";
        backbutton2.style.position = "absolute";
        backbutton2.style.left = interactivecanvas.offsetLeft + 528;
        backbutton2.style.top = interactivecanvas.offsetTop + 590;
        backbutton2.style.zIndex = "0";
        backbutton2.src = "images/bg/DNALab/inputs/back.png";

        //Input 1
        var newInput1 = document.createElement("input");
        newInput1.style.position = "absolute";
        newInput1.style.left = interactivecanvas.offsetLeft + 273;
        newInput1.style.top = interactivecanvas.offsetTop + 555;
        newInput1.style.width = 111;
        newInput1.style.height = 32;
        newInput1.style.textAlign = "center";
        newInput1.style.border = "none";
        newInput1.style.outline = "none";
        newInput1.style.backgroundColor = "black";
        newInput1.style.color = "red";
        newInput1.style.fontWeight = "bold";
        newInput1.style.fontFamily = "arial";
        newInput1.style.fontSize = 16;
        newInput1.style.textTransform = "lowercase";
        newInput1.style.zIndex = "6";
        newInput1.spellcheck = false;
        newInput1.type = "text";
        newInput1.maxLength = 4;

        //Input 2
        var newInput2 = document.createElement("input");
        var input2x = 273 * 2 - 24;
        var input2y = 555;
        newInput2.style.position = "absolute";
        newInput2.style.left = interactivecanvas.offsetLeft + input2x;
        newInput2.style.top = interactivecanvas.offsetTop + input2y;
        newInput2.style.width = 111;
        newInput2.style.height = 32;
        newInput2.style.textAlign = "center";
        newInput2.style.border = "none";
        newInput2.style.outline = "none";
        newInput2.style.backgroundColor = "black";
        newInput2.style.color = "red";
        newInput2.style.fontWeight = "bold";
        newInput2.style.fontFamily = "arial";
        newInput2.style.fontSize = 16;
        newInput2.style.textTransform = "lowercase";
        newInput2.style.zIndex = "0";
        newInput2.spellcheck = false;
        newInput2.type = "text";
        newInput2.maxLength = 4;

        var isEntradaRunning = false;
        var isSaidaRunning = false;
        var rodadaCompleta = false;

        var customDropdown = null;

        document.addEventListener("click", function(event) {
        // Verifica se o dropdown existe e está visível
        if (customDropdown && customDropdown.style.display !== "none") {
            
            // Verifica se o clique NÃO foi no próprio dropdown
            // (Isso inclui qualquer clique dentro dele, como as imagens ou nomes)
            if (!customDropdown.contains(event.target)) {
                
                // Fecha a lista (assumindo que sua lista está dentro do dropdown)
                var list = customDropdown.querySelector("div[style*='display']"); // ou use uma classe específica
                // Ou mais simples, se a lista for um filho direto:
                var list = customDropdown.children[1]; 
                
                if (list) {
                    list.style.display = "none";
                }
            }
        }
    });

        // Função para garantir que apenas letras sejam aceitas
        function aplicarFiltroDeLetras(inputElement) {
            inputElement.addEventListener('input', function() {
                // [^a-zA-Z] significa: qualquer coisa que NÃO seja letra (a-z ou A-Z)
                // O .replace troca tudo o que não for letra por uma string vazia ""
                this.value = this.value.replace(/[^a-zA-Z]/g, '');
                
                // Mantém o limite de 4 caracteres que conversamos antes
                if (this.value.length > 4) {
                    this.value = this.value.slice(0, 4);
                }
            });
        }

        // Aplique nos seus inputs
        aplicarFiltroDeLetras(newInput1);
        aplicarFiltroDeLetras(newInput2);

        // Verifica se é Android ou iOS
        var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        // Função para aplicar o estado do input
        function configureInput(inputElement) {
            if (isMobile) {
                inputElement.readOnly = true; // Impede que o teclado suba e o zoom ocorra
                inputElement.style.cursor = "pointer"; // Indica que é clicável, mas não editável
            }
        }

        // Aplique nos seus inputs assim que criá-los:
        configureInput(newInput1);
        configureInput(newInput2);

        //Input Box 1
        inputbox1.style.position = "absolute";
        inputbox1.style.left = interactivecanvas.offsetLeft + 258;
        inputbox1.style.top = interactivecanvas.offsetTop + 555;
        inputbox1.style.width = 144;
        inputbox1.style.height = 32;
        inputbox1.style.zIndex = "4";
        inputbox1.src = "images/bg/DNALab/inputs/inputbox.png";

        //Input Box 2
        inputbox2.style.position = "absolute";
        inputbox2.style.left = interactivecanvas.offsetLeft + 504;
        inputbox2.style.top = interactivecanvas.offsetTop + 555;
        inputbox2.style.width = 144;
        inputbox2.style.height = 32;
        inputbox2.style.zIndex = "4";
        inputbox2.src = "images/bg/DNALab/inputs/inputbox.png";

        //INPUT ALIEN 1
        input1alien.style.position = "absolute";
        input1alien.style.left = interactivecanvas.offsetLeft + 250;
        input1alien.style.top = interactivecanvas.offsetTop + 417;
        input1alien.style.width = "160";
        input1alien.style.height = "108";
        input1alien.style.zIndex = "4";
        input1alien.src = "images/bg/DNALab/inputs/aliens/main.png";

        //INPUT ALIEN 2
        input2alien.style.position = "absolute";
        input2alien.style.left = interactivecanvas.offsetLeft + 496;
        input2alien.style.top = interactivecanvas.offsetTop + 417;
        input2alien.style.width = "160";
        input2alien.style.height = "108";
        input2alien.style.zIndex = "4";
        input2alien.src = "images/bg/DNALab/inputs/aliens/maininactive.png";

        //ALIEN TEXT 1
        alientext1.style.position = "absolute";
        alientext1.style.left = interactivecanvas.offsetLeft + 290;
        alientext1.style.top = interactivecanvas.offsetTop + 428;
        alientext1.style.width = 81;
        alientext1.style.height = 22;
        alientext1.style.zIndex = "4";
        alientext1.src = "images/bg/DNALab/inputs/alientext1.png";

        //ALIEN TEXT 2
        alientext2.style.position = "absolute";
        alientext2.style.left = interactivecanvas.offsetLeft + 535;
        alientext2.style.top = interactivecanvas.offsetTop + 428;
        alientext2.style.width = 81;
        alientext2.style.height = 22;
        alientext2.style.zIndex = "4";
        alientext2.src = "images/bg/DNALab/inputs/alientext2.png";

        //INPUT TOP 1
        inputtop1.style.position = "absolute";
        inputtop1.style.width = 160;
        inputtop1.style.height = 160;
        inputtop1.style.left = interactivecanvas.offsetLeft + 250;
        inputtop1.style.top = interactivecanvas.offsetTop + 415;
        inputtop1.style.zIndex = "3";
        inputtop1.src = "images/bg/DNALab/inputs/inputtop.png"

        //INPUT TOP 2
        inputtop2.style.position = "absolute";
        inputtop2.style.width = 160;
        inputtop2.style.height = 160;
        inputtop2.style.left = interactivecanvas.offsetLeft + 495;
        inputtop2.style.top = interactivecanvas.offsetTop + 415;
        inputtop2.style.zIndex = "3";
        inputtop2.src = "images/bg/DNALab/inputs/inputtopinactive.png"

        //INPUT BOTTOM 1
        inputbottom1.style.position = "absolute";
        inputbottom1.style.width = 182;
        inputbottom1.style.height = 97;
        inputbottom1.style.left = interactivecanvas.offsetLeft + 240;
        inputbottom1.style.top = interactivecanvas.offsetTop + 525;
        inputbottom1.style.zIndex = "3";
        inputbottom1.src = "images/bg/DNALab/inputs/inputbottom.png"

        //INPUT BOTTOM 2
        inputbottom2.style.position = "absolute";
        inputbottom2.style.width = 182;
        inputbottom2.style.height = 97;
        inputbottom2.style.left = interactivecanvas.offsetLeft + 486;
        inputbottom2.style.top = interactivecanvas.offsetTop + 525;
        inputbottom2.style.zIndex = "3";
        inputbottom2.src = "images/bg/DNALab/inputs/inputbottominactive.png"

        //ENTER ALIEN CODE 1
        enteraliencode1.style.position = "absolute";
        enteraliencode1.style.width = 148;
        enteraliencode1.style.height = 17;
        enteraliencode1.style.left = interactivecanvas.offsetLeft + 256;
        enteraliencode1.style.top = interactivecanvas.offsetTop + 535;
        enteraliencode1.style.zIndex = "4";
        enteraliencode1.src = "images/bg/DNALab/inputs/inputmessages/enteraliencode.png";

        //ENTER ALIEN CODE 2
        enteraliencode2.style.position = "absolute";
        enteraliencode2.style.width = 148;
        enteraliencode2.style.height = 17;
        enteraliencode2.style.left = interactivecanvas.offsetLeft + 502;
        enteraliencode2.style.top = interactivecanvas.offsetTop + 535;
        enteraliencode2.style.zIndex = "4";
        enteraliencode2.src = "images/bg/DNALab/inputs/inputmessages/enteraliencodeinactive.png";

        //OMNITRIX TOP
        var omnitrixtopX = 284; //262
        var omnitrixtopY = 366; //360
        omnitrixtop.style.position = "absolute";
        omnitrixtop.style.width = "342px"; 
        omnitrixtop.style.height = "135px"; 
        omnitrixtop.style.left = (interactivecanvas.offsetLeft + omnitrixtopX) + "px";
        omnitrixtop.style.top = (interactivecanvas.offsetTop + omnitrixtopY) + "px";
        omnitrixtop.style.zIndex = "2";
        omnitrixtop.src = "images/omnitrix/animation/0.png";
        
        // OTIMIZAÇÃO: Cria uma lista na memória com as imagens já carregadas
        var omnitrixPreloaded = [];
        for (var i = 0; i <= 8; i++) {
            var tempImg = new Image();
            tempImg.src = "images/omnitrix/animation/" + i + ".png";
            omnitrixPreloaded.push(tempImg);
        }

        // OTIMIZAÇÃO EXTRA: Pré-carregar as 21 imagens do ícone de som
        var soundPreloaded = [];
        for (var j = 1; j <= 21; j++) {
            var tempSoundImg = new Image();
            tempSoundImg.src = "images/bg/bganimatedelements/musicimages/" + j + ".png";
            soundPreloaded.push(tempSoundImg);
        }

        // OTIMIZAÇÃO EXTRA: Pré-carregar as imagens do carregador lateral do omnitrix
        var chargerPreloaded = [];
        for (var k = 0; k <= 15; k++) {
            var tempChargerImg = new Image();
            tempChargerImg.src = "images/omnitrix/animation1/" + k + ".png";
            chargerPreloaded.push(tempChargerImg);
        }

        //OMNITRIX CHARGER NULL
        omnitrixchargernull.style.position = "absolute";
        omnitrixchargernull.style.left = interactivecanvas.offsetLeft + 195;
        omnitrixchargernull.style.top = interactivecanvas.offsetTop + 415;
        omnitrixchargernull.style.width = 525;
        omnitrixchargernull.style.height = 216;
        omnitrixchargernull.style.zIndex = "1";
        omnitrixchargernull.src = "images/omnitrix/omnitrixbottom1.png";

        //OMNITRIX CHARGER FULL
        omnitrixchargerfull.style.position = "absolute";
        omnitrixchargerfull.style.left = interactivecanvas.offsetLeft + 195;
        omnitrixchargerfull.style.top = interactivecanvas.offsetTop + 415;
        omnitrixchargerfull.style.width = 525;
        omnitrixchargerfull.style.height = 216;
        omnitrixchargerfull.style.zIndex = "1";
        omnitrixchargerfull.src = "images/omnitrix/animation1/0.png";

        //DOWNLOAD AND PRINT
        downloadandprint.style.position = "absolute";
        downloadandprint.style.left = interactivecanvas.offsetLeft + 614;
        downloadandprint.style.top = interactivecanvas.offsetTop + 240;
        downloadandprint.style.width = 0;
        downloadandprint.style.height = 0;
        downloadandprint.style.transform = "rotate(7deg)";
        downloadandprint.style.zIndex = "6";
        downloadandprint.src = "images/bg/DNALab/printorstartover/downloadandprint.png";

        //OR
        or.style.position = "absolute";
        or.style.left = interactivecanvas.offsetLeft + 630;
        or.style.top = interactivecanvas.offsetTop + 278;
        or.style.width = 0;
        or.style.height = 0;
        or.style.transform = "rotate(7deg)";
        or.style.zIndex = "6";
        or.src = "images/bg/DNALab/printorstartover/or.png";

        //START OVER
        startover.style.position = "absolute";
        startover.style.left = interactivecanvas.offsetLeft + 605;
        startover.style.top = interactivecanvas.offsetTop + 293;
        startover.style.width = 0;
        startover.style.height = 0;
        startover.style.transform = "rotate(7deg)";
        startover.style.zIndex = "6";
        startover.src = "images/bg/DNALab/printorstartover/startover.png";

        //SOUND IMG
        soundimg1.style.position = "absolute";
        soundimg1.style.left = interactivecanvas.offsetLeft + 720;
        soundimg1.style.top = interactivecanvas.offsetTop + 40;
        soundimg1.style.zIndex = "6";
        soundimg1.src = "images/bg/bganimatedelements/musicimages/1.png";

        //SINALIZER IMG

        sinalizer.style.position = "absolute";
        sinalizer.style.left = interactivecanvas.offsetLeft + 437;
        sinalizer.style.top = interactivecanvas.offsetTop + 550;
        sinalizer.style.zIndex = "2";
        sinalizer.src = "images/omnitrix/omnitrixsinalizerinactive.png";

        //Ben 10 music
        var audio = document.createElement("audio");
        audio.src = "sound/26_bt_bgmusic.mp3";
        audio.loop = true;
        audio.volume = 0.8;

// Substitua o seu bloco de criação do texto por este:
var textContainer = document.createElement("div");
textContainer.style.position = "absolute";
textContainer.style.left = (interactivecanvas.offsetLeft - 240) + "px";
textContainer.style.top = (interactivecanvas.offsetTop + 60) + "px";
textContainer.style.fontFamily = "HouseSampler";
textContainer.style.fontSize = "25px";
textContainer.style.zIndex = "1";
textContainer.style.color = "lime";
textContainer.style.cursor = "default";
document.body.appendChild(textContainer);


function fixarCursorNoFinal(inputElement) {
    inputElement.addEventListener('click', function() {
        // Quando clicar, move o cursor para o final do texto
        this.selectionStart = this.selectionEnd = this.value.length;
    });

    inputElement.addEventListener('keyup', function() {
        // Quando digitar, garante que ele continua no final
        this.selectionStart = this.selectionEnd = this.value.length;
    });
    
    // Bloqueia o "Arrow Keys" (setas do teclado) que movem o cursor
    inputElement.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
        }
    });
}

// Aplique aos seus inputs
fixarCursorNoFinal(newInput1);
fixarCursorNoFinal(newInput2);

function bloquearSelecaoNoInput(inputElement) {
    // 2. Impede o clique duplo (que seleciona o texto)
    inputElement.addEventListener('dblclick', function(e) {
        e.preventDefault();
    });
}

// Aplique aos seus inputs
bloquearSelecaoNoInput(newInput1);
bloquearSelecaoNoInput(newInput2);

// Bloqueia o menu de contexto (botão direito) na página inteira
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
}, false);

// Bloqueia o comportamento de "Arrastar e Soltar" de textos entre elementos
document.addEventListener('dragover', function(event) {
    // Impede o navegador de permitir o "soltar" (drop)
    event.preventDefault();
}, false);

document.addEventListener('drop', function(event) {
    // Impede o processamento da ação de soltar
    event.preventDefault();
}, false);

// Opcional: Bloqueia também a colagem (Ctrl+V) se você quiser que o usuário 
// seja obrigado a digitar apenas, sem colar códigos externos
newInput1.addEventListener('paste', function(e) { e.preventDefault(); });
newInput2.addEventListener('paste', function(e) { e.preventDefault(); });

var aliens = [
    { name: "Heatblast", "code": "kenm" },
    { name: "Wildmutt", "code": "bric" },
    { name: "Diamondhead", "code": "taki" },
    { name: "XLR8", "code": "wjas" },
    { name: "GreyMatter", "code": "gujh" },
    { name: "Four Arms", "code": "nori" },
    { name: "Stinkfly", "code": "aval" },
    { name: "Ripjaws", "code": "vaxr" },
    { name: "Upgrade", "code": "funa" },
    { name: "Ghostfreak", "code": "rsam" },
    { name: "Cannonbolt", "code": "swor" },
    { name: "Wildvine", "code": "rame" },
    { name: "Spitter", "code": "unoi" },
    { name: "Blitzwolfer", "code": "ypet" },
    { name: "Perk Upchuck", "code": "bafa" },
    { name: "Snare-oh", "code": "ansn" },
    { name: "Frankenstrike", "code": "pkmn" },
    { name: "Gwen", code: "mura"}, {name: "Vilgax", code: "akec"},
];

        //Submit Button Animations
        var bc = 1;
        var submitanimation = setInterval(function() {
            bc++;
            if (bc == 1) {
                bc++;
            }

            if (bc == 3) {
                bc = 1;
            }

            submitbutton1.src = "images/bg/DNALab/inputs/button_" + bc + ".png";
            if (canIAnimeIt == true) {
                submitbutton2.src = "images/bg/DNALab/inputs/button_" + bc + ".png";
            }
        }, 810);

        //Draw Function

        function draw() {

            document.body.appendChild(submitbutton1);
            document.body.appendChild(submitbutton2);
            document.body.appendChild(backbutton);
            document.body.appendChild(backbutton2);
            document.body.appendChild(newInput1);
            document.body.appendChild(newInput2);
            document.body.appendChild(inputbox1);
            document.body.appendChild(inputbox2);
            document.body.appendChild(input1alien);
            document.body.appendChild(input2alien);
            document.body.appendChild(alientext1);
            document.body.appendChild(alientext2);
            document.body.appendChild(inputtop1);
            document.body.appendChild(inputtop2);
            document.body.appendChild(inputbottom1);
            document.body.appendChild(inputbottom2);
            document.body.appendChild(enteraliencode1);
            document.body.appendChild(enteraliencode2);
            document.body.appendChild(omnitrixtop);
            document.body.appendChild(omnitrixchargernull);
            document.body.appendChild(omnitrixchargerfull);
            document.body.appendChild(soundimg1);
            document.body.appendChild(sinalizer);

            //Draw Pre Fusion Image "?"
            fusioncontext.drawImage(assets.get("pretransition-i"), 0, 90, 770, 333);

            function backgroundElements() {
                var bg = {
                    desenha() {
                        var img = assets.get("bg"); //Background
                        bgcontext.drawImage(img, 0, 0, 804, 651);

                        var img2 = assets.get("overben10logo"); //Ben 10 Logo Particle
                        bgcontext.drawImage(img2, 65, 23, 192, 170);

                        var img3 = assets.get("ben10logo"); //Ben 10 Logo
                        bgcontext.drawImage(img3, 98, 50, 124, 120);

                        function soundimg() {
                            var framecounter = 1;

                            setInterval(function() {
                                framecounter++;
                                if (framecounter == 22) {
                                    framecounter = 1;
                                }
                                // OTIMIZAÇÃO: Puxa o ícone de som direto da memória RAM
                                soundimg1.src = soundPreloaded[framecounter - 1].src;
                            }, 60);
                        }

                        soundimg1.onclick = function() {
                            if (audio.paused ? audio.play() : audio.pause());
                        }

                        soundimg1.onmouseover = function() {
                            soundimg1.style.cursor = "url(images/cursor/cursor.cur), pointer";
                        }

                        soundimg();
                    }
                };
                bg.desenha();
            }

            function ben10() {

                //Ben 10
                var ben10 = {
                    desenha() {
                        var img1 = assets.get("ben10bg"); //Ben 10 BG
                        var img2 = assets.get("ben10"); //Ben 10
                        var img3 = assets.get("ben10omnitrixparticles"); //Ben 10 omnitrix particle
                        var img4 = assets.get("ben10omnitrixtop"); //Ben 10 omnitrix top

                        bgcontext.drawImage(img1, -5, bgcanvas.height - 525, 250, 471); //Ben 10 BG
                        bgcontext.drawImage(img2, 15, bgcanvas.height - 510, 208, 421); //Ben 10
                        bgcontext.drawImage(img3, 46, bgcanvas.height - 395); //Ben 10 omnitrix particle
                        bgcontext.drawImage(img4, 103, bgcanvas.height - 367); //Ben 10 omnitrix top
                    }
                };
                ben10.desenha();
            }

            function omnitrix() {

                //Parte inferior do omnitrix
                var omnitrixbottom = {
                    desenha() {
                        //Img 1
                        var img = assets.get("omnitrixbottom"); //Parte inferior do omnitrix
                        bgcontext.drawImage(img, 730 - 547, 605 - 168);

                        //Img 3
                        var img3 = assets.get("omnitrixsinalizer"); //(Base do sinalizador)
                        bgcontext.drawImage(img3, bgcanvas.width - 345, bgcanvas.height - 110);
                    }
                };

                //Parte do meio do omnitrix
                var omnitrixcenter = {
                    desenha() {
                        var img = assets.get("omnitrixcenter1");
                        bgcontext.drawImage(img, 615 - 304, 500 - 100);
                    }
                };

                //Execução dos desenhos:
                omnitrixbottom.desenha();
                omnitrixcenter.desenha();
            }

            function alienChooser() {

                function submit1() {
                    //Verifica se o primeiro valor existe. Se existir ele remove e passa para o segundo valor.
                    if (PrimusDB[newInput1.value.toLowerCase()] == null) {
                        if (newInput1.value.length > 0) {
                            //Draw Image Invalid DNA Code
                            inputecontext.drawImage(assets.get("invaliddnacode"), 250, 555);
                            //Hide Input1
                            newInput1.style.zIndex = "0";
                            //Hide Enter Alien Code
                            enteraliencode1.style.zIndex = "0";
                            //Hide Submit Button
                            submitbutton1.style.zIndex = "0";
                            //Hide Input Visual Box
                            inputbox1.style.zIndex = "0";
                            //Show Back Button
                            backbutton.style.zIndex = "6";
                            return;
                        }
                        return;
                    }

                    //Verifica se o primeiro alien existe.
                    if (PrimusDB[newInput1.value.toLowerCase()]) {
                        var dnacollectedstandbyimg = assets.get("aliendnacollected");

                        //Draw Image DNA Collected
                        inputecontext.drawImage(dnacollectedstandbyimg, 248, 555);

                        //Draw Alien Image
                        input1alien.src = AlienDB[newInput1.value.toLowerCase()];
                        input1alien.style.zIndex = "4";

                        //Hide Input1
                        newInput1.style.zIndex = "0";

                        //Hide Enter Alien Code
                        enteraliencode1.style.zIndex = "0";

                        //Hide Button
                        submitbutton1.style.zIndex = "0";
                        inputbox1.style.zIndex = "0";

                        //Show Input2
                        newInput2.style.zIndex = "6";

                        //Show Button2
                        submitbutton2.style.zIndex = "6";

                        //Change mouse cursor
                        submitbutton1.style.cursor = "default";
                    }

                    if (newInput1.value.toLowerCase() == "akec" || newInput1.value.toLowerCase() == "mura") {
                        newInput2.value = newInput1.value;
                        submitbutton1.style.cursor = "default";
                    }
                    submit2();
                    rodadaCompleta = true;
                }

                function submit2() {
                    inputtop2.src = "images/bg/DNALab/inputs/inputtop.png";
                    inputbottom2.src = "images/bg/DNALab/inputs/inputbottom.png";
                    submitbutton2.src = "images/bg/DNALab/inputs/button_1.png";
                    input2alien.src = "images/bg/DNALab/inputs/aliens/main.png";
                    enteraliencode2.src = "images/bg/DNALab/inputs/inputmessages/enteraliencode.png";
                    canIAnimeIt = true;

                    //Verificação ao clicar no segundo botão.
                    if (PrimusDB[newInput2.value.toLowerCase()] == null && newInput2.value.length > 0 || newInput2.value.length > 0 && PrimusDB[newInput1.value.toLowerCase()][newInput2.value.toLowerCase()] == null && newInput2.value.toLowerCase() != "akec" && newInput2.value.toLowerCase() != "mura") {
                        //Draw Image Invalid DNA Code
                        inputecontext.drawImage(assets.get("invaliddnacode"), 496, 555);
                        //Hide Input2
                        newInput2.style.zIndex = "0";
                        //Hide Enter Alien Code
                        enteraliencode2.style.zIndex = "0";
                        //Hide Submit Button
                        submitbutton2.style.zIndex = "0";
                        //Hide Input Visual Box
                        inputbox2.style.zIndex = "0";
                        //Show Back Button
                        backbutton2.style.zIndex = "6";
                        return;
                    }

                    if (newInput2.value.toLowerCase() == "akec" && newInput1.value.toLowerCase() != "akec" ||
                        newInput2.value.toLowerCase() == "mura" && newInput1.value.toLowerCase() != "mura") {
                        //Draw Image Cannot Use Dna Code
                        inputecontext.drawImage(assets.get("cannotusethiscode"), 524, 545);
                        //Hide Input2
                        newInput2.style.zIndex = "0";
                        //Hide Enter Alien Code
                        enteraliencode2.style.zIndex = "0";
                        //Hide Submit Button
                        submitbutton2.style.zIndex = "0";
                        //Hide Input Visual Box
                        inputbox2.style.zIndex = "0";
                        //Show Back Button
                        backbutton2.style.zIndex = "6";
                        return;
                    }

                    if (newInput2.value.toLowerCase() == newInput1.value.toLowerCase() && newInput2.value.toLowerCase() != "akec" && newInput2.value.toLowerCase() != "mura") {
                        //Draw Image Cannot Use Dna Code
                        inputecontext.drawImage(assets.get("cannotusethesamecode"), 524, 545);
                        //Hide Input2
                        newInput2.style.zIndex = "0";
                        //Hide Enter Alien Code
                        enteraliencode2.style.zIndex = "0";
                        //Hide Submit Button
                        submitbutton2.style.zIndex = "0";
                        //Hide Input Visual Box
                        inputbox2.style.zIndex = "0";
                        //Show Back Button
                        backbutton2.style.zIndex = "6";
                        return;
                    }

                    //Verifica se o segundo alien existe.
                    if (PrimusDB[newInput2.value.toLowerCase()]) {
                        var dnacollectedstandbyimg = assets.get("aliendnacollected");

                        //Draw Image DNA Collected
                        inputecontext.drawImage(dnacollectedstandbyimg, 494, 555);

                        //Draw Alien Image
                        input2alien.src = AlienDB[newInput2.value.toLowerCase()];
                        input2alien.style.zIndex = "4";

                        //Hide Input2
                        newInput2.style.zIndex = "0";

                        //Hide Enter Alien Code
                        enteraliencode2.style.zIndex = "0";

                        //Hide Button
                        submitbutton2.style.zIndex = "0";
                        inputbox2.style.zIndex = "0";
                        submitbutton2.style.cursor = "default";
                        animarissotudo();
                    }
                }

                function animarissotudo() {

                    function entrada() {
                        isEntradaRunning = true;
                        customDropdown.style.zIndex = "0"; // Garante que o dropdown esteja acima de tudo
                        //Variaveis das animações

                        //Transição de entrada "?"
                        var fimdatransicaodeentrada = false;
                        var transitionentercounter = 0;
                        var transitionentercounterc = false;

                        //Transição de saída
                        var fimdatransicaodesaida = false;
                        var transitionoutcounter = 0;
                        var transitionoutcounterc = false;
                        var transitionoutconter = 0;

                        //Demais coisas
                        var counter = 0;
                        var ocounter = 0;
                        var ocounterc = false;
                        var chegou = false;
                        var retornou = false;
                        var finalizouaprerender = false;
                        var finalizouarender = false;
                        var prerendercounter = 0;
                        var rendercounter = 0;
                        var alturaparalimpar = 0;
                        var fusion = new Image();
                        fusion.src = PrimusDB[newInput1.value.toLowerCase()][newInput2.value.toLowerCase()] + ".png";
                        var prefusion = new Image();
                        prefusion.src = PrimusDB[newInput1.value.toLowerCase()][newInput2.value.toLowerCase()] + "_pre.png";

                        var entradalateralverde = setInterval(function() {
                            if (ocounterc == false) {
                                ocounter++;
                            }

                            if (ocounter == 8) {
                                ocounterc = true;
                                clearInterval(entradalateralverde);
                            }

                        }, 40);

                        var transicaodeentrada = setInterval(function() {
                                //Verifica se a animação anterior foi executada, para executar essa.
                                if (ocounterc == true) {
                                    if (fimdatransicaodeentrada == false) {

                                        //Contador da transição de entrada
                                        if (transitionentercounter >= 0) {

                                            //Verifica se a transição ja chegou ao fim
                                            if (transitionentercounterc == false) {
                                                transitionentercounter++;
                                            }

                                            if (transitionentercounter <= 36) {
                                                //Nao tem muito o que dizer, é a altura pra limpar
                                                alturaparalimpar = 310 - transitionentercounter * 10;
                                                prefusioncontext.drawImage(assets.get("pretransition-a"), 0, 90, 770, 333);
                                                prefusioncontext.clearRect(0, 0, 770, alturaparalimpar);
                                            }

                                            //Para o contador quando alcançar 36
                                            if (transitionentercounter == 36) {
                                                transitionentercounterc = true;
                                                fimdatransicaodeentrada = true;
                                                clearInterval(transicaodeentrada);
                                            }
                                        }
                                    }
                                }
                            },
                            15);

                        var transicaodesaida = setInterval(function() {
                            //Verifica se a animação anterior foi executada, para executar essa.
                            if (fimdatransicaodeentrada == true) {

                                //Verifica se a transição não chegou ao seu fim
                                if (fimdatransicaodesaida == false) {

                                    //Contador da transição de saída
                                    if (transitionoutcounter >= 0) {

                                        //Verifica se a transição ja chegou ao fim
                                        if (transitionoutcounterc == false) {
                                            transitionoutcounter++;
                                        }

                                        if (transitionoutcounter <= 36) {
                                            //Faz a limpeza de baixo pra cima
                                            alturaparalimpar = 310 - transitionoutcounter * 10;
                                            prefusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                                            fusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                                        }

                                        //Para o contador quando alcançar 36
                                        if (transitionoutcounter == 36) {
                                            transitionoutcounterc = true;
                                            fimdatransicaodesaida = true;
                                            clearInterval(transicaodesaida);
                                        }
                                    }
                                }
                            }
                        }, 15);

                        var animaromnitrix = setInterval(function() {
                            if (fimdatransicaodesaida == true) {
                                if (ocounter == 8) {
                                    if (counter <= 9) {
                                        if (chegou == false) {
                                            counter++
                                            omnitrixtopY = 366 - 7.75 * counter;
                                            omnitrixtop.style.top = (interactivecanvas.offsetTop + omnitrixtopY) + "px";
                                        }
                                    }
                                }
                            }

                            if (counter == 8) {
                                chegou = true;
                            }

                            if (chegou == true) {
                                if (counter >= 1) {
                                    counter--;
                                    omnitrixtopY = 366 - 7.75 * counter;
                                    omnitrixtop.style.top = (interactivecanvas.offsetTop + omnitrixtopY) + "px";
                                } else {
                                    inputcontext.clearRect(0, 0, 770, 650);
                                    retornou = true;
                                    clearInterval(animaromnitrix);
                                }
                            }
                            // OTIMIZAÇÃO: Puxa o link direto da imagem salva na memória RAM
                            omnitrixtop.src = omnitrixPreloaded[counter].src;
                            if (counter > 0 ? sinalizer.src = "images/omnitrix/omnitrixsinalizeractive.png" : sinalizer.src = "images/omnitrix/omnitrixsinalizerinactive.png");
                        }, 50);

                        var saidalateralverde = setInterval(function() {
                            if (retornou == true) {
                                ocounter++;
                            }

                            if (ocounter == 15) {
                                clearInterval(saidalateralverde);
                            }

                            // OTIMIZAÇÃO: Puxa a animação lateral da memória RAM
                            omnitrixchargerfull.src = chargerPreloaded[ocounter].src;
                        }, 40);

                        var allrenders = setInterval(function() {
                            if (ocounter == 15) {
                                if (finalizouaprerender == false) {
                                    prerendercounter++;

                                    if (prerendercounter <= 47) {
                                        alturaparalimpar = 460 - prerendercounter * 10;
                                        prefusioncontext.drawImage(prefusion, 0, 90, 770, 333);
                                        prefusioncontext.clearRect(0, 0, 770, alturaparalimpar);
                                    }

                                    if (prerendercounter == 46) {
                                        finalizouaprerender = true;
                                    }
                                }

                                if (finalizouaprerender == true) {
                                    if (finalizouarender == false) {
                                        rendercounter++;
                                    }
                                    if (rendercounter <= 47) {
                                        alturaparalimpar = 460 - rendercounter * 10;
                                        fusioncontext.drawImage(fusion, 0, 90, 770, 333);
                                        prefusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                                    }

                                    if (rendercounter == 46) {
                                        finalizouarender = true;
                                        document.body.appendChild(downloadandprint);
                                        document.body.appendChild(or);
                                        document.body.appendChild(startover);
                                        clearInterval(allrenders);

                                        // CORREÇÃO 1: Ativa a sequência apenas quando eles estão de fato no HTML
                                        animateSequentially();
                                    }
                                }
                            }
                        }, 8);

                        // OTIMIZAÇÃO DEFINITIVA: Mantém a sequência perfeita original e roda liso na GPU
// CORREÇÃO 2: Garante o reflow correto e impede que a fila trave
                        function animateAndResize(element, duration, size) {
                            return new Promise((resolve) => {
                                element.style.animation = "none";
                                void element.offsetHeight; // Agora funciona perfeitamente pois o elemento já está no DOM

                                element.style.animation = `grow ${duration}s ease-in-out`;
                                element.style.width = size.width;
                                element.style.height = size.height;

                                // Usar o temporizador baseado no tempo da animação é 100% seguro contra travamentos
                                setTimeout(resolve, duration * 1000);
                            });
                        }

                        async function animateSequentially() {
                            // Animação para 'downloadandprint'
                            await animateAndResize(downloadandprint, 0.2, { height: "28px", width: "75.04px" });

                            // Animação para 'or'
                            await animateAndResize(or, 0.2, { height: "9px", width: "12.96px" });

                            // Animação para 'startover'
                            await animateAndResize(startover, 0.2, { height: "12px", width: "75px" });

                            isEntradaRunning = false;
                        }

                        // Inicia a animação sequencial
                        //animateSequentially();
                    }
                    entrada();
                }

                function saida() {

                    isSaidaRunning = true; // Começou!
                    customDropdown.style.zIndex = "100"; // Garante que o dropdown esteja acima de tudo

                    //Variaveis das animações

                    //Demais coisas
                    var counter = 0;
                    var ocounter = 0;
                    var ocounterc = false;
                    var chegou = false;
                    var retornou = false;
                    var finalizouaprerender = false;
                    var finalizouarender = false;
                    var prerendercounter = 0;
                    var rendercounter = 0;
                    var alturaparalimpar = 0;
                    var desenhouaprimeiraparte = false;
                    var desenhouasegundaparte = false;
                    var desenhouaimagem = false;
                    var mainrendercounter = 0;
                    var fusion = new Image();
                    fusion.src = PrimusDB[newInput1.value.toLowerCase()][newInput2.value.toLowerCase()] + ".png";
                    var prefusion = new Image();
                    prefusion.src = PrimusDB[newInput1.value.toLowerCase()][newInput2.value.toLowerCase()] + "_pre.png";

                    var prerender = setInterval(function() {
                        if (finalizouaprerender == false) {
                            prerendercounter++;

                            if (prerendercounter <= 47) {
                                alturaparalimpar = 460 - prerendercounter * 10;
                                prefusioncontext.drawImage(prefusion, 0, 90, 770, 333);
                                prefusioncontext.clearRect(0, 0, 770, alturaparalimpar);
                            }

                            if (prerendercounter == 46) {
                                finalizouaprerender = true;
                            }
                        }

                        if (finalizouaprerender == true) {
                            if (finalizouarender == false) {
                                rendercounter++;
                            }
                            if (rendercounter <= 47) {
                                alturaparalimpar = 460 - rendercounter * 10;
                                fusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                                prefusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                            }

                        }
                        if (rendercounter == 46) {
                            finalizouarender = true;
                            clearInterval(prerender);
                        }
                    }, 8);

                    var entradalateralverde = setInterval(function() {
                        if (ocounterc == false) {
                            ocounter++;
                        }

                        if (ocounter == 8) {
                            ocounterc = true;
                            clearInterval(entradalateralverde);
                        }

                    }, 40);

                    var animaromnitrix = setInterval(function() {

                        if (finalizouaprerender == true) {
                            if (ocounterc == true) {
                                if (counter <= 9) {
                                    if (chegou == false) {
                                        counter++
                                        omnitrixtopY = 366 - 7.75 * counter;
                                        omnitrixtop.style.top = (interactivecanvas.offsetTop + omnitrixtopY) + "px";
                                    }
                                }
                            }
                        }

                        if (counter == 8) {
                            chegou = true;
                        }

                        if (chegou == true) {
                            if (counter >= 1) {
                                counter--;
                                omnitrixtopY = 366 - 7.75 * counter;
                                omnitrixtop.style.top = (interactivecanvas.offsetTop + omnitrixtopY) + "px";
                            } else {
                                inputcontext.clearRect(0, 0, 770, 650);
                                clearInterval(animaromnitrix);
                                retornou = true;
                            }
                        }
                        // OTIMIZAÇÃO: Puxa o link direto da imagem salva na memória RAM
                        omnitrixtop.src = omnitrixPreloaded[counter].src;
                        if (counter > 0 ? sinalizer.src = "images/omnitrix/omnitrixsinalizeractive.png" : sinalizer.src = "images/omnitrix/omnitrixsinalizerinactive.png");
                    }, 50);

                    var animeMainRender = setInterval(function() {
                        if (retornou == true) {

                            if (mainrendercounter >= 0) {
                                if (desenhouaprimeiraparte == false) {
                                    mainrendercounter++;
                                }
                            }

                            if (mainrendercounter <= 31) {
                                alturaparalimpar = 310 - mainrendercounter * 10;
                                prefusioncontext.drawImage(assets.get("pretransition-a"), 0, 90, 770, 333);
                                prefusioncontext.clearRect(0, 0, 770, alturaparalimpar);
                            }

                            if (mainrendercounter == 31) {
                                desenhouaprimeiraparte = true;
                                mainrendercounter = 0;
                                clearInterval(animeMainRender);
                            }

                        }
                    }, 15);

                    var animeMainRender2 = setInterval(function() {
                        if (desenhouaprimeiraparte == true) {

                            if (mainrendercounter >= 0) {
                                if (desenhouasegundaparte == false) {
                                    mainrendercounter++;
                                }
                            }

                            if (mainrendercounter <= 31) {
                                alturaparalimpar = 310 - mainrendercounter * 10;
                                if (desenhouaimagem == false) {
                                    fusioncontext.drawImage(assets.get("pretransition-i"), 0, 90, 770, 333);
                                    desenhouaimagem = true;
                                }
                                prefusioncontext.clearRect(0, alturaparalimpar, 770, alturaparalimpar);
                            }

                            if (mainrendercounter == 31) {
                                desenhouasegundaparte = true;
                                isSaidaRunning = false; // Terminou!                                
                                clearInterval(animeMainRender2);
                            }
                        }
                    }, 15);

                    // Altere apenas essa parte final do seu setInterval 'saidalateralverde'
                    var saidalateralverde = setInterval(function() {
                        if (retornou == true) {
                            ocounter++;
                        }

                        if (ocounter == 15) {
                            clearInterval(saidalateralverde);
                        }

                        omnitrixchargerfull.src = chargerPreloaded[ocounter].src;
                    }, 40);
                }

                function habilitarEnterNoInput(inputElement, callback) {
                    inputElement.addEventListener('keydown', function(event) {
                        if (event.key === 'Enter') {
                            event.preventDefault();

                            // 1. Prioridade: Se o campo de input está ativo (visível), faz o Submit
                            if (parseInt(inputElement.style.zIndex) > 0) {
                                callback();
                            } 
                            // 2. Se o input NÃO está ativo, mas o erro está, tenta o Back
                            else if (parseInt(backbutton.style.zIndex) > 0) {
                                backbutton.click();
                            } 
                            else if (parseInt(backbutton2.style.zIndex) > 0) {
                                backbutton2.click();
                            }
                        }
                    });
                }

                // Aplicando aos seus inputs:
                habilitarEnterNoInput(newInput1, submit1);
                habilitarEnterNoInput(newInput2, submit2);

                //Ao clicar no submit button 1
                submitbutton1.onclick = function() {
                    submit1();
                }

                //Altera o ponteiro do mouse
                submitbutton1.onmouseover = function() {
                    submitbutton1.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

                //Ao clicar no submit button 2
                submitbutton2.onclick = function() {
                    submitbutton1.style.cursor = "default";
                    submit2();
                }

                //Altera o ponteiro do mouse
                submitbutton2.onmouseover = function() {
                    submitbutton2.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

                backbutton.onclick = function() {
                    //Erase error message
                    inputecontext.clearRect(242, 555, 170, 37);
                    //Remove input value
                    newInput1.value = "";
                    //Hide back button
                    backbutton.style.zIndex = "0";
                    //Show input bg
                    inputbox1.style.zIndex = "4";
                    //Show interactive Input
                    newInput1.style.zIndex = "6";
                    //Hide Enter Alien Code
                    enteraliencode1.style.zIndex = "4";
                    //Show submit button
                    submitbutton1.style.zIndex = "6";
                    //Change mouse cursor
                    backbutton.style.cursor = "default";
                }

                //Altera o ponteiro do mouse
                backbutton.onmouseover = function() {
                    backbutton.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

                backbutton2.onclick = function() {
                    //Erase error message
                    inputecontext.clearRect(490, 545, 170, 37);
                    //Remove input value
                    newInput2.value = "";
                    //Hide back button
                    backbutton2.style.zIndex = "0";
                    //Show input bg
                    inputbox2.style.zIndex = "4";
                    //Show interactive Input
                    newInput2.style.zIndex = "6";
                    //Hide Enter Alien Code
                    enteraliencode2.style.zIndex = "4";
                    //Show submit button
                    submitbutton2.style.zIndex = "6";
                    //Change mouse cursor
                    backbutton2.style.cursor = "default";
                }

                //Altera o ponteiro do mouse
                backbutton2.onmouseover = function() {
                    backbutton2.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

                startover.onclick = function() {

                    saida();

                    // CORREÇÃO 3: Reseta totalmente largura, altura e as animações antigas dos elementos
                    downloadandprint.style.width = "0px";
                    downloadandprint.style.height = "0px";
                    downloadandprint.style.animation = "none";

                    or.style.width = "0px";
                    or.style.height = "0px";
                    or.style.animation = "none";

                    startover.style.width = "0px";
                    startover.style.height = "0px";
                    startover.style.animation = "none";

                    //Submit Button 2 Animation
                    canIAnimeIt = false;

                    //Clear input values
                    newInput1.value = "";
                    newInput2.value = "";
                    //Erase Input Contexts
                    inputecontext.clearRect(0, 0, 770, 650);

                    //Reset Aliens Inputs
                    input1alien.src = "images/bg/DNALab/inputs/aliens/main.png";
                    input2alien.src = "images/bg/DNALab/inputs/aliens/maininactive.png";
                    inputtop2.src = "images/bg/DNALab/inputs/inputtopinactive.png";
                    inputbottom2.src = "images/bg/DNALab/inputs/inputbottominactive.png";
                    submitbutton2.src = "images/bg/DNALab/inputs/buttoninactive.png";
                    enteraliencode2.src = "images/bg/DNALab/inputs/inputmessages/enteraliencodeinactive.png";

                    //Show Input Box
                    inputbox1.style.zIndex = "4";
                    inputbox2.style.zIndex = "4";

                    //Show Input
                    newInput1.style.zIndex = "6";

                    //Show EnterAlienCode
                    enteraliencode1.style.zIndex = "6";
                    enteraliencode2.style.zIndex = "6";

                    //Show Submit Buttons
                    submitbutton1.style.zIndex = "6";
                    submitbutton2.style.zIndex = "4";

                    //Hide Texts
                    downloadandprint.remove();
                    or.remove();
                    startover.remove();

                    //Change mouse cursor
                    startover.style.cursor = "default";
                    downloadandprint.style.cursor = "default";
                }

                startover.onmouseover = function() {
                    startover.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

                function toDataURL(url) {
                    return fetch(url).then((response) => {
                        return response.blob();
                    }).then(blob => {
                        return URL.createObjectURL(blob);
                    });
                }

                async function download() {
                    const imageUrl = PrimusDB[newInput1.value][newInput2.value] + ".png";
                    const image = new Image();
                
                    image.crossOrigin = "Anonymous"; // Permite carregar imagens de outras origens
                    image.src = imageUrl;
                
                    image.onload = () => {
                        const canvas = document.createElement("canvas");
                        const ctx = canvas.getContext("2d");
                
                        canvas.width = image.width;
                        canvas.height = image.height;
                        ctx.drawImage(image, 0, 0);
                
                        // Obter os dados da imagem
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        const data = imageData.data;
                
                        let top = canvas.height, left = canvas.width, right = 0, bottom = 0;
                
                        // Encontrar os limites não transparentes
                        for (let y = 0; y < canvas.height; y++) {
                            for (let x = 0; x < canvas.width; x++) {
                                const index = (y * canvas.width + x) * 4;
                                const alpha = data[index + 3];
                
                                if (alpha > 0) { // Pixel não transparente
                                    if (x < left) left = x;
                                    if (x > right) right = x;
                                    if (y < top) top = y;
                                    if (y > bottom) bottom = y;
                                }
                            }
                        }
                
                        // Dimensões do novo corte
                        const croppedWidth = right - left + 1;
                        const croppedHeight = bottom - top + 1;
                
                        // Criar um novo canvas com a imagem cortada
                        const croppedCanvas = document.createElement("canvas");
                        const croppedCtx = croppedCanvas.getContext("2d");
                        croppedCanvas.width = croppedWidth;
                        croppedCanvas.height = croppedHeight;
                
                        croppedCtx.drawImage(
                            canvas,
                            left, top, croppedWidth, croppedHeight,
                            0, 0, croppedWidth, croppedHeight
                        );
                
                        // Remover os canvas da tela após o processamento
                        canvas.remove();
                
                        // Baixar a imagem cortada
                        croppedCanvas.toBlob(blob => {
                            const a = document.createElement("a");
                            a.href = URL.createObjectURL(blob);
                            a.download = "";
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            croppedCanvas.remove(); // Remover o croppedCanvas após o download
                        }, "image/png");
                    };
                
                    image.onerror = () => {
                        console.error("Erro ao carregar a imagem.");
                    };
                }       

                downloadandprint.onclick = function() {
                    download();
                }

                downloadandprint.onmouseover = function() {
                    downloadandprint.style.cursor = "url(images/cursor/cursor.cur), pointer";
                }

function createCustomDropdown(aliens, targetSelect) {
var styleNode = document.createElement("style");
    styleNode.innerHTML = `
        .hidden-scroll {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE/Edge */
        }
        .hidden-scroll::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera, Edge Novo */
        }
    `;
    document.head.appendChild(styleNode);

// 1. Cria o container principal
var dropdown = document.createElement("div");
dropdown.style.position = "absolute";
dropdown.style.left = (interactivecanvas.offsetLeft + 230) + "px";
dropdown.style.top = (interactivecanvas.offsetTop + 45) + "px";
dropdown.style.zIndex = "100";
dropdown.style.width = "160px";
dropdown.style.fontFamily = "HouseSampler";
dropdown.style.fontSize = "18px";
dropdown.style.background = "#000";
dropdown.style.border = "2px solid lime";
dropdown.style.color = "lime";
dropdown.style.cursor = "pointer";

// Cria o elemento do título com o estilo centralizado
var header = document.createElement("div");
header.innerHTML = "SELECT TARGET";
header.style.padding = "10px";
header.style.textAlign = "center"; // Simples e resolve para texto
dropdown.appendChild(header);

    // 2. Cria a lista de opções (o "menu")
    var list = document.createElement("div");
    list.style.display = "none";
    list.style.maxHeight = "200px"; // Isso limita o tamanho (aprox. 5 itens)
    list.style.overflowY = "auto";  // Ativa o scroll
    list.style.borderTop = "1px solid lime";
    list.className = "hidden-scroll";

        // 3. Popula os aliens na lista
    aliens.forEach(function(alien) {
        var item = document.createElement("div");
        item.style.padding = "8px";
        item.style.display = "flex";          // Alinha imagem e texto
        item.style.alignItems = "center";     // Centraliza verticalmente
        item.style.cursor = "pointer";
        item.style.borderBottom = "1px solid #333";

        // Criação da Imagem
        var img = document.createElement("img");
        img.src = "images/bg/DNALab/inputs/aliens/" + alien.code + ".png"; // Ajuste o caminho da pasta aqui
        img.style.width = "30px";  // Tamanho fixo para o ícone
        img.style.height = "30px";
        img.style.marginRight = "10px";
        img.style.borderRadius = "4px"; // Um toque estético

        // Criação do Texto
        var span = document.createElement("span");
        span.innerHTML = alien.name;

        item.appendChild(img);
        item.appendChild(span);

        // O evento de clique continua o mesmo
        item.onclick = function(e) {
            e.stopPropagation();
            processAlienSelection(alien.code);
            list.style.display = 'none'; // Agora vai fechar!
            //dropdown.firstChild.innerHTML = alien.name; // Atualiza o label
        };
        
        list.appendChild(item);
    });
    
// 4. Lógica de abertura/fechamento com bloqueio total de segurança
    dropdown.onclick = function() {
        var isStartOverVisible = parseInt(startover.style.width) > 0;

        // O menu NÃO ABRE se:
        // 1. A animação de entrada ou saída estiver rodando
        // 2. O botão de startover estiver ativo na tela esperando o reset
        if ((typeof isEntradaRunning !== "undefined" && isEntradaRunning) || isStartOverVisible) {
            
            console.log("Omnitrix ocupado ou aguardando reset. Menu bloqueado.");
            return; 
        }

        list.style.display = (list.style.display === "none") ? "block" : "none";
    };

    dropdown.appendChild(list);
    document.body.appendChild(dropdown);
    return dropdown;
}

function processAlienSelection(alienCode) {
    if (alienCode === "SELECT TARGET") return;

    // 1. Mapeamento imediato dos botões e inputs
    var isInput1Active = parseInt(newInput1.style.zIndex) > 0;
    var isInput2Active = parseInt(newInput2.style.zIndex) > 0;
    var isStartOverVisible = parseInt(startover.style.width) > 0;
    var isBackButtonVisible = parseInt(backbutton.style.zIndex) > 0;
    var isBackButton2Visible = parseInt(backbutton2.style.zIndex) > 0;

    // Verifica se estamos esperando o segundo alien (Slot 2 ativo e vazio)
    var esperandoSegundoAlien = isInput2Active && newInput1.value.trim() !== "" && newInput2.value.trim() === "";

    // Guardamos o alien atual no buffer simples
    pendingAlien = alienCode;

    // 2. Lógica de Reset / Voltar (Execução imediata)
    var needsReset = false;
    
    if (!esperandoSegundoAlien && isStartOverVisible) {
        startover.click(); 
        needsReset = true;
    } else if (!esperandoSegundoAlien && isBackButtonVisible) {
        backbutton.click();
        needsReset = true;
    } else if (!esperandoSegundoAlien && isBackButton2Visible) {
        backbutton2.click();
        needsReset = true;
    }

    // 3. Se precisou resetar (por startover ou erro), espera a 'saida' limpar a tela para injetar no input1
    if (needsReset) {
        var checkSaida = setInterval(function() {
            if (!isSaidaRunning) {
                clearInterval(checkSaida);
                
                var activeInput = (parseInt(newInput1.style.zIndex) > 0) ? newInput1 : newInput2;
                if (activeInput) {
                    activeInput.value = pendingAlien;
                    if (activeInput === newInput1) {
                        submit1();
                    } else {
                        submitbutton1.style.cursor = "default";
                        submit2();
                    }
                }
                pendingAlien = null;
            }
        }, 50);
        
        return;
    }

    // 4. Fluxo normal (Inserção direta quando o painel já está limpo e esperando o clique)
    var activeInput = isInput1Active ? newInput1 : (isInput2Active ? newInput2 : null);
    if (activeInput) {
        activeInput.value = alienCode;
        if (activeInput === newInput1) {
            submit1();
        } else {
            submitbutton1.style.cursor = "default";
            submit2();
        }
    }
}

this.customDropdown = createCustomDropdown(aliens, newInput1); // Chama a função para criar o dropdown
            }
            
            //Execução dos desenhos.

            backgroundElements();
            omnitrix();
            alienChooser();
            ben10();
        }