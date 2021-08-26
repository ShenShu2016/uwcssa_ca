import styled from 'styled-components';

export const Container = styled.div`
  padding-top:190px;
  padding-left: 50px;
  padding-bottom: 80px;
  background: #2C3E50;
  margin-top:30px;
  radial-gradient(circle, rgba(92,39,251,1) 0%, rgba(112,71,247,1) 100%)
  @media (max-width: 1000px) {
    padding: 70px 30px;
    height:900;
    
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  margin-right: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1.2fr 1.2fr;
  grid-gap: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  &:hover {
      color: #ff9c00;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  color: #fff;
  margin-bottom: 80px;
  font-weight: bold;
`;
export const CopyContainer = styled.div`
  margin-top:150px;
  width: 70%;
`;


export const Copy = styled.p`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  float:right;

`;