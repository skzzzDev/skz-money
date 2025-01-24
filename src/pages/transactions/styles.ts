import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
    max-height: 400px;
    overflow: auto;
  }
  
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme["gray-700"]};
    font-weight: bold;
    
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px; 
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`

export const ContainerPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 15px;

  span {
    font-size: 1rem;
    color: #fff;
    font-weight: 500;

    strong {
      font-weight: bold;
    }
  }

  button {
    background: ${(props) => props.theme["green-500"]};
    border: none;
    border-radius: 50%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, background 0.3s ease;

    &:hover:not(:disabled) {
      background: ${(props) => props.theme["green-700"]};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${(props) => props.theme["gray-700"]};
    }
  }
`;