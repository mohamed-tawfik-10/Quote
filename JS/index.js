var listQoute = [
  {
    paragraoh: "“Be yourself; everyone else is already taken.”",
    name: "Oscar Wilde",
    image: "image/22302._UX200_CR0,0,200,200_.jpg"
  },
  {
    paragraoh: "“So many books, so little time.”",
    name: "Frank Zappa",
    image: "image/8630.jpg"
  },
  {
    paragraoh: "“A room without books is like a body without a soul.”",
    name: "Marcus Tullius Cicero",
    image: "image/3565.jpg"
  },
  {
    paragraoh: "“You only live once, but if you do it right, once is enough.”",
    name: "Mae West",
    image: "image/9810._UX200_CR0,14,200,200_.jpg"
  }
];

// نسخة قابلة للعرض بدون تكرار
let availableQuotes = [...listQoute];

// دالة لخلط العناصر
function shuffleQuotes(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQoutes() {
  if (availableQuotes.length === 0) {
    // إذا انتهت كل الاقتباسات، نعيد ضبطها عشوائيًا
    availableQuotes = [...listQoute];
    shuffleQuotes(availableQuotes);
  }

  const quote = availableQuotes.pop(); // خذ اقتباس من القائمة

  const additem = `
    <p class="my-4">${quote.paragraoh}</p>
    <h2 class="fw-bold">-- ${quote.name}</h2>
    <img src="${quote.image}" alt="Author photo">`;

  const inner = document.getElementById("inner");
  inner.innerHTML = additem;
  inner.classList.add("quote-box");
}

// أول مرة نخلط القائمة
shuffleQuotes(availableQuotes);
