export interface Step {
  id: string;
  state: string;
  text: string;
  children: Step[]
}