// 会員情報インターフェ-ス
export interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
