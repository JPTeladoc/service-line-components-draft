export const baseIndent = 8;
export const indent = (ratio = 1) => `${ratio * baseIndent}px`;

export const fontSize = (size: number) => ({
  fontSize: `${size}px`,
});

export const fontSizeVH = (size: number, lineHeight?: number) => [
  when(!!lineHeight, {
    lineHeight: `${lineHeight}vh`,
  }),
  {
    fontSize: `${size}vh`,
  },
];

export const when = <T>(condition?: boolean, ...args: T[]) =>
  condition ? args : [];

export type Margin =
  | 0
  | 0.25
  | 0.5
  | 0.75
  | 1
  | 1.25
  | 1.5
  | 2
  | 2.5
  | 3
  | 3.5
  | 4
  | 4.5
  | 5
  | 5.5
  | 6
  | 6.5
  | 7
  | 7.5
  | 8;
