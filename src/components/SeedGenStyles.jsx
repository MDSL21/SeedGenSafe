import styled from 'styled-components';

const Container = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #24292e;
  background-color: #f6f8fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 3px solid #24292e;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;

  .loading-div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 100%;
    gap: 1px;
    font-size: 23px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    opacity: 0.8;

    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    border-radius: 0;
    border: none;
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  color: #24292e;
`;

const Button = styled.button`
  background-color: #24292e;
  color: #f6f8fa;
  border: 2px solid #24292e;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 5px;

  &:hover {
    background-color: #2f363d;
    color: #f6f8fa;
  }
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #24292e;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 10px;
  background-color: #ffffff;
  color: #24292e;
`;

const WalletInfo = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: #eaeaea8f;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border: 2px solid #24292e;
  gap: 10px;
`;

const Address = styled.span`
  color: #24292e;
  width: 100%;
`;

const PrivateKey = styled.span`
  color: #24292e;
  width: 100%;
  height: 50px;
  overflow-wrap: unset;
`;

const KeysDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  gap: 14px;
  transition: all 0.2s ease-in-out;

  @media (max-width: 610px) {
    height: 120px;
  }
  @media (max-width: 428px) {
    height: 150px;
  }
  @media (max-width: 375px) {
    height: 180px;
  }
`;

const Strong = styled.p`
  color: #444;
`;

export { Container, Title, Button, Input, WalletInfo, Address, PrivateKey, KeysDiv, Strong };