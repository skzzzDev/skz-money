import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, DialogContent, Overlay, TransactionType, TransatcionTypeButton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewModalTransaction() {
  return (
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descricao" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransatcionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24}/>
              Entrada
            </TransatcionTypeButton>
            <TransatcionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24}/>
              Saida
            </TransatcionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
