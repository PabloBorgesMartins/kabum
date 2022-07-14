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

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  min-width: max-content;
  padding: 0 3rem;
  font-size: .8rem;
  color: var(--gray-100);

  img{
    width: 2.5rem;
    height: 2.5rem;
    border: 3px solid var(--blue-300);
    border-radius: 100%;
    aspect-ratio: auto 1 / 1;
    object-fit: cover;
  }

  a{
    cursor: pointer;
    text-decoration: none;

    &:hover{
      text-decoration: underline;
    }
  }

  >span{
    margin-left: .5rem;
      
    a{
      font-weight: bold;
    }
  }

  >div{
    margin-left: .5rem;

    p{
      font-weight: bold;
      margin-bottom: .2rem;
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
    transition: filter .2s;

    :hover{
      filter: brightness(.8)
    }

    & + img{
      margin-left: 2rem;
    }
  }
`;