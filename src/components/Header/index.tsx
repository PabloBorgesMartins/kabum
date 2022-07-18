import {
  Container,
  Content,
  SearchContainer,
  SessionContainer,
  ButtonContainer,
  Badge
} from './styles';
import { SearchInput } from '../SearchInput';
import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

export function Header() {

  const { user, signIn, signOut } = useAuth();
  const { products } = useCart();

  async function handleSignIn() {
    await signIn({
      email: "teste@teste.com",
      password: "123456"
    });
  }

  return (
    <Container>
      <Content>
        <picture>
          <source srcSet="/images/logo-kabum.svg" type="image/svg+xml" />
          <img
            src="/images/logo-kabum.svg"
            alt="logo kabum"
            className="imgDesktop"
          />
        </picture>
        <picture>
          <source srcSet="/images/logo-kabum-mini.svg" type="image/svg+xml" />
          <img
            src="/images/logo-kabum-mini.svg"
            alt="logo kabum"
            className="imgMobile"
          />
        </picture>
        <SearchContainer>
          <SearchInput />
          {
            user && (
              <span>
                <b>Enviar para:</b> Rua das Hortências, 295 - Boa Vista - Limeira SP
                <picture>
                  <source srcSet="/icons/arrow-down.svg" type="image/svg+xml" />
                  <img src="/icons/arrow-down.svg" alt="arrow down" />
                </picture>
              </span>
            )
          }
        </SearchContainer>
        <SessionContainer>
          <picture>
            <source srcSet={user ? user.image : "/images/person.png"} type="image/svg+xml" />
            <img
              src={user ? user.image : "/images/person.png"}
              alt="user photo"
            />
          </picture>
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
            <picture>
              <source srcSet="/icons/sac.svg" type="image/svg+xml" />
              <img src="/icons/sac.svg" alt="sac" />
            </picture>
          </a>
          <a className="desktopIcon" title="Favoritos">
            <picture>
              <source srcSet="/icons/heart.svg" type="image/svg+xml" />
              <img src="/icons/heart.svg" alt="favorite" />
            </picture>
          </a>
          <a title="Carrinho">
            <picture>
              <source srcSet="/icons/cart.svg" type="image/svg+xml" />
              <img src="/icons/cart.svg" alt="shop cart" />
            </picture>
            {
              !!products.length && (
                <Badge>{products.length}</Badge>
              )
            }
          </a>
        </ButtonContainer>
      </Content>
    </Container>
  )
}