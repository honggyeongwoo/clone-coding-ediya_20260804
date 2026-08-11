import React from 'react'

export default function MainTwo() {
  return (
    <div>
      <section className="main-2">
      <p className="cate">HOME ＞ 메뉴 ＞ 베이커리</p>
      <div>
        <h4>추천 상품</h4>
        <div className="main-2-box">
          <div className="img-1">
            <img src="https://ediya.com/files/menu/IMG_1785472286878.png" alt="땅콩샌드" />
            <p>
              땅콩 샌드위치
              <span>NEW</span>
            </p>
          </div>
          <div className="img-2">
            <img src="https://ediya.com/files/menu/IMG_1645420645211.png" alt="쌍쌍츄로스" />
            <p>
              쌍쌍 츄로스
              <span>BEST</span>
            </p>
          </div>
          <div className="img-2">
            <img src="https://ediya.com/files/menu/IMG_1717115080162.png" alt="초코 티라미수 케이크" />
            <p>
              초코 티라미수 케이크
              <span>BEST</span>
            </p>
          </div>

        </div>
      </div>
    </section>
    </div>
  )
}
