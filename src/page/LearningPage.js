import React, { useEffect, useState } from "react";
import ConsonantButton from './ConsonantButton'; // ConsonantButton 컴포넌트 임포트

// function Study() {
const LearningPage = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [speechSynthesis, setSpeechSynthesis] = useState(null);
  const [progress, setProgress] = useState(0); // 진행 상황 상태 추가
  const [rewards, setRewards] = useState(0); // 보상 포인트 상태 추가
  const [studyImage, setStudyImage] = useState(''); // 학습 이미지 상태 추가
  const [isStudyComplete, setIsStudyComplete] = useState(false); // 학습 완료 상태 추가

  // 한글 자음 데이터 배열
  const Consonant = [
    { id: 1, letter: 'ㄱ', sound: 'ㄱ' },
    { id: 2, letter: 'ㄴ', sound: 'ㄴ' },
    { id: 3, letter: 'ㄷ', sound: 'ㄷ' },
    { id: 4, letter: 'ㄹ', sound: 'ㄹ' },
    { id: 5, letter: 'ㅁ', sound: 'ㅁ' },
    { id: 6, letter: 'ㅂ', sound: 'ㅂ' },
    { id: 7, letter: 'ㅅ', sound: 'ㅅ' },
    { id: 8, letter: 'ㅇ', sound: 'ㅇ' },
    { id: 9, letter: 'ㅈ', sound: 'ㅈ' },
    { id: 10, letter: 'ㅊ', sound: 'ㅊ' },
    { id: 11, letter: 'ㅋ', sound: 'ㅋ' },
    { id: 12, letter: 'ㅌ', sound: 'ㅌ' },
    { id: 13, letter: 'ㅍ', sound: 'ㅍ' },
    { id: 14, letter: 'ㅎ', sound: 'ㅎ' },

    // 나머지 모음도 추가
  ];

  // 사용자가 글자를 선택했을 때 실행되는 함수
  const handleLetterSelection = (letter) => {
    setSelectedLetter(letter);
    if (speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(letter);
      speechSynthesis.speak(utterance);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 SpeechSynthesis 객체 설정
  useEffect(() => {
    const synthesis = window.speechSynthesis; // 브라우저의 speechSynthesis 객체를 가져옴
    setSpeechSynthesis(synthesis); // 가져온 객체 저장
  }, []);

  // 학습 완료 함수
  const completeStudy = () => {
    setProgress((prevProgress) => prevProgress + 10); // 진행 상황 업데이트
    setRewards((prevRewards) => prevRewards + 1); // 보상 포인트 업데이트 
    const canvas = document.getElementById('studyCanvas');
    setStudyImage(canvas.toDataURL()); // 캔버스 내용을 이미지 데이터 url로 변환하려 저장
    setIsStudyComplete(true); // 학습 완료 상태를 true로 설정
  };

  // 컴포넌트의 UI
  return (
    <div>
      <h2>한글 깨우치기 - 학습 페이지</h2>
      <div>
        <h3>자음 학습하기</h3>
        <div className="Consonant">
          {Consonant.map((item) => (
            <ConsonantButton key={item.id} item={item} onLetterSelect={handleLetterSelection} />
          ))}
        </div>
        {selectedLetter && (
          // 선택한 글자가 있으면 화면에 출력
          <div>
            <p>선택한 글자: {selectedLetter}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningPage;
