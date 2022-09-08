import { useQuery } from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { PriceData } from "./Coin";

interface IPriceProps {
  coinId: string;
  tickersData: PriceData;
}

const PriceContainer = styled.div`
  display: grid;
  flex-direction: column;
  justify-items: center;
  align-items: space-between;

  margin-top: 10px;
  border-radius: 1rem;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 10px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.textColor};
  text-shadow: 1px 1px 2px ${(props) => props.theme.textColor};
  font-weight: bold;
  font-size: 1.2rem;

  #upper {
    color: #ff9999;
    text-shadow: 1px 1px 2px #ff9999;
  }
  #lower {
    color: #5e7e9b;
    text-shadow: 1px 1px 2px #5e7e9b;
  }
`;

const setInfoId = (percentageInfo: number) => {
  return percentageInfo >= 0 ? "upper" : "lower";
};

const Price = () => {
  const { coinId, tickersData: data } = useOutletContext() as IPriceProps;

  return (
    <>
      <PriceContainer>
        <PriceInfo>
          <span>15분 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_15m)}>
            {data?.quotes.USD.percent_change_15m}%
          </span>
        </PriceInfo>
        <PriceInfo>
          <span>30분 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_30m)}>
            {data?.quotes.USD.percent_change_30m}%
          </span>
        </PriceInfo>
        <PriceInfo>
          <span>1시간 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_1h)}>
            {data?.quotes.USD.percent_change_1h}%
          </span>
        </PriceInfo>
        <PriceInfo>
          <span>12시간 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_12h)}>
            {data?.quotes.USD.percent_change_12h}%
          </span>
        </PriceInfo>
        <PriceInfo>
          <span>1일 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_24h)}>
            {data?.quotes.USD.percent_change_24h}%
          </span>
        </PriceInfo>
        <PriceInfo>
          <span>30일 전</span>
          <span id={setInfoId(data?.quotes.USD.percent_change_30d)}>
            {data?.quotes.USD.percent_change_30d}%
          </span>
        </PriceInfo>
      </PriceContainer>
    </>
  );
};

export default Price;
