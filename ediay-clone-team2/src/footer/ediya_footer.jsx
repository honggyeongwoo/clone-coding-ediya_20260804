import React, { useState } from 'react';
import './ediya_footer.css';

const 카테고리 = ['BREAD', 'DESSERT', 'DELI', 'RTE'];

// 전체 메뉴 데이터
const 전체메뉴 = [
  // 기존 메뉴 8개
  { id: 1, category: 'BREAD', name: '햄 치즈 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472058743.png' },
  { id: 2, category: 'BREAD', name: '에그 포테이토 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472133865.png' },
  { id: 3, category: 'BREAD', name: '딸기 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472226666.png' },
  { id: 4, category: 'BREAD', name: '땅콩 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472286878.png' },
  { id: 5, category: 'DESSERT', name: '바스크치즈케이크', img: 'https://ediya.com/files/menu/IMG_1781506976892.png' },
  { id: 6, category: 'DELI', name: '현미 소불고기볶음밥', img: 'https://ediya.com/files/menu/IMG_1774920189102.png' },
  { id: 7, category: 'DELI', name: '크림 퐁듀 김치볶음밥', img: 'https://ediya.com/files/menu/IMG_1774920059295.png' },
  { id: 8, category: 'DELI', name: '저당 오리지널 떡볶이', img: 'https://ediya.com/files/menu/IMG_1774920418522.png' },

  // 더보기를 누르면 나타날 메뉴 항목 8개
  { id: 9, category: 'DESSERT', name: '두쫀쿠', img: 'https://www.ediya.com/files/menu/IMG_1769473204559.png' },
  { id: 10, category: 'DESSERT', name: '떠먹는 티라미수', img: 'https://www.ediya.com/files/menu/IMG_1781506858546.png' },
  { id: 11, category: 'DESSERT', name: '버터 팬케이크', img: 'https://www.ediya.com/files/menu/IMG_1688352074797.png' },
  { id: 12, category: 'DELI', name: '저당 짜장 떡볶이', img: 'https://www.ediya.com/files/menu/IMG_1774920527668.png' },
  { id: 13, category: 'RTE', name: '멕시칸타코 베이글칩', img: 'https://www.ediya.com/files/menu/IMG_1776325476173.png' },
  { id: 14, category: 'RTE', name: '불닭 베이글칩', img: 'https://www.ediya.com/files/menu/IMG_1776325596448.png' },
  { id: 15, category: 'RTE', name: '미니말차크런치', img: 'https://www.ediya.com/files/menu/IMG_1770254480149.png' },
  { id: 16, category: 'RTE', name: '미니코코크런치', img: 'https://www.ediya.com/files/menu/IMG_1770598102194.png' },
];

export default function Ediya_footer() {
  const [초기메뉴, set초기메뉴] = useState(8); // 처음에 보여줄 개수 (8개)

  // 전체 메뉴에서 초기메뉴 만큼 노출
  const displayedMenus = 전체메뉴.slice(0, 초기메뉴);

  // 더보기 버튼 클릭 시 8개 추가
  const handleLoadMore = () => {
    set초기메뉴((e) => e + 8);
  };

  return (
    <footer className="menu-main-hh">
      <div className="search-hh">
        <div className="search-detail-hh">
          <h3>메뉴 검색</h3>
          <div className="search-detail-input-hh">
            <input
              type="text"
            />
            <button type="button"></button>
          </div>
        </div>
        <div className="search-detail-bar-hh"></div>
        <div className="search-detail-check-hh">
          {카테고리.map((cat) => (
            <label key={cat}>
              <input type="checkbox" /> {cat}
            </label>
          ))}
        </div>
      </div>

      {/* 메뉴 목록 (Grid 레이아웃) */}
      <div className="menus-hh">
        {displayedMenus.length > 0 ? (
          <div className="menus-grid-hh">
            {displayedMenus.map((item) => (
              <div key={item.id} className="menu-box-hh">
                <img
                  src={item.img || 'https://via.placeholder.com/268?text=No+Image'}
                  alt={item.name || '메뉴 이미지'}
                />
                <p>{item.name || '메뉴명을 입력해주세요'}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-result-hh">검색 결과가 없습니다.</div>
        )}
      </div>

      {/* 더보기 버튼 (남은 메뉴가 있을 때만 표시) */}
      {초기메뉴 < 전체메뉴.length && (
        <div className="more-btn-hh">
          <button type="button" onClick={handleLoadMore}>
            더보기<span>+</span>
          </button>
        </div>
      )}
    </footer>
  );
}