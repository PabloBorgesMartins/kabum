import styled from 'styled-components';

export const Container = styled.main`
  background: var(--black);
`;

export const Content = styled.div`
  background: var(--blue-800);
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;

  img{
    width: 100%;
  }
`;

export const BillBoard = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: -100px;
`;


export const BillBoardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 1.5rem 3rem;
  background: var(--orange-900);

  @media(max-width: 1024px){
    padding: 1.5rem;
  }

  h1{
    font-size: 1.3rem;
    color: var(--white);
    text-transform: uppercase;

    @media(max-width: 1024px){
      font-size: 1rem;
    }
  }

  div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p{
      font-size: 1rem;
      width: max-content;
      font-weight: bold;
      color: var(--white);

      @media(max-width: 1024px){
        display: none;
      }
    }

    img{
      width: 1.3rem;
    }
  }
`;

export const BillBoardContent = styled.section`
  height: 50vh;
  background: var(--gray-100);

  
`;