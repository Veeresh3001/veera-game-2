import styled from 'styled-components'

export const ResultImageCard = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ResultCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto;
  height: 50vh;
  // padding: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const AgainBtn = styled.button`
  background-color: #ffffff;
  font-family: Bree Serif;
  color: #223a5f;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 8px 12px 8px 12px;
    border-radius: 6px;
  }
`

export const RuleBtn = styled.button`
  background-color: #ffffff;
  font-family: Bree Serif;
  color: #223a5f;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  display: flex;
  align-self: flex-end;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 8px 12px 8px 12px;
    border-radius: 6px;
  }
`

export const ImageBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 20px;
  @media (max-width: 768px) {
    margin: 5px;
  }
`

export const Image = styled.img`
  width: 150px;
  @media (max-width: 768px) {
    width: 80px;
  }
`

export const ChoiceCard = styled.ul`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 20px;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

export const MainCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #223a5f;
  justify-content: space-between;
  font-family: Bree Serif;
  color: #ffffff;
  margin: 0px;
  padding: 50px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 30px;
  }
`

export const ScoreMain = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 2px solid #ffffff;
  width: 70%;
  padding: 10px 30px 10px 30px;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 6px 12px 6px 12px;
    border-radius: 8px;
    width: 100%;
  }
`

export const ScoreHead = styled.h1`
  font-weight: 500;
  margin: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
    width: 50%;
  }
`

export const ScoreCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  font-family: Bree Serif;
  // justify-content: center;
  color: #223a5f;
  padding: 10px 30px 10px 30px;
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 5px 10px 5px 10px;
    margin-left: 6px;
    border-radius: 8px;
  }
`
export const ScorePara = styled.p`
  margin: 0px;
  font-family: Roboto;
  font-size: 30px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 700;
  }
`
