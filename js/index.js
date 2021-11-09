
//HAYDOVCHILIK
var drive = function(num) {
    var num =Number(prompt("Haydovchilik kurslarimizga qabul uchun yoshingizni kiriting"));
    //  return "Sizning yoshingiz " + num;

    if (num>=18) {
    console.log( num);
    alert ("Darslarimizga qatnashish uchun yoshingiz yetarli");
 } else {
     console.log(num);
     alert ("Afsuski biroz kichkina ekansiz");
    }
}
alert(drive());


//IMTIHON TOLOV
var greenCard = function (sum) {
    var sum= Number(prompt("Imtihonga to'lovni amalga oshirish uchun summangizni kiriting"));
    

    if (sum>=300000) {
        console.log(sum);
        alert("Kiritkan summangiz to'lov uchun yetadi. Sizga omad tilaymiz!😊")
    } else { 
        console.log(sum);
        alert("To'lov uchun pulingiz biroz kam ekan")
    }
    
}
alert(greenCard());


//STUDENTS
function students (ism, familiya, univ) { 
    console.log('Assalomu alaykum hurmatli ' +  ism  + familiya +  'sizga ' + univ + 'ning ' + '1-bosqich talabasi bo`lganizni ma`lum qilamiz. O`qishingizga omad!😊');
}
students ('Dilafruz ', 'Omonova','O`zbekiston Jahon tillari universiteti');
students ('Dilbar ', 'Shuhratov','O`zbekiston Jahon tillari universiteti');
students ('Omina ', 'Jabbarova','O`zbekiston Jahon tillari universiteti');
students ('Mahfuza ', 'Haydarova','O`zbekiston Jahon tillari universiteti');
students ('Mahfirat ', 'Ochilova','O`zbekiston Jahon tillari universiteti');

//kommunal to'lovlar

function communals(istemol, summa) {
    console.log('Hurmatli Alisher Zohidov '+ 'sizni '+ istemol + 'dan ' + 'qarzingiz ' + summa + ' so`mni tashkil qiladi');
    
}

communals('gaz', 160000);
communals('elektr energiyasi', 300000);
communals('ichimlik suvi', 85000);

//PHONES
function prizePhones (tel, narx) {
    console.log('Telefonchi.uz da ' +  tel  + ' smartphonelari ' +  narx);
}
prizePhones ('IPhone', '$1500');
prizePhones ('Redmi 9A', '$150');
prizePhones ('Sumsung Galaxy S10+', '$1000');



//PROBLEM
function solveProblems (a, b, c) {
    return (a + b) / c
}

console.log(solveProblems (10, 23, 11));

//DOIRA YUZASI

var circle = function(radius) {
    var radius =Number(prompt("Doiraning yuzini aniqlash uchun radiusini kiriting"));
    return 3.14 * (radius**2)

   
}
alert(circle());


//uchburchak yuzi
var triangle = function(asos, balandlik) {
    var asos =Number(prompt("uchburchakning yuzini aniqlash uchun uning asosini kiriting"));
    var balandlik =Number(prompt("uchburchakning yuzini aniqlash uchun uning balandligini kiriting"));
    return (asos / 2) * balandlik;

   
}
alert(triangle());

//to'rtburchak yuzi
var square = function(a, b) {
    var a =Number(prompt("to`rtburchakning yuzini aniqlash uchun uning a tomonini kiriting"));
    var b =Number(prompt("to`rtburchakning yuzini aniqlash uchun uning b tomonini kiriting"));
    return a * b

   
}

alert(square());

//uchburchakli prizma hajmi
var prizma = function(b,h,l) {
    var b =Number(prompt("uchburchak prizmaning hajmini aniqlash uchun uning b tomonini kiriting"));
    var h =Number(prompt("h tomonini kiriting"));
    var l =Number(prompt("l tomonini kiriting"));
    return (b * h * l)

   
}
alert(prizma());




