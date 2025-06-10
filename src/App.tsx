import "./styles.css";
import { TextListRollup } from "./components/TextListRollup";
export type KeywordRankStatus = "UP" | "DOWN" | "SAME" | "ENTRY" | "DROP";

export interface IKeywordItem {
  status: KeywordRankStatus;
  productName: string;
  rank: number | null;
  rankChange: number | null;
}
export interface IKeywords {
  totalCount: number;
  items: IKeywordItem[];
}

export default function App() {
  const keywords: IKeywords = {
    totalCount: 5,
    items: [
      {
        status: "UP",
        productName: "🍓 Strawberry Icecream",
        rank: 1,
        rankChange: 3,
      },
      {
        status: "DOWN",
        productName: "🍨 Vanilla Icecream",
        rank: 2,
        rankChange: 1,
      },
      {
        status: "SAME",
        productName: "🍫 Choco Icecream",
        rank: 3,
        rankChange: null,
      },
      {
        status: "DROP",
        productName: "🌿 Rime Jelly Jelly Sweet Jelly",
        rank: 4,
        rankChange: null,
      },
      {
        status: "ENTRY",
        productName: "🍋 Lemon Jelly Jelly Sweet Jelly",
        rank: 5,
        rankChange: null,
      },
    ],
  };

  return (
    <div className="App">
      <h1 className="text-red-500">Auto-rolling ranking</h1>
      {keywords && keywords.items.length > 0 && (
        <TextListRollup data={keywords} />
      )}
    </div>
  );
}
