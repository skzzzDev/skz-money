import { useContext, useState } from "react";
import { Header } from "../../components/header";
import { SearchForm } from "../../components/searchForm";
import { Summary } from "../../components/summary";
import { ContainerPagination, PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { TransactionsContext } from "../../../contexts/contextTransactions";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div>
      <Header />
      <Summary />
      
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {currentTransactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createAt))}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>

        <ContainerPagination>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            aria-label="Página anterior"
          >
            <ArrowCircleLeft size={42} color={currentPage === 1 ? "#888" : "#fff"} />
          </button>
          <span>
            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            aria-label="Próxima página"
          >
            <ArrowCircleRight size={42} color={currentPage === totalPages ? "#888" : "#fff"} />
          </button>
        </ContainerPagination>
      </TransactionsContainer>
    </div>
  );
}