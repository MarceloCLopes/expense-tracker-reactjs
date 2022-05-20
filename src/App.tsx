import { useEffect, useState } from "react";
import * as S from "./App.styles";
import { TableArea } from "./components/TableArea";
import { items } from "./data/items";
import { categories } from "./data/categories";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { Item } from "./types/Item";
import { Category } from "./types/Category";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>

      <S.Body>
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
}

export default App;
