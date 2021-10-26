import * as C from './estyles'
import {Item} from '../../types/Item'

type Props = {
    onAdd: (item: Item) => void;
}

export const InputArea = ({onAdd}: Props) => {
    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2021, 9, 27),
            category: 'food',
            title: 'item de teste',
            value: 250.00
        }
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
}