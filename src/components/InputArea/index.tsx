import { Item } from "../../types/Item";
import * as S from "./styles";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2022, 5, 21),
      category: "food",
      title: "Item de teste",
      value: 250.25,
    };
    onAdd(newItem);
  };

  return (
    <S.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </S.Container>
  );
};
