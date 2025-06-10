import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import { IKeywordItem, IKeywords } from "../App";
import { RankChangeItem } from "./RankChangeItem";

interface RankChangeListProps {
  data: IKeywords;
}

export const TextListRollup = ({ data }: RankChangeListProps) => {
  type TShowingRankItem = IKeywordItem & { id: number };
  const [rankItems, setRankItems] = useState<TShowingRankItem>({
    ...data.items[0],
    id: 0,
  });

  const [rankItems2, setRankItems2] = useState<TShowingRankItem>({
    ...data.items[1],
    id: 1,
  });

  const [isSecondAnimation, setIsSecondAnimation] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsSecondAnimation(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!data.items.length) return;

    const interval = setInterval(() => {
      setRankItems((prev) => {
        const nextItem =
          data.items[
            prev.id + 2 >= data.items.length
              ? (prev.id + 2) % data.items.length
              : prev.id + 2
          ];
        return {
          ...nextItem,
          id: prev.id + 2,
        };
      });
    }, 6000);

    let interval2: any; //NodeJs
    const timeoutId = setTimeout(() => {
      interval2 = setInterval(() => {
        setRankItems2((prev) => {
          const nextItem =
            data.items[
              prev.id + 2 >= data.items.length
                ? (prev.id + 2) % data.items.length
                : prev.id + 2
            ];
          return {
            ...nextItem,
            id: prev.id + 2,
          };
        });
      }, 6000);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      if (interval2) {
        clearInterval(interval2);
      }
    };
  }, [data]);

  return (
    <>
      <Tooltip
        id="rank-change-item-tooltip"
        place="top"
        opacity={1}
        style={{
          backgroundColor: "#ffffff",
          color: "#000",
          border: "1px solid #000",
          boxShadow:
            "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
        }}
        className="max-w-[90vw] whitespace-normal break-words fixed z-[9999]"
        offset={10}
      />
      <div className="rounded-lg border border-[#e0e0e0] px-2 mt-1 h-[38px] overflow-hidden">
        <div className="relative h-full">
          <RankChangeItem
            key={rankItems.id}
            rank={rankItems.rank?.toString() || "-"}
            title={rankItems.productName}
            isUp={rankItems.status}
            className={`h-[38px] absolute w-full translate-y-[100%] animate-roll-up`}
          />
          <RankChangeItem
            key={rankItems2.id}
            rank={rankItems2.rank?.toString() || "-"}
            title={rankItems2.productName}
            isUp={rankItems2.status}
            className={`h-[38px] absolute w-full translate-y-[100%] ${isSecondAnimation ? "animate-roll-up" : ""}`}
          />
        </div>
      </div>
    </>
  );
};
