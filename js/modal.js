// モーダルを開いたり閉じたりするための要素を取得
const modalMenu = document.querySelector('.modal-menu'); // モーダル本体
const modalOpen = document.querySelector('.ham'); // ハンバーガーメニュー
const modalClose = document.querySelector('.modal-menu__close'); // 閉じるボタン（×）
const modalLinks = document.querySelectorAll('.modal-menu__link'); // メニュー内のリンクたち

// モーダルを開く関数
function openModal() {
  modalMenu.classList.add('is-open'); // モーダルに「開く」クラスを追加

}

// モーダルを閉じる関数
function closeModal() {
  modalMenu.classList.remove('is-open'); // 「開く」クラスを外す
  document.body.style.overflow = ''; // スクロールを元に戻す
 
}

// ハンバーガーメニューをクリックしたら開く
modalOpen.addEventListener('click', openModal);

// 「×」をクリックしたら閉じる
modalClose.addEventListener('click', closeModal);

// メニュー内リンクをクリックしたら閉じる
modalLinks.forEach(link => {
  link.addEventListener('click', closeModal);
});
