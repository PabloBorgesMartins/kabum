import styled from 'styled-components';

export const Container = styled.main`
  background: var(--blue-800);
`;

export const Content = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 10vh;

  >img{
    width: 100%;
  }
`;

export const BillBoard = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: -100px;
`;


export const BillBoardHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

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
  background: var(--gray-100);
  padding: 2rem 0 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const BillBoardFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  
  gap: 1rem;
  padding: 2rem 4rem 4rem;
  background: var(--white);

  @media(max-width: 720px){
    flex-direction: column;
  }
`;