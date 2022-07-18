import styled from 'styled-components';

export const InputContainer = styled.div`
  background: var(--gray-200);
  position: relative;
  width: 100%;
  
  .iconHeaderSearch{
    position: absolute;
    right: -2.5rem;
    bottom: -.45rem;
    cursor: pointer;

    @media(max-width: 1024px){
      display: none;
    }
  }

  .iconSearch{
    width: 1rem;
    display: none;
    position: absolute;
    right: .375rem;
    bottom: .6rem;
    cursor: pointer;

    @media(max-width: 1024px){
      display: unset;
    }
  }
`;

export const Input = styled.input`
  border: 0;
  background: transparent;
  padding: .5rem 1rem;
  width: 100%;

  &::placeholder{
    font-weight: 600;
  }
`;