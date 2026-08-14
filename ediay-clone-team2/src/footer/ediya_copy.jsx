import React, { useState, useEffect } from 'react';
import './ediya_footer.css';

const categories = ['BREAD', 'DESSERT', 'DELI', 'RTE'];

// 전체 메뉴 데이터
const allMenus = [
  // 기존 메뉴 8개
  { id: 1, category: 'BREAD', name: '햄 치즈 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472058743.png' },
  { id: 2, category: 'BREAD', name: '에그 포테이토 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472133865.png' },
  { id: 3, category: 'BREAD', name: '딸기 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472226666.png' },
  { id: 4, category: 'BREAD', name: '땅콩 샌드위치', img: 'https://ediya.com/files/menu/IMG_1785472286878.png' },
  { id: 5, category: 'DESSERT', name: '바스크치즈케이크', img: 'https://ediya.com/files/menu/IMG_1781506976892.png' },
  { id: 6, category: 'DELI', name: '현미 소불고기볶음밥', img: 'https://ediya.com/files/menu/IMG_1774920189102.png' },
  { id: 7, category: 'DELI', name: '크림 퐁듀 김치볶음밥', img: 'https://ediya.com/files/menu/IMG_1774920059295.png' },
  { id: 8, category: 'DELI', name: '저당 오리지널 떡볶이', img: 'https://ediya.com/files/menu/IMG_1774920418522.png' },

  // 더보기를 누르면 나타날 빈 메뉴 항목 8개 (직접 채워넣으시면 됩니다)
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8); // 처음에 보여줄 개수 (8개)

  // 검색어나 카테고리가 변경될 때 더보기 개수를 다시 8개로 초기화
  useEffect(() => {
    setVisibleCount(8);
  }, [searchTerm, selectedCategories]);

  // 체크박스 클릭 토글 핸들러
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // 1. 검색어 + 카테고리 필터링
  const filteredMenus = allMenus.filter((item) => {
    // 검색어 체크 (이름이 없는 빈 항목도 검색 중에는 제외하지 않고 필터 조건 수행)
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    // 카테고리 체크 (선택한 카테고리가 없으면 전체 표시)
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(item.category);

    return matchesSearch && matchesCategory;
  });

  // 2. 더보기 상태에 맞춰 개수 자르기 (visibleCount 만큼만 노출)
  const displayedMenus = filteredMenus.slice(0, visibleCount);

  // 더보기 버튼 클릭 시 8개 추가
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <footer className="menu-main">
      {/* 검색, 체크 구역 */}
      <div className="search">
        <div className="search-detail">
          <h3>메뉴 검색</h3>
          <div className="search-detail-input">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button"></button>
          </div>
        </div>
        <div className="search-detail-bar"></div>
        <div className="search-detail-check">
          {categories.map((cat) => (
            <label key={cat}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => handleCategoryChange(cat)}
              />{' '}
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* 메뉴 목록 (Grid 레이아웃) */}
      <div className="menus">
        {displayedMenus.length > 0 ? (
          <div className="menus-grid">
            {displayedMenus.map((item) => (
              <div key={item.id} className="menu-box">
                {/* img URL이 비어있을 경우 고양이/기본 대체 이미지 표시 */}
                <img
                  src={item.img || 'https://via.placeholder.com/268?text=No+Image'}
                  alt={item.name || '메뉴 이미지'}
                />
                <p>{item.name || '메뉴명을 입력해주세요'}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-result">검색 결과가 없습니다.</div>
        )}
      </div>

      {/* 더보기 버튼 (더 보여줄 메뉴가 남아있을 때만 표시) */}
      {visibleCount < filteredMenus.length && (
        <div className="more-btn">
          <button type="button" onClick={handleLoadMore}>
            더보기<span>+</span>
          </button>
        </div>
      )}
    </footer>
  );
}