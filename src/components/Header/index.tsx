import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <HeaderContent>
                    <img src={logoImg} alt="" />

                    <Dialog.Root>
                        {/*Para aproveitar o botão do NewTransactionButton e não criar um butão dentro de outro */}
                       <Dialog.Trigger asChild> 
                         <NewTransactionButton>Nova transação</NewTransactionButton>
                       </Dialog.Trigger>
                         {/* Ele deixa o elemento em cima das divs  */}
                       <Dialog.Portal>
                        <Dialog.Overlay />
                        <Dialog.Content>
                            {/*Anucia que vai abrir um modal */}
                            <Dialog.Title>Nova Transação</Dialog.Title> 
                            <Dialog.Close/>
                        </Dialog.Content>
                       </Dialog.Portal>

                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}