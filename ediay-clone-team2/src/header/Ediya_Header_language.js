// 2026/08/05
// Ediya_Header_language.js

// 🟨 [수정] DOM을 직접 찾지 않고 React state로 header 상태를 관리
import { useState } from "react";

export default function useEdiyaHeader() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🟩 [추가] 언어 목록 열기/닫기
  const handleLanguageClick = (event) => {
    event.preventDefault();
    setIsLanguageOpen((previous) => !previous);
  };

  // 🟨 [수정] querySelector 대신 클릭한 메뉴의 index를 state에 저장
  const handleNavClick = (event, index) => {
    event.preventDefault();
    setActiveNav(index);
  };

  // 🟩 [추가] 모바일 햄버거 메뉴 열기/닫기
  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  // 🟩 [추가] href="#" 링크가 화면 맨 위로 이동하지 않게 막음
  const handleHeaderClick = (event) => {
    const link = event.target.closest?.('a[href="#"]');

    if (link) {
      event.preventDefault();
    }
  };

  return {
    isLanguageOpen,
    activeNav,
    isMobileMenuOpen,
    handleLanguageClick,
    handleNavClick,
    handleMobileMenuClick,
    handleHeaderClick,
  };
}