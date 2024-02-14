import { RenderItemParams } from "react-native-draggable-flatlist";

export type ListItemProps = RenderItemParams<
  {
    value: string | number;
    action?: (updatedValue: number) => void;
  }[]
> & { removeItem?: (id: number) => void };
