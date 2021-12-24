(function () {
  const houseElem = document.querySelector('.house');
  /**
   * document.body.offsetHeight 는 body전체의 높이가 나온다
   * window.innerHeight 는 윈도우의 높이이다.
   * 전체 문서 높이에서 창 높이(스크롤바 높이)를 빼주면 전체 스크롤 할 수 있는 범위이다.
   *
   */
  let maxScrollValue =
    this.document.body.offsetHeight - this.window.innerHeight;

  window.addEventListener('scroll', function () {
    // 끝까지 내리면 pageYOffset과 maxScrollvalue 가 똑같아지므로
    // 이렇게 써주면 비율로 나타낼수 있다. 스크롤을 끝까지 내릴경우 1!
    console.log(pageYOffset / maxScrollValue);
  });
})();
