import { SUBSCRIPTION_CURRENCY } from "@prisma/client";
import { format } from "date-fns";

interface SingleStatsProps {
  sum: number;
  currency: SUBSCRIPTION_CURRENCY;
  description: string;
}

export default function SingleStats(props: SingleStatsProps) {
  const { sum, currency, description } = props;

  return (
    <div>
      <h2 className="text-xl font-semibold leading-5 tracking-wide">{sum}
        <span className="ml-1 text-[8px] uppercase">{currency}</span>
      </h2>
      <p className="text-xs text-zinc-500">{description}</p>
    </div>
  )
}
