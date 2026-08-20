import React from 'react'
import ImageBox from './MainComponent/ImageBox'

export default function MainTwo() {
  return (
    <div>
      <section className="main-2m">
      <p className="catem">HOME ＞ 메뉴 ＞ 베이커리</p>
      <div>
        <h4>추천 상품</h4>
        <div className="main-2-boxm">
          <ImageBox 
              className={"img-1m"}
              image={"https://ediya.com/files/menu/IMG_1785472286878.png"}
              content={"땅콩 샌드위치"}
              span={"NEW"}
          />
          <ImageBox 
            className={"img-2m"}
            image={"https://ediya.com/files/menu/IMG_1645420645211.png"}
            content={"쌍쌍 츄로스"}
            span={"BEST"}
          />
          <ImageBox 
            className={"img-2m"}
            image={"https://ediya.com/files/menu/IMG_1717115080162.png"}
            content={"초코 티라미수 케이크"}
            span={"BEST"}
          />
        </div>
      </div>
    </section>
    </div>
  )
}
