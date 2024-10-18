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
const typewriterFunc = () => {
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

    function getRandomInt(min = 50, max = 450) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    typewtiterElements.forEach((typewtiterElement) => {
        typing(typewtiterElement);
    })
  
}

typewriterFunc ()

