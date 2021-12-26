(function () {
  const stageElem = document.querySelector('.stage');
  const houseElem = document.querySelector('.house');
  const barElem = document.querySelector('.progress-bar');
  const mousePos = { x: 0, y: 0};
  /**
   * document.body.offsetHeight 는 body전체의 높이가 나온다
   * window.innerHeight 는 윈도우의 높이이다.
   * 전체 문서 높이에서 창 높이(스크롤바 높이)를 빼주면 전체 스크롤 할 수 있는 범위이다.
   *
   */
  /* 근데 아래와 같이 maxScrollValue를 짜면 
  창 크기가 바뀌게 될때 동작이 이상해 진다.*/
  /* window사이즈가 바뀔때마다 maxScrollValue가 바뀌게 해야한다!!!!. */
  /*const maxScrollValue = this.document.body.offsetHeight - this.window.innerHeight; */
  let maxScrollValue = 0;
  function resizeHandler(){
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }
  
  window.addEventListener('scroll', function () {
    // 끝까지 내리면 pageYOffset과 maxScrollvalue 가 똑같아지므로
    // 이렇게 써주면 비율로 나타낼수 있다. 스크롤을 끝까지 내릴경우 1!
    // Maximum value가 됐을때 1이 아니라 1000으로 세팅
    const scrollPer = window.pageYOffset / maxScrollValue;
    const zMove = window.pageYOffset / maxScrollValue * 980 - 490; 
    houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
    
    barElem.style.width = scrollPer * 100 + '%';
  });

  window.addEventListener('mousemove',function(e){
    mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2;
    stageElem.style.transform = 'rotateX('+(mousePos.y * 5)+'deg) rotateY('+(mousePos.x * 5)+'deg)';
  })
  
  window.addEventListener('resize',resizeHandler)
  resizeHandler();
})();
