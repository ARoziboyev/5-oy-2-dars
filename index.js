// 1. Funksiya uchun xato tashlash
// Funksiya yozing, u berilgan sonni faktorialini hisoblaydi. Agar funksiyaga musbat son emas (masalan, manfiy son yoki satr) uzatilsa, throw yordamida xato tashlash kerak. Xato xabarida quyidagi mazmun bo‘lishi kerak:


// function faktaryal(n) {
//     if (typeof n !== 'number' || n < 0 || !Number) {
//         throw new Error("Faktorialni hisoblash uchun musbat son kerak!");
//     }

//     let res = 1;
//     for (let i = 1; i <= n; i++) {
//         res *= i;
//     }

//     return res;
// }

// function sum(b) {
//     try {
//         let res = faktaryal(b);
//         console.log(res);
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// sum(5)


// 2. Array bilan ishlashda xatolarni boshqarish
// Funksiya yozing, u massiv ichidagi sonlarning o‘rtacha qiymatini hisoblaydi. Funksiyada quyidagi holatlar uchun xatolarni tutish kerak:


// function sum(n) {
//     if (!Array.isArray(n)) {
//         throw new Error("Massiv uzatilmadi!");
//     }
//     if (!n.every(arg => typeof arg === 'number')) {
//         throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
//     }

// }

// try {
//     sum([1, 2, 3]);
//     console.log("Massiv to'g'ri uzatildi!");
// } catch (error) {
//     console.error(error.message);
// }

// try {
//     sum([1, "text", 3]);
// } catch (error) {
//     console.error(error.message);
// }
// try {
//     sum();
// } catch (error) {
//     console.error(error.message);
// }


// Massivga oit masalalar

// 1.Funksiya yozing, massivdagi barcha juft sonlarni topib, ularning yig‘indisini qaytaruvchi.

// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
//         }
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
//     }

//     return sum;
// }

// try {
//     console.log(sum([1, 2, 3, 4, 5, 6]));
//     console.log(sum([7, 11, 13]));
//     console.log(sum([]));
// } catch (error) {
//     console.error(error.message);
// }



// 2.Funksiya yozing, massivdan faqat toq sonlarni olib tashlaydigan va yangi massiv qaytaradigan.\


// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
//         }
//         if (arr[i] % 2 === 0) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// try {
//     console.log(sum([1, 2, 3, 4, 5, 6]));
//     console.log(sum([7, 11, 13]));
//     console.log(sum([2, 4, 6, 8]));
//     console.log(sum([]));
// } catch (error) {
//     console.error(error.message);
// }



// 3.Funksiya yozing, massiv ichida nechta unikal element borligini aniqlaydigan.


// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let res = new Set(arr);
//     return res.size;
// }

// try {
//     console.log(sum([1, 2, 2, 3, 4, 4, 5]));
//     console.log(sum([1, 1, 1, 1]));
//     console.log(sum([])); 
//     console.log(sum(["a", "b", "a", "c"]));
// } catch (error) {
//     console.error(error.message);
// }



// 4.Funksiya yozing, massivdagi eng katta va eng kichik sonlar o‘rtasidagi farqni topadigan.


// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }
//     if (arr.length === 0) {
//         throw new Error("Massiv bo‘sh bo‘lishi mumkin emas!");
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
//         }
//     }

//     let max = Math.max(...arr);
//     let min = Math.min(...arr);
//     return max - min;
// }

// try {
//     console.log(sum([1, 2, 3, 4, 5]));
//     console.log(sum([-10, 0, 10, 20]));
//     console.log(sum([7]));
//     console.log(sum([]));
// } catch (error) {
//     console.error(error.message);
// }



// 6.Funksiya yozing, massivdan berilgan qiymatning nechta marta uchrashganini topadigan.


// function sum(arr, v) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] === v) {
//             count++;
//         }
//     }

//     return count;
// }

// try {
//     console.log(sum([1, 2, 3, 4, 2, 5, 2], 2));
//     console.log(sum([7, 8, 9, 10], 5));
//     console.log(sum([], 3));
//     console.log(sum(["a", "b", "a"], "a"));
// } catch (error) {
//     console.error(error.message);
// }



// 7.Funksiya yozing, massivdagi barcha satr elementlarini uzunligi bo‘yicha o‘sish tartibida tartiblash uchun.


// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'string') {
//             throw new Error("Massivda faqat satr (string) turidagi elementlar bo‘lishi kerak!");
//         }
//     }

//     return arr.sort((a, b) => a.length - b.length);
// }

// try {
//     console.log(sum(["apple", "pie", "banana", "kiwi", "orang"])); 
//     console.log(sum(["dog", "cat", "elepant", "bat"])); 
//     console.log(sum(["a", "aa", "aaa", "aaaa"])); 
//     console.log(sum([])); 
// } catch (error) {
//     console.error(error.message);
// }



// 10.Funksiya yozing, massiv ichidagi sonlarning o‘rtacha qiymatini hisoblab beradigan.


// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let sum = 0;
//     let count = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') {
//             throw new Error("Massivda faqat sonlar bo‘lishi kerak!");
//         }
//         sum += arr[i];
//         count++;
//     }

//     if (count === 0) {
//         throw new Error("Massivda sonlar mavjud emas!");
//     }

//     return sum / count;
// }

// try {
//     console.log(sum([1, 2, 3, 4, 5]));
//     console.log(sum([10, 20, 30]));
//     console.log(sum([7]));
//     console.log(sum([]));
// } catch (error) {
//     console.error(error.message);
// }



// 11.Funksiya yozing, massiv ichidagi barcha elementlarni ikki marta takrorlab qaytaradigan.

// function sum(arr) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Massiv uzatilmadi!");
//     }

//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i], arr[i]);
//     }

//     return res;
// }

// try {
//     console.log(sum([1, 2, 3]));
//     console.log(sum(["a", "b", "c"]));
//     console.log(sum([5]));
//     console.log(sum([]));
// } catch (error) {
//     console.error(error.message);
// }



// 12.Funksiya yozing, massiv ichidagi satr elementlarning birinchi harfini katta harfga aylantiradigan.

// function sum(words) {
//     return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// }
// let text = ["salom", "dunyo", "javascript"];
// let res = sum(text);
// console.log(res);



// 13.Funksiya yozing, massiv ichidagi raqamlar massivini saralash uchun, ammo tartibni belgilovchi flag qabul qilsin (o‘sish yoki kamayish tartibi).


// function sum(arg2, arg1) {
//     if (arg1 === "asc") {
//         return arg2.sort((a, b) => a - b); 
//     } else if (arg1 === "desc") {
//         return arg2.sort((a, b) => b - a); 
//     } else {
//         throw new Error("Tartib noto‘g‘ri ko‘rsatilgan. 'asc' yoki 'desc' kiriting.");
//     }
// }
// let num1 = [5, 3, 8, 1, 4];

// let num2 = sum(num1, "asc");
// console.log(num2);

// let res = sum(num1, "desc");
// console.log( res);



// 14.Funksiya yozing, massivdan eng uzun va eng qisqa satrlarni topib, yangi massiv qaytaradigan.




// function sum(arg) {
//     if (!arg.length) return []; 

//     let arg2 = arg[0];
//     let arr2 = arg[0];

//     arg.forEach(arr => {
//         if (arr.length > arg2.length) {
//             arg2 = arr;
//         }
//         if (arr.length < arr2.length) {
//             arr2 = arr;
//         }
//     });

//     return [arr2, arg2];
// }
// let str = ["salom", "dunyo", "js", "javascript", "ok"];
// let res = sum(str);
// console.log(res);




// 15.Funksiya yozing, massivdagi barcha elementlarni stringga aylantiruvchi (raqamlar uchun).

// function sum(arg) {
//     return arg.map(e => e.toString());
// }
// let arr = [123, 456, 789, 0];
// let res = sum(arr);
// console.log(res);


// Stringlarga oid masalalar

// 16.Funksiya yozing, satr ichida nechta unli harf borligini qaytaradigan.

// function sum(arg) {
//     let arr1 = "aeiouAEIOU"; 
//     let count = 0;

//     for (let arr of arg) {
//         if (arr1.includes(arr)) {
//             count++;
//         }
//     }

//     return count;
// }
// let text = "Salom Dunyo!";
// let res = sum(text);
// console.log(res);



// 17.Funksiya yozing, berilgan satrdan barcha probellarni olib tashlaydigan va yangi satr qaytaradigan.

// function sum(arg) {
//     return arg.replace(/\s+/g, '');
// }
// const text = "Salom, dunyo! Bu JavaScript kodidir";
// const res = sum(text);
// console.log(res);



// // 18.Funksiya yozing, satr ichidagi barcha so‘zlarni o‘zaro joyini almashtiradigan

// function sum(arg) {
//     let words = arg.split(' ');
//     let mark = words.reverse();
//     let result = mark.join(' ');
//     return result;
// }

// let num = "Salom dunyo qanday yashamoqdasiz?";
// let res = sum(num);
// console.log(res);



// 19.Funksiya yozing, satr ichidagi so‘zlarni uzunligi bo‘yicha tartiblaydigan.

// function sum(arg) {
//     let work = arg.split(' ');
   
//     let arr = work.sort((a, b) => a.length - b.length);

//     let arr2 = arr.join(' ');
//     return arr2;
// }

// let num = "Salom bolalar yaxshimisizlar";
// let res = sum(num);
// console.log(res);

// 20.Funksiya yozing, satr ichida ma’lum bir so‘z necha marta takrorlanganini aniqlaydigan.

// function sum(arg1, arg2) {
//     let word = arg1.split(' ');
//     let count = word.filter(item => item === arg2).length;
//     return count;
// }

// let arr = "Salom bolalar";
// let res2 = "dunyo";
// let res1 = sum(arr, word);
// console.log(res2,res1);


// 21.Funksiya yozing, satr ichidagi barcha kichik harflarni katta harfga aylantiradigan va aksincha.


// function sum(arg) {
//     let arr1 = '';
//     for (let i = 0; i < arg.length; i++) {
//         let text = arg[i];
//         if (text === text.toUpperCase()) {
//             arr1 += text.toLowerCase();
//         } else {
//             arr1 += text.toUpperCase();
//         }
//     }
//     return arr1;
// }
// let arrr = "Salom Dunyo! Boshqa So'zlar";
// let res = sum(arrr);
// console.log(res);


// 25.Funksiya yozing, satr ichidagi barcha so‘zlarning birinchi harfini katta harfga o‘zgartiradigan.


// function sum(arg) {
//     let words = arg.split(' ');
//     let arr = words.map(work => {
//         return work.charAt(0).toUpperCase() + work.slice(1).toLowerCase();
//     });
//     let result = arr.join(' ');
//     return result;
// }
// let num = "salom bolalar";
// let res = sum(num);
// console.log(res);



// Massiv va string metodlarini birgalikda ishlatadigan masalalar

// 26.Funksiya yozing, satrdan barcha so‘zlarni massivga ajratadigan va so‘zlarni alfavit tartibida qaytaradigan.


// function sum(arg) {
//     let work = arg.split(' ');
//     let arr2 = work.sort();
//     return arr2;
// }

// let num = "salom bolalar";
// let res = sum(num);
// console.log(res);


// 27.Funksiya yozing, massiv ichidagi barcha so‘zlarni birlashtirib, yagona satr yaratadigan.

// function sum(arg) {
//     const arr = arg.join(' ');
//     return arr;
// }

// const work = ["Salom", "dunyo"];
// const res = sum(work);
// console.log(res);


// 28.Funksiya yozing, massiv ichidagi satrlardan uzunligi bo‘yicha eng katta bo‘lganini qaytaradigan.

// function sum(arg) {
//     let work = arg.split(' ');
   
//     let arr = work.sort((a, b) => a.length - b.length);

//     let arr2 = arr.join(' ');
//     return arr2;
// }

// let num = "Salom bolalar yaxshimisizlar";
// let res = sum(num);
// console.log(res);


// 30.Funksiya yozing, satr ichidagi barcha takrorlanmagan so‘zlarni ajratib, massivga joylashtiradigan.

// function sum(arg) {
//     let work = arg.split(' ');
//     let arr = [...new Set(work)];
//     return arr;
// }

// let num = "Salom dunyo dunyo ";
// let res = sum(num);
// console.log(res);
