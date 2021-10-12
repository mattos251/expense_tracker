import { Item } from '../../types/Item';
import * as C from './styles'

type Props = {
    list:Item[];
}


export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadcolumn width={100}>Data</C.TableHeadcolumn>
                    <C.TableHeadcolumn width={130}>Categoria</C.TableHeadcolumn>
                    <C.TableHeadcolumn >titulo</C.TableHeadcolumn>
                    <C.TableHeadcolumn width={150}>Valor</C.TableHeadcolumn>
                </tr>
            </thead>

            <tbody>
                { list.map((item, index)=> (
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </C.Table>

    );
}