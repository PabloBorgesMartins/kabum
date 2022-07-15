import styled from 'styled-components';

export const InputContainer = styled.div`
  background: var(--gray-200);
  position: relative;
  width: 100%;
  
  .iconHeaderSearch{
    position: absolute;
    right: -2rem;
    bottom: -.5rem;
    cursor: pointer;

    @media(max-width: 1024px){
      display: none;
    }
  }

  .iconSearch{
    display: none;
    position: absolute;
    right: .375rem;
    bottom: .5rem;
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