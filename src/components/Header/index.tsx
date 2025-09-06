import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";

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
                         
                         <NewTransactionModal />
                    </Dialog.Root>
                </HeaderContent>
            </HeaderContainer>
        </div>
    )
}