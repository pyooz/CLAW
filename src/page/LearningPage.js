// LearningPage.js
import React, { useState } from 'react';
import useLearning from './useLearning';
import ConsonantList from './ConsonantList';
import VowelList from './VowelList';

const consonants = [
  // 자음 목록
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
];

const vowels = [
  // 모음 목록
  { id: 1, letter: 'ㅏ', sound: 'ㅏ' },
  { id: 2, letter: 'ㅑ', sound: 'ㅑ' },
  { id: 3, letter: 'ㅓ', sound: 'ㅓ' },
  { id: 4, letter: 'ㅕ', sound: 'ㅕ' },
  { id: 5, letter: 'ㅗ', sound: 'ㅗ' },
  { id: 6, letter: 'ㅛ', sound: 'ㅛ' },
  { id: 7, letter: 'ㅜ', sound: 'ㅜ' },
  { id: 8, letter: 'ㅠ', sound: 'ㅠ' },
  { id: 9, letter: 'ㅡ', sound: 'ㅡ' },
  { id: 10, letter: 'ㅣ', sound: 'ㅣ' },
];

const LearningPage = () => {
  const {
    selectedLetter,
    progress,
    rewards,
    studyImage,
    isStudyComplete,
    handleLetterSelection,
    completeStudy,
  } = useLearning();

  // 토글 상태를 추가합니다. true일 경우 자음, false일 경우 모음을 나타냅니다.
  const [isConsonant, setIsConsonant] = useState(true);

  // 토글 상태를 변경하는 함수입니다.
  const toggleLetterType = () => {
    setIsConsonant(!isConsonant);
  };

  return (
    <div>
      <h2>한글 깨우치기 - 학습 페이지</h2>
      <button onClick={toggleLetterType}>
        {isConsonant ? '모음 학습하기' : '자음 학습하기'}
      </button>
      <div>
        <h3>{isConsonant ? '자음 학습하기' : '모음 학습하기'}</h3>
        {isConsonant ? (
          <ConsonantList consonants={consonants} onLetterSelect={handleLetterSelection} />
        ) : (
          <VowelList vowels={vowels} onLetterSelect={handleLetterSelection} />
        )}
        {selectedLetter && (
          <div>
            <p>선택한 글자: {selectedLetter}</p>
          </div>
        )}
      </div>
      <canvas id="studyCanvas" style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default LearningPage;
