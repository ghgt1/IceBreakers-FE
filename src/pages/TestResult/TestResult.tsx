import {
  StyledContainer,
  DoneText,
  TitleText,
  CardImage,
  ExplainText,
  NickNameText,
} from './styles';
import { useNickNameContext } from '@/hooks/useNickNameContext';
import charOrange from '@assets/charOrange.png';
import charYellow from '@assets/charYellow.png';
import charGreen from '@assets/charGreen.png';
import charBlue from '@assets/charBlue.png';
import { NextBtn } from '@/components';
import { motion } from 'framer-motion';
import { useTestContext } from '@/hooks/useTestContext';
import { testResult } from '@/constants/testList';

export default function TestResult() {
  const { nickName } = useNickNameContext();
  const { result } = useTestContext();

  const handleNextPage = () => {
    console.log('다음페이지이동');
  };

  const imgSrc = (() => {
    switch (testResult[result][0]) {
      case 1:
        return charBlue;
      case 2:
        return charOrange;
      case 3:
        return charGreen;
      case 4:
        return charYellow;
      default:
        return charBlue;
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <DoneText>테스트가 완료되었어요</DoneText>
        <TitleText>
          {`${nickName} 님은`}
          <br />
          {`${testResult[result][1]}이네요!`}
        </TitleText>
        <CardImage src={imgSrc} alt={testResult[result][1]} />
        <NickNameText>{nickName}</NickNameText>
        <ExplainText>{testResult[result][1]}</ExplainText>
        <NextBtn text="다음" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}
