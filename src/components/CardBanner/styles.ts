import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid var(--gray-200);
  cursor: pointer;

  transition: transform 0.2s;
  &:hover{
    transform: scale(1.02);
  }

  img{
    width: 100%;
    object-fit: cover;

    @media(max-width: 720px){
      min-height: 120px;
    }
  }
`;

export const Header = styled.header`
  height: 100%;
  padding: 1rem;

  h1{
    text-transform: uppercase;
    font-weight: bold;
    font-size: .9rem;
    color: var(--gray-500);
  }

  p{
    font-size: .6rem;
    color: var(--gray-500);
  }
`;