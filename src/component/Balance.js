// Підключаємо технологію для створення дизайну
import styled from "styled-components";

// Створюємо компонент "Баланс"
export default function Balance({
  // витягуємо параметри, які ми передавали в файлі App.js
  balance,
  cardName,
  cardNumber,
  cardDate,
  currency,
  photo
}) {
  // кажемо що хочемо повернути наступний код інтерфейсу
  return (
    // Загальний блок
    <BlockTag>
      {/* Блок, який надає картинку на фон */}
      <CardImg photo={photo}>
        {/* Блок-секція для верхнього текста */}
        <HeaderBlock>
          {/* Текст назви картки */}
          <CardNameText>{cardName}</CardNameText>
          {/* Текст номера картки */}
          <CardNumberText>{cardNumber}</CardNumberText>
          {/* Текст дати дійсності карти */}
          <CardDateText>{cardDate}</CardDateText>
        </HeaderBlock>
        {/* Блок-секція для нижнього текста */}
        <FooterBlock>
          {/* Текст для суми грошей на картці і валюти */}
          <BalanceText>
            {balance} {currency}
          </BalanceText>
          {/* Підключаємо іконку mastercard */}
          <img
            src="/icon/mastercard.svg"
            width="40px"
            height="40px"
            alt="Mastercard"
          />
        </FooterBlock>
      </CardImg>
    </BlockTag>
  );
}
// Створюємо елемент який відповідає за секцію з карточкою в інтерфейсі
const BlockTag = styled.div`
  /* робимо ширину на весь екран */
  width: 100%;

  /* робимо відступи по боках та зверху, щоб задати відступи для карточки */
  padding: 30px;
`;

// Створюємо елемент "Картинка карточки на фоні", який відповідає за фон картки та її відображення
const CardImg = styled.div`
  padding: 20px; /* Внутрішні відступи в карточці*/
  border-radius: 10px; /* Закруглення країв карточки */

  height: 250px; /* Висотка картики */

  /* Режим верстки для розміщення елементів всередені*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Потрібні налаштування для відображення фотографії */
  background: url(${({ photo }) => photo}) 100%;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HeaderBlock = styled.div`
  /* Включаємо певний режим верстки  */
  display: grid;

  /* Відступи вертикальні між елементами текста */
  gap: 10px;
`;

const FooterBlock = styled.div`
  /* Включаємо певний режим верстки  */
  display: flex;
  justify-content: space-between;
`;

const BalanceText = styled.div`
  /* задаємо розмір тексту */
  font-size: 24px;
  /* задаємо колір тексту */
  color: #fff;
`;

const CardNameText = styled.div`
  /* задаємо розмір тексту */
  font-size: 21px;
  /* задаємо колір тексту */
  color: #fff;
`;

const CardNumberText = styled.div`
  /* задаємо розмір тексту */
  font-size: 18px;
  /* задаємо колір тексту */
  color: #fff;
`;

const CardDateText = styled.div`
  /* задаємо розмір тексту */
  font-size: 16px;
  /* задаємо колір тексту */
  color: #fff;
`;
