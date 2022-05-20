import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";
import * as S from "./styles";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <S.Table>
      <thead>
        <tr>
          <S.TableHeadColumn width={200}>Data</S.TableHeadColumn>
          <S.TableHeadColumn width={230}>Categoria</S.TableHeadColumn>
          <S.TableHeadColumn>Título</S.TableHeadColumn>
          <S.TableHeadColumn width={250}>Valor</S.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => {
          return <TableItem key={index} item={item} />;
        })}
      </tbody>
    </S.Table>
  );
};
