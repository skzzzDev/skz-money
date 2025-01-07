import { MagnifyingGlass } from "phosphor-react";
import { FormContainer } from "./style";

export function SearchForm() {
  return (
    <FormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </FormContainer>
  )
}