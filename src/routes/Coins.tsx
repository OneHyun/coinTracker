import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "../atoms";
import { ThemeToggle } from "../components/ToggleTheme";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid white;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  const { isLoading, data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);

  console.log(data?.length);
  return (
    <>
      <ThemeToggle />
      <Container>
        <Helmet>
          <title>Coins</title>
        </Helmet>
        <Header>
          <Title>코인</Title>
        </Header>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`} state={coin}>
                  <Img
                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
          </CoinsList>
        )}
      </Container>
    </>
  );
};

export default Coins;
