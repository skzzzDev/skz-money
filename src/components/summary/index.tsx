import { SummaryCard, SummaryContainer } from "./style";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard variant="green">
        <header>
          <p>Entradas</p>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant="red">
        <header>
          <p>Saídas</p>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 1.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <p>Total</p>
          <CurrencyDollar size={32} color="#ffffff" />
        </header>

        <strong>R$ 16.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}