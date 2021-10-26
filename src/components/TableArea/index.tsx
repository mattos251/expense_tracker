import { Item } from '../../types/Item';
import * as C from './styles'
import  {TableItem} from '../TableItem'
import { formatDate } from '../../helpers/dateFilter'

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
                    
                    <TableItem key={index} item = {item} />
                ))}
            </tbody>
        </C.Table>

    );
}