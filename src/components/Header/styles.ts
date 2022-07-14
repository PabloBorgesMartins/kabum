import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: var(--blue-400);
  padding: 1.5rem 0rem;
`;

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img{
    width: 10rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;

  span{
    cursor: pointer;
    font-size: .8rem;
    color: var(--gray-100);
    margin-top: .5rem;

    img{
      margin-left: .25rem;
      width: 1rem;
    }
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  min-width: max-content;
  padding: 0 3rem;

  img{
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid var(--blue-300);
    border-radius: 100%;
  }

  span{
    font-size: .8rem;
    margin-left: .5rem;
    color: var(--gray-100);
      
    a{
      color: var(--gray-100);
      text-decoration: none;
      font-weight: bold;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img{
    width: 1.5rem;
    cursor: pointer;
    /* color: var(--gray-100); */
    transition: filter .2s;
    color: red;

    :hover{
      filter: brightness(.8)
    }

    & + img{
      margin-left: 2rem;
    }
  }
`;