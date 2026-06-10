import { Stroke } from "./stroke";

export interface Layer {
  id: string;
  name: string;
  visible: boolean;
  locked: boolean;
  opacity: number;
  strokes: Stroke[];
}

