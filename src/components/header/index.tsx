import { NewModalTransaction } from "../newModalTransaction";
import { HeaderContainer, HeaderContent, LogoStyled, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoStyled>sKz Money</LogoStyled>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewModalTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}