// ВАЖНО: этот файл не меняет homework-13.js, а использует его классы и объекты.
const $ = id => document.getElementById(id);
const drinks = {
 coffee:{name:'Чёрный кофе',detail:'Арабика, с молоком',price:150,temperature:90,color:'#8b5638'},
 juice:{name:'Апельсиновый сок',detail:'Апельсин, без сахара',price:200,temperature:20,color:'#f3a126'},
 tea:{name:'Зелёный чай',detail:'Мятный, с сахаром',price:50,temperature:85,color:'#75964b'}
};
let selected='coffee',busy=false,finishTimer=null;
const machine=$('machine');
function addLog(message){const line=document.createElement('div');line.className='entry';line.textContent=message;$('log').append(line);$('log').scrollTop=$('log').scrollHeight}
function capture(fn){const original=console.log;console.log=(...args)=>{original.apply(console,args);addLog(args.map(x=>typeof x==='object'?JSON.stringify(x):String(x)).join(' '))};try{fn()}catch(err){addLog('Ошибка: '+err.message)}finally{console.log=original}}
// Получаем именно объекты, которые созданы в homework-13.js.
function getDrink(){return selected==='coffee'?coffee:selected==='juice'?juice:tea}
function choose(key){if(busy)return;selected=key;const d=drinks[key];document.querySelectorAll('[data-drink]').forEach(b=>b.classList.toggle('selected',b.dataset.drink===key));$('drink-name').textContent=d.name;$('drink-price').textContent=d.price+' ₽';$('drink-details').textContent=d.detail;$('temperature').value=d.temperature;$('temp-value').textContent=d.temperature;machine.classList.remove('brewing','done');$('liquid').style.background=d.color;$('machine-stage').textContent='ГОТОВ К ЗАКАЗУ';$('machine-message').textContent='Выберите действие'}
document.querySelectorAll('[data-drink]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.drink)));
$('temperature').addEventListener('input',()=>{$('temp-value').textContent=$('temperature').value});
$('set-temperature').addEventListener('click',()=>{const value=Number($('temperature').value);drinks[selected].temperature=value;capture(()=>{getDrink().setTemp(value);getDrink().showTemp()})});
$('show-info').addEventListener('click',()=>capture(()=>getDrink().showInfo()));
$('cafe-info').addEventListener('click',()=>capture(()=>cafe.showInfoCafe()));
$('clear').addEventListener('click',()=>{$('log').replaceChildren()});
$('order').addEventListener('click',()=>{
 if(busy)return;busy=true;$('order').disabled=true;
 machine.classList.remove('brewing','done');void machine.offsetWidth;
 $('machine-stage').textContent='ПРИГОТОВЛЕНИЕ';$('machine-message').textContent='Наполняем стакан...';
 capture(()=>cafe.orderDrink(getDrink()));
 machine.classList.add('brewing');
 clearTimeout(finishTimer);
 finishTimer=setTimeout(()=>{machine.classList.remove('brewing');machine.classList.add('done');$('machine-stage').textContent='ГОТОВО';$('machine-message').textContent='Ваш напиток готов!';busy=false;$('order').disabled=false},2200);
});
try{if(typeof Drink!=='function'||typeof Coffee!=='function'||typeof Cafe!=='function')throw Error('Классы не найдены');$('connection').textContent='Подключён';addLog('Кафе готово. Выберите напиток.')}catch(error){$('connection').textContent='Ошибка подключения';addLog('Проверьте путь ../homework-13.js: '+error.message)}
choose('coffee');
