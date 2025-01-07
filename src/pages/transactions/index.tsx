import { Header } from "../../components/header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="income">+ R$ 17.400.00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>04/01/2025</td>
            </tr>
            
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.400.00</PriceHighlight>
              </td>
              <td>Compra</td>
              <td>07/01/2025</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}