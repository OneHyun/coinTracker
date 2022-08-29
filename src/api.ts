const COIN_BASE_URL = `https://api.coinpaprika.com/v1`;

export const fetchCoins = () => {
  return fetch(`${COIN_BASE_URL}/coins`).then((response) => response.json());
};

export const fetchCoinInfo = (coinId: string) => {
  return fetch(`${COIN_BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
};

export const fetchCoinTickers = (coinId: string) => {
  return fetch(`${COIN_BASE_URL}/tickers/${coinId}`).then((response) =>
    response.json()
  );
};
