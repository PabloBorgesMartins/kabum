import {
  Container,
  Content,
  SearchContainer,
  UserContainer,
  ButtonContainer
} from './styles';
import { SearchInput } from '../SearchInput';

export function Header() {

  return (
    <Container>
      <Content>
        <img src="/images/logo-kabum.svg" alt="logo kabum" />
        <SearchContainer>
          <SearchInput />
          <span>
            <b>Enviar para:</b> Rua das Hortências, 295 - Boa Vista - Limeira SP
            <img src="/images/arrow-down.svg" alt="arrow down" />
          </span>
        </SearchContainer>
        <UserContainer>
          <img src="/images/person.png" alt="person icon" />
          <span>
            Faça <a href="/">Login</a> ou <br />
            crie seu <a href="">Cadastro</a>
          </span>
        </UserContainer>
        <ButtonContainer>
          <img src="/images/sac.svg" alt="sac" />
          <img src="/images/heart.svg" alt="favorite" />
          <img src="/images/cart.svg" alt="shop cart" />
        </ButtonContainer>
      </Content>
    </Container>
  )
}