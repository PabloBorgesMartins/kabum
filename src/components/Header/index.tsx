import {
  Container,
  Content,
  SearchContainer,
  SessionContainer,
  ButtonContainer
} from './styles';
import { SearchInput } from '../SearchInput';
import { useAuth } from '../../hooks/auth';

export function Header() {

  const { user, signIn, signOut } = useAuth();

  async function handleSignIn() {
    await signIn({
      email: "teste@teste.com",
      password: "123456"
    });
  }

  return (
    <Container>
      <Content>
        <img
          src="/images/logo-kabum.svg"
          alt="logo kabum"
          className="imgDesktop"
        />
        <img
          src="/images/logo-kabum-mini.svg"
          alt="logo kabum"
          className="imgMobile"
        />
        <SearchContainer>
          <SearchInput />
          {
            user && (
              <span>
                <b>Enviar para:</b> Rua das Hortências, 295 - Boa Vista - Limeira SP
                <img src="/images/arrow-down.svg" alt="arrow down" />
              </span>
            )
          }
        </SearchContainer>
        <SessionContainer>
          <img src={user ? user.image : "/images/person.png"} alt="user photo" />
          {
            user ? (
              <div>
                <p>Olá, {user.name}</p>
                <span><a>MINHA CONTA</a> | <a onClick={signOut}>SAIR</a></span>
              </div>
            ) : (
              <span>
                Faça <a onClick={handleSignIn}>Login</a> ou <br />
                crie seu <a>Cadastro</a>
              </span>
            )
          }
        </SessionContainer>
        <ButtonContainer>
          <a className="desktopIcon" title="SAC">
            <img src="/images/sac.svg" alt="sac" />
          </a>
          <a className="desktopIcon" title="Favoritos">
            <img src="/images/heart.svg" alt="favorite" />
          </a>
          <a title="Carrinho">
            <img src="/images/cart.svg" alt="shop cart" />
          </a>
        </ButtonContainer>
      </Content>
    </Container>
  )
}