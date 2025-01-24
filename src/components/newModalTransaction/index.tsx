import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, DialogContent, Overlay, TransactionType, TransatcionTypeButton } from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewModalTransaction() {
  const { register, handleSubmit, formState: { isSubmitting }} = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    await new Promise((resolve) => {setTimeout(resolve, 2000)})

    console.log(data)
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder="Descricao" {...register("description")} required />
          <input type="number" placeholder="Preço" {...register("price", { valueAsNumber: true })} required />
          <input type="text" placeholder="Categoria" {...register("category")} required />

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

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
