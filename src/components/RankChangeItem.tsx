import { MinusIcon, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";
import { KeywordRankStatus } from "../App";

interface RankChangeItemProps {
  rank: string;
  title: string;
  isUp: KeywordRankStatus;
  className?: string;
}

export const RankChangeItem = ({
  rank,
  title,
  isUp,
  className,
}: RankChangeItemProps) => {
  return (
    <div className={cn("flex justify-between items-center", className)}>
      <div className="flex items-center w-[calc(100%-46px)] py-2">
        {(isUp === "UP" || isUp === "ENTRY") && (
          <div className="flex items-center justify-center w-8 h-8 bg-[#EAF4FF] rounded-sm">
            <ArrowUp className="h-[16px] w-[16px] text-[#2f60ff]" />
          </div>
        )}
        {(isUp === "DOWN" || isUp === "DROP") && (
          <div className="flex items-center justify-center w-8 h-8 bg-[#FDECE5] rounded-sm">
            <ArrowDown className="h-[16px] w-[16px] text-[#e7902f]" />
          </div>
        )}
        {isUp === "SAME" && <MinusIcon className="h-4 w-4 text-[#383838]" />}
        <p
          className="truncate text-sm ml-1 w-full"
          data-tooltip-id="rank-change-item-tooltip"
          data-tooltip-content={title}
        >
          {title}
        </p>
      </div>
      <span className="text-xs ml-1 font-bold text-nowrap items-center">
        {isNaN(Number(rank)) ? (
          <MinusIcon className="h-4 w-4 text-[#383838]" />
        ) : (
          `${rank}위`
        )}
      </span>
    </div>
  );
};
