// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// Автопечать заголовка

    // const elems = document.querySelectorAll('#typing'); 
        // elem.textContent = ''
    function typeText(){
    
        let line = 0;
        let count = 0;
        let out = '';

        function typeLine(){
            // рисую строку
            let interval = setTimeout(function() {
                out += t[line][count];
                elem.innerHTML = out;
                console.log(out, 'out');
                // Переходи к следующему символу
                count++;
                // Поверка
                // не закончилась ли строка
                if (count >= t[line].length) {
                    removeLine()
                   if (count == 0) {
                    line++;
                    typeLine();
                   }

                    // line++;
                if (line == t.length) {
                    // очистила таймаут
                    clearTimeout(interval); 
                    return true;
                }
                }
                typeLine();
            }, 200);
        }
        typeLine();
        const removeLine = () => {
            // идентификатор для даного интервала
            let interval
            interval = setInterval(() => {
                out = out.slice(0, -1)
                elem.textContent = out
                count--
            }, 50)
        }
    }
    // typeText();

const typingFunc = () => {
    const elems = document.querySelectorAll('#typing'); 

    const typing = (elem) => {
        const delay = elem.dataset.delay || 2000
        const startDelay = elem.dataset.startDelay || 0
        const removeDelay = elem.dataset.removeDelay || 1000
        const addSpeed = elem.dataset.addSpeed || 50
        const removeSpeed = elem.dataset.removeSpeed || 20
        // Coздаю переменную в которую помещаю текст
        const text = elem.textContent.replace(/\s+/g, ' ').trim()

        let line = 0;
        let count = 0;
        let newText = '';
      
        // Зачищаю текст на странице
        elem.textContent = "";
     
        // Вывожу в консоль каждую отдельную букву с интервалом
        // Сделаю через setInterval, которая примит колбек с периодичностью в 500мс
        const addTyping = () => {
            let interval
        
            interval = setInterval(() => {
                newText += text[count]
                elem.textContent = newText
                count++;
                // Проверка
                // Не закончилась ли строка
                if (count === text.length) {
                    clearInterval(interval)
                    setTimeout(removeTyping, removeDelay)
                }
            }, addSpeed)
        }
        // Функция которая удаляет текст в обратную сторону
        // caunt равен длине строки, необходимо удалять по одному символу с канца строки
        const removeTyping = () => {
            let interval
            
            interval = setInterval(() => {
                if (newText.length) {
                // Удаляет по одному символу с нашей строки
                newText = newText.slice(0, -1)
                // Записываю все в наш элемент
                elem.textContent = newText
                count--
                } else {
                    clearInterval(interval)
                    setTimeout (addTyping, delay)
                }
                      
                // if (count === text.length) {
                //     clearInterval(interval)
                // }
            }, removeSpeed)
        }
        setTimeout (addTyping, startDelay)
       

    }
    elems.forEach((elem) => {
        typing(elem)
    })

    // for (let i = 0; i < text.length; i++) {

    // }
}

// typingFunc()




const printFunc = () => {
    const text = [
        "Устали отращивать волосы"
        // "Сделали неудачную стрижку",
        // "Наростите волосы"
    ];
    let line = 0;

    const elems = document.querySelectorAll('#typing'); 

    const print = (elem) => {
        elem.textContent = ''   
              
            let t = text[line].trim()
            let count = 0
            let newLine = ''
          
            const addPrint = () => {
             
                // Создаю индетификатор для интервала
                let interval
                interval = setInterval(() => {
    
                    newLine += t[count]
                    elem.textContent = newLine
                    count++
                    if (count === t.length) {
                        clearInterval(interval)
                        setTimeout(() => {
                            removePrint()
                            // line++
                        }, 100)
                    }
                }, 100)
            }
            const removePrint = () => {
                let interval
                interval = setInterval(() => {  
                        //    Удаляю по одному символу с конца строки
                     
                    if (newLine.length) {
                        newLine = newLine.slice(0, -1)
                        elem.textContent = newLine
                        console.log(newLine, 'newLine')
                        count--
                    } else {
                        clearInterval(interval) 
                      
                        // addPrint()
        
                    }
                }, 100)
            }
            addPrint()  
   
        

  

               
    }

    elems.forEach((elem) => {
      print(elem);
    })
}
// printFunc()
const typewriterFunc  = () => {
    const typewtiterElements = document.querySelectorAll('#typing');
   
 
    const typing =  (typewtiterElement) => {
         const delay = typewtiterElement.dataset.delay || 2000
        const startDelay = typewtiterElement.dataset.startDelay || 0
        const removeDelay = typewtiterElement.dataset.removeDelay || 1000
        const addSpeed = typewtiterElement.dataset.addSpeed || 50
        const removeSpeed = typewtiterElement.dataset.removeSpeed || 20

        const wordsArray = JSON.parse(typewtiterElement.dataset.words);
        typewtiterElement.textContent = "";
        // cтрока
        let currentWordIndex = 0;
        // символы в строке
        let currentCharacterIndex = 0; 
        let isTyping = true;

        function typewriter() {
            let currentWord = wordsArray[currentWordIndex];
         
            if(isTyping) {
                currentCharacterIndex++;
          
            typewtiterElement.innerText = currentWord.substring(0, currentCharacterIndex);
            if(currentCharacterIndex === currentWord.length){
                isTyping = false;
                setTimeout(typewriter, delay)
                return;
            }
            setTimeout(typewriter, getRandomInt());
        } else {         
            currentCharacterIndex--;
            typewtiterElement.innerText = currentWord.substring(0, currentCharacterIndex);
            if(currentCharacterIndex === 0) {
                isTyping = true;
                currentWordIndex = (currentWordIndex + 1) % wordsArray.length;
                setTimeout(typewriter, delay);
                return;
            }
            setTimeout(typewriter, removeSpeed)
        } 
        }
     
    setTimeout(typewriter, startDelay);
    }

    function getRandomInt(min = 50, max = 150) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    typewtiterElements.forEach((typewtiterElement) => {
        typing(typewtiterElement);
    })
  
}

typewriterFunc ()

// Показать/скрыть текст по клику
const showTexts = () => {
    const showTextsArray = document.querySelectorAll('[data-showTexts]');
if (showTextsArray.length > 0) {
  
// Получение обычных блоков
// Изначально я получаю коллекцию, т. к. 
    const showTextsRegular = Array.from(showTextsArray).filter(function(item, index, self) {
       
        return !item.dataset.showtexts.split(",")[0];
     
       
    });
    // Инициализация обычных спойлеров
    if (showTextsRegular.length > 0) {
        initshowTexts(showTextsRegular);
    }

//Получение спойлеров с медиа запросами
    const showTextsMedia = Array.from(showTextsArray).filter(function(item, index, self) {
        return item.dataset.showtexts.split(",")[0];
    });

//Инициализация спойлеров с медиа запросами
if (showTextsMedia.length > 0) {
    const breakpointsArray = [];
    showTextsMedia.forEach(item => {
        const params = item.dataset.showtexts;
        const breakpoint = {};
        const paramsArray = params.split(",");
        breakpoint.value = paramsArray[0];
        breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
        breakpoint.item = item;
        breakpointsArray.push(breakpoint);
    });
// Получаю уникальные брэйкпоинты
    let mediaQueries = breakpointsArray.map(function(item) {
        return '(' + item.type + "-width:" + item.value + "px)," + item.value + ',' + item.type;
    });
    // убираю дубли
    mediaQueries = mediaQueries.filter(function(item, index, self) {
        return self.indexOf(item) === index;
    });
// Работа с каждым брэйкпоинтом
    mediaQueries.forEach(breakpoint => {
        const paramsArray = breakpoint.split(",");
        const mediaBreakpoint = paramsArray[1];
        const mediaType = paramsArray[2];
        const matchMedia = window.matchMedia(paramsArray[0]);
        // Объекты с нужными условиями
    const showTextsArray = breakpointsArray.filter(function(item) {
    if (item.value === mediaBreakpoint && item.type === mediaType) {
        return true;
    }   
});
        // Событие
    matchMedia.addListener(function() {
    initshowTexts(showTextsArray, matchMedia);
});
initshowTexts(showTextsArray, matchMedia);
    });
}
// Инициализация
function initshowTexts(showTextsArray, matchMedia = false) {
    showTextsArray.forEach(showTextsBlock => {
        showTextsBlock = matchMedia ? showTextsBlock.item : showTextsBlock;
        if (matchMedia.matches || !matchMedia) {
            showTextsBlock.classList.add('_init');
            initShowTextBody( showTextsBlock);
            showTextsBlock.addEventListener("click", setShowTextAction);
        } else {
            showTextsBlock.classList.remove('_init');
            initShowTextBody(showTextsBlock, false);
            showTextsBlock.removeEventListener("click", setShowTextAction);
        }
    });
}
// Работа с контентом

    function initShowTextBody(showTextsBlock, hideShowTextBody = true) {
        const showTextTitles = showTextsBlock.querySelectorAll('[data-showtext]');
        if (showTextTitles.length > 0) {
            showTextTitles.forEach(showTextTitle => {  
       
                    console.log('lena', showTextTitle) 
      
                if (hideShowTextBody) { 
                                    
                    showTextTitle.removeAttribute('tabindex');                 
                
                    if (!showTextTitle.classList.contains('_active')) {
                       
                        showTextTitle.previousElementSibling.hidden = true;
                                                              
                    }
                        }  else {    
                            // console.log('lena1')                
                            showTextTitle.setAttribute('tabindex', '-1');                           
                            showTextTitle.previousElementSibling.hidden = false; 
                                                              
                            }
            });
        }
    }
    function setShowTextAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-showtext') || el.closest('[data-showtext]')) {
            const showtextTitle = el.hasAttribute('data-showtext') ? el : el.closest('[data-showtext]');      
            if (!showtextTitle.classList.contains('_active')) {          
                showtextTitle.innerHTML = 'Свернуть<span></span>';} else
                 {showtextTitle.innerHTML = 'Читать далее<span></span>'}
            const showtextsBlock = showtextTitle.closest('[data-showtext]');
            const oneShowtext = showtextsBlock.hasAttribute('data-one-showtext') ? true : false;
            if (!showtextsBlock.querySelectorAll('_slide').length) {
                if (oneShowtext && !showtextTitle.classList.contains('_active')) {               
                             
                    hideShowtextsBody(showtextsBlock);

                }
                showtextTitle.classList.toggle('_active');            
       
                _slideToggle(showtextTitle.previousElementSibling, 500);
            }
            e.preventDefault();            
        }
    }
    function hideShowtextsBody (showtextsBlock) {
        const showtextActiveTitle = showtextsBlock.querySelector('[data-showtext]._active');      
        if (showtextActiveTitle) {                    
            _slideUp(showtextActiveTitle.previousElementSibling, 500);
        }
    }

}
// SlideToggle
let _slideUp = (target, duration = 500) => {
    console.log(target, 'target');
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.style.transitionProperty = 'height, margin, padding';
		target.style.transitionDuration = duration + 'ms';
		target.style.height = `${target.offsetHeight}px`;
		target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		window.setTimeout(() => {
			target.hidden = true;
			target.style.removeProperty('height');
			target.style.removeProperty('padding-top');
			target.style.removeProperty('padding-bottom');
			target.style.removeProperty('margin-top');
			target.style.removeProperty('margin-bottom');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');	
            }, duration);
	}
}
let _slideDown = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		target.hidden = target.hidden ? false : null;
		let height = target.offsetHeight;
		target.style.overflow = 'hidden';
		target.style.height = 0;
		target.style.paddingTop = 0;
		target.style.paddingBottom = 0;
		target.style.marginTop = 0;
		target.style.marginBottom = 0;
		target.offsetHeight;
		target.style.transitionProperty = "height, margin, padding";
		target.style.transitionDuration = duration + 'ms';
		target.style.height = height + 'px';
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		window.setTimeout(() => {
			target.style.removeProperty('height');
			target.style.removeProperty('overflow');
			target.style.removeProperty('transition-duration');
			target.style.removeProperty('transition-property');
			target.classList.remove('_slide');
			// Створюємо подію
			// document.dispatchEvent(new CustomEvent("slideDownDone", {
			// 	detail: {
			// 		target: target
			// 	}
			// }));
		}, duration);
	}
}
let _slideToggle = (target, duration = 500) => {
	if (target.hidden) {
		return _slideDown(target, duration);
	} else {
		return _slideUp(target, duration);
	}
}
}
showTexts ()

// Маска ввода телефона
const phoneInput = () => {
    document.addEventListener("DOMContentLoaded", function() {
        const phoneInputs = document.querySelectorAll('input[data-tel-input]');
        console.log('phoneInputs', phoneInputs);
        // Эта функция принимает input и возвращает только числа, буду вырезать все символы кроме чисел
        // и буду с ними работать
        let getInputNunbersValue = function(input) {
            return input.value.replace(/\D/g, "")          
        }
     
        let onPhoneInput = function(e) {
            let input = e.target,                
                inputNumbersValue = getInputNunbersValue(input),
                // рузультат который на финише установим инпуту
                formatedInputValue = "",
            //Если инпут пустой после обрезки, то очищаю поле ввода
                selectionStart = input.selectionStart;

            if (!inputNumbersValue){
                return input.value = "";
            } 

            if (input.value.length != selectionStart) {
                console.log('середина', e);
                if (e.data && /\D/g.test(e.data)) {
                    input.value = inputNumbersValue;
                }
                return
            }
            // Определяю украинский номер или нет 
            if (["3", "8", "0"].indexOf(inputNumbersValue[0]) > -1){
                // if (inputNumbersValue[0] == "8") inputNumbersValue = "3" + inputNumbersValue;
              if (inputNumbersValue[0] == "0") inputNumbersValue = "38" + inputNumbersValue;
            //   if (inputNumbersValue[0] == "8") inputNumbersValue = "3" + inputNumbersValue;
             
            //   Если человек начинает набор с 8, то номер начинается с 8
            // Если с 7, то ок, номер с 7
            // Начинаю собирать
            // Если inputNumbersValue[0] = 8, тогда будет 8, в противном случае будет +3
              let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+38";
              formatedInputValue = firstSymbols;  
              if (firstSymbols === "+38") {
                if (inputNumbersValue.length > 1){
                    formatedInputValue += " (" + inputNumbersValue.substring(2, 5);
                    }
                    if (inputNumbersValue.length >= 6){
                        formatedInputValue +=") " + inputNumbersValue.substring(5, 8);
                    }
                    if (inputNumbersValue.length >= 9){
                        formatedInputValue += '-' + inputNumbersValue.substring(8, 10);
                    }
         
                    if (inputNumbersValue.length >= 11){
                        formatedInputValue += '-' + inputNumbersValue.substring(10, 12);
                    }
              } else {
                if (inputNumbersValue.length > 1){
                    formatedInputValue += " (" + inputNumbersValue.substring(1, 4);
                    }
                    if (inputNumbersValue.length >= 5){
                        formatedInputValue +=") " + inputNumbersValue.substring(4, 7);
                    }
                    if (inputNumbersValue.length >= 8){
                        formatedInputValue += '-' + inputNumbersValue.substring(7, 9);
                    }
   
                    if (inputNumbersValue.length >= 10){
                        formatedInputValue += '-' + inputNumbersValue.substring(9, 11);
                    }
              }          
                 
             } else {
                formatedInputValue = "+" + inputNumbersValue.substring(0, 16);
            }
            input.value = formatedInputValue;
        }    
 
        let onPhoneKeyDown = function(e){            
            let input = e.target;           
            if(e.keyCode == 8 && getInputNunbersValue(input).length == 2) {          
                input.value = "";             
            }
        };

        let onPhonePaste = function(e){
            let pastedText = e.clipboardData || window.clipboardData,
                input = e.target,
                inputNumbersValue = getInputNunbersValue(input);

                if (pasted){
                    let pastedText = pasted.getData("Text");
                    if (/\D/g.test(pastedText)){
                        input.value = inputNumbersValue;
                    }
                }
        }

        for (let i=0; i<phoneInputs.length; i++) { 
            let input = phoneInputs[i];
            input.addEventListener("input", onPhoneInput);
            input.addEventListener("keydown", onPhoneKeyDown);
            input.addEventListener("pasted", onPhonePaste);
        };
    });
};
 phoneInput ()

// form
const formInit = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('form');

        // При отправке формы заходим в функцию formSend
        form.addEventListener('submit', formSend);

        // Запрещаю стандартную отправку формы
        async function formSend(e) {
            e.preventDefault();

            // Делаю валидацию
            let error = formValidate(form);

            if (error === 0) {
                form.classList.add('_sending');
                
                let response = await fetch('sendmail.php', {
                    method: 'POST',
                    // body: formData
                });
                if (response.ok) {
                    let result = await response.json();
                    alert(result.message);                
                    form.reset();
                    form.classList.remove('_sending');
                } else {
                    alert("Ошибка");
                    form.classList.remove('_sending');
                }
                    
            } else {
                alert ('Заполните обязательные поля')
            }
            // Создаю переменную и присваиваю ей результат работы другой функции

            function formValidate(form) {
                let error = 0;
                let formReq = document.querySelectorAll('._req');
                console.log(formReq, 'formReq');
                // Пробегаюсь по всем обязательным полям
                for (let index = 0; index < formReq.length; index++) {
                    const input = formReq[index];
                    formRemoveError(input);

                    if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                        formAddError(input);
                        error++;
                        console.log('error');
                    } else {
                        if (input.value === '') {
                            formAddError(input); 
                            error++;
                        }
                    }
                }
                return error;
            }

           function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
           }
           function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
           }
        }
    });
}
formInit()

// Hover rotate
const hoverRotate = () => {
    const btn = document.getElementById('hoverRotate');
    btn.addEventListener('mouseover', function() {
        btn.classList.remove('_out');
        btn.classList.add('_over');
       
    });
    btn.addEventListener('mouseout', function() {
        btn.classList.remove('_over');
        btn.classList.add('_out');
    });  

}
hoverRotate()
// hover relation
const hoverRelation = () => {
    const linksArray = document.querySelectorAll('#link');

    if (linksArray.length > 0) {
        for (let i=0; i<linksArray.length; i++) {           
            let item = linksArray[i];
            // console.log(!item.previousElementSibling, '!');
           if (!item.previousElementSibling === false) {
            item.addEventListener("mouseover", hoverLinkTopAdd);
            item.addEventListener("mouseout", hoverLinkTopRemove);
            function hoverLinkTopAdd () {
                
                item.previousElementSibling.classList.add("_hover-relation")
            }
            function hoverLinkTopRemove () {
                item.previousElementSibling.classList.remove("_hover-relation");
            }
           } else {
                item.addEventListener("mouseover", hoverLinkBottomAdd);
                item.addEventListener("mouseout", hoverLinkBottomRemove);
           }
           function hoverLinkBottomAdd() {
                item.nextElementSibling.classList.add("_hover-relation");
           }
           function hoverLinkBottomRemove() {
                item.nextElementSibling.classList.remove("_hover-relation");
           }
        }

    } 

}
hoverRelation()