import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  width: 13.5rem;
  height: 100%;

  display: grid;
  grid-template-rows: auto auto auto auto;
  grid-template-columns: 1fr 1fr;
  /* grid-gap: 1rem; */
  grid-template-areas:
    'headerCard headerCard'
    'productImage productImage'
    'bodyCard bodyCard'
    'buttonProduct buttonProduct';

  .headerCard{
    grid-area: headerCard;
  }

  .productImage{
    grid-area: productImage;
    width: 100%;
  }

  .buttonProduct{
    grid-area: buttonProduct;
  }
  
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: .5rem;

  .heartIcon{
    width: 1.5rem;
    cursor: pointer;

    transition: filter 0.2s;
    &:hover{
      filter: brightness(1.2);
    }
  }

  .starIcon{
    width: 1rem;
    margin-left: .1rem;
  }
`;

export const Body = styled.div`
  grid-area: bodyCard;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem .25rem;

  .manufacturerName{
    font-size: .75rem;
    color: var(--gray-400);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: .25rem;
  }

  .productName{
    font-size: .9rem;
    color: var(--gray-900);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .installmentAmount{
    font-size: .75rem;
    color: var(--gray-500);
    font-weight: 400;
    text-decoration: line-through;
  }

  .cashValue{
    font-size: 1.5rem;
    color: var(--orange-900);
    font-weight: 700;
  }

  .cashDescription{
    font-size: .75rem;
    color: var(--gray-500);
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: .5rem;
  }

  .productStatus{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: .75rem;
    color: var(--gray-500);
    font-weight: 400;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background: var(--orange-900);
  border: 0;
  padding: .5rem 0;
  border-radius: 5px;

  color: var(--white);
  font-size: 1rem;
  font-weight: 700;

  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.9);
  }

  img{
    width: 1.2rem;
    margin-right: .5rem;
    fill: blue;
  }
`;