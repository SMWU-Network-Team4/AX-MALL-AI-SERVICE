// src/pages/ReportPage.tsx

import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../styles/theme";
import type { StrategyResult } from "../types/chat";
import { H3 } from "../styles/Text";
import back from "../../public/icons/back-icon.svg";
import dots from "../../public/icons/dots_icon.svg";

export default function ReportPage() {
  const [reportData, setReportData] = useState<any>(null);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws/chat");
    socketRef.current = ws;

    ws.onopen = () => {
      console.log("ReportPage WebSocket connected");

      // 필요하다면 서버에 리포트 요청 메시지 전송
      ws.send(JSON.stringify({ type: "request_report" }));
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      // 서버가 보내는 리포트 구조
      if (data.type === "strategy_result") {
        setReportData(data.report);
      }
    };

    ws.onclose = () => console.log("ReportPage WebSocket disconnected");

    // 🔧 테스트용 더미
    setReportData({
      summary: "고객은 패션/잡화 카테고리에 관심이 높음으로 판단됩니다.",
      keyword: ["가방", "수납", "10만원대", "경량"],
      strategy: "직원에게 푸시 알림: 고객에게 가방 프로모션 소개 필요",
      recommendedCoupons: [],
      recommendedProducts: [],
      debugRecentUtterances:
        "가볍고 수납 많은... / 가격대는 10만원...",
    });

    return () => ws.close();
  }, []);

  if (!reportData) {
    return <Wrapper><Content>리포트 로딩 중...</Content></Wrapper>;
  }


  return (
    <Wrapper>
      <Header>
        <BackBtn>
            <img src={back} alt="" />
        </BackBtn>
        <H3>최예인님의 채팅 분석 리포트</H3>
        <BackBtn2>
        </BackBtn2>
      </Header>
      <Content>
        {/* 키워드 */}
        <Section>
          <SectionTitle>핵심 키워드</SectionTitle>
          <KeywordWrapper>
            {reportData.keyword?.length ? (
              reportData.keyword.map((k: string, i: number) => (
                <Keyword key={i}>#{k}</Keyword>
              ))
            ) : (
              <Body>키워드 없음</Body>
            )}
          </KeywordWrapper>
        </Section>

        {/* 요약 */}
        <Section>
          <SectionTitle>대화 전체 요약</SectionTitle>
          <Body>{reportData.summary || "요약 없음"}</Body>
        </Section>

        {/* 고객 맞춤 마케팅 전략 */}
        <Section>
          <SectionTitle>고객 맞춤 마케팅 전략</SectionTitle>
          <Body>{reportData.strategy || "전략 없음"}</Body>
        </Section>

        {/* 추천 상품 — 필요하면 카드 형태로 */}
        <Section>
          <SectionTitle>추천 상품</SectionTitle>
          {reportData.recommendedProducts?.length ? (
            reportData.recommendedProducts.map((p: any, i: number) => (
              <Body key={i}>{JSON.stringify(p)}</Body>
            ))
          ) : (
            <Body>추천 상품 없음</Body>
          )}
        </Section>

        {/* 추천 쿠폰 */}
        <Section>
          <SectionTitle>추천 쿠폰</SectionTitle>
          {reportData.recommendedCoupons?.length ? (
            reportData.recommendedCoupons.map((c: any, i: number) => (
              <Body key={i}>{JSON.stringify(c)}</Body>
            ))
          ) : (
            <Body>추천 쿠폰 없음</Body>
          )}
        </Section>

        {/* Debug */}
        {/* <Section>
          <SectionTitle>최근 고객 발화 (Debug)</SectionTitle>
          <DebugBox>{report.debugRecentUtterances}</DebugBox>
        </Section> */}
      </Content>
    </Wrapper>
  );
}

/* ========= styled-components ========== */

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 390px;
  background: ${theme.colors.white};
`;

const Header = styled.div`
  height: 70px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${theme.colors.black}
`;

const BackBtn = styled.button`
    background-color: transparent;
    padding: 0;
`;
const BackBtn2 = styled.div`
    background-color: transparent;
    padding: 0;
`;

const Content = styled.div`
  padding: 20px 16px;
  overflow-y: auto;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.div`
  ${theme.typography.body1};
  font-weight: 600;
  margin-bottom: 10px;
  color: ${theme.colors.black};
`;

const Body = styled.div`
  ${theme.typography.body2};
  color: #333333;
  background-color: ${theme.colors.gray.gray6};
  padding: 12px 16px;
  border-radius: ${theme.radius.m};
`;

const KeywordWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Keyword = styled.div`
  padding: 4px 12px;
  background: ${theme.colors.green.base};
  border-radius: 30px;
  ${theme.typography.body2};
  font-weight: 600;
  color: ${theme.colors.white};
`;
