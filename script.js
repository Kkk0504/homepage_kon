// script.js

// ここにJavaScriptコードを追加します

// ホバー時にアイコンを拡大する
const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.transform = 'scale(1.2)';
  });

  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'scale(1)';
  });
});

// script.js

// フォームの送信前に入力値をチェックする
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (nameInput.value.trim() === '') {
    alert('名前を入力してください');
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('メールアドレスを入力してください');
    return;
  }

  // フォームの送信処理などを追加する
  form.submit();
});
