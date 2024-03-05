console.log('bobbyhadz.com');

// ✅ Get all elements with classes `box` AND `green`
const elements1 = document.getElementsByClassName('box green');
console.log(elements1); // 👉️ [div.box.green, div.box.green]

// ----------------------------------------------------

// ✅ Get all elements with classes `box` AND `green`
const elements2 = document.querySelectorAll('.box.green');
console.log(elements2); // 👉️ [div.box.green, div.box.green]

// ----------------------------------------------------

// ✅ Get all elements with at least one of the classes
const elements3 = document.querySelectorAll('.box, .green');
// 👇️ [div.box.green, div.box.green, div.box.orange]
console.log(elements3);
