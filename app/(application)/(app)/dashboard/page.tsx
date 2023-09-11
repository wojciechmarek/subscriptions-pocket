import AppContentHeader from "@/components/AppContentHeader";
import SingleStats from "@/components/SingleStats";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { SUBSCRIPTION_CURRENCY } from "@prisma/client";
import { format } from "date-fns";

const getDataForDashboard = async () => {
  const { userId } = auth();

  try {
    if (!userId) {
      return;
    }

    const result = await prisma.subscription.findMany({
      where: {
        onwerId: userId,
      },
      include: {
        payments: true,
      },
      orderBy: {
        next_payment_date: "asc",
      },
    });

    return result;

  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

export default async function DashboardPage() {
  const data = await getDataForDashboard();

  return (
    <section className="h-full p-8">
      <AppContentHeader title="Dashboard" />
      <div className="grid mx-auto h-full max-w-7xl grid-cols-3 grid-rows-[80px,_1fr] gap-6 py-6">
        <div className="col-span-3 row-start-1 row-end-2 rounded-xl bg-zinc-50 xl:col-span-2">
          <div className="flex items-center justify-between h-full gap-6 mx-6">
            <div>
              <h1 className="text-xl font-semibold leading-5 tracking-wide">{format(new Date(), "LLLL")}</h1>
              <p className="text-xs text-zinc-500">{format(new Date(), "yyyy")}</p>
            </div>

            <div className="flex gap-6">
              <SingleStats sum={23.2} currency={SUBSCRIPTION_CURRENCY.PLN} description="Description here" />
              <SingleStats sum={23.2} currency={SUBSCRIPTION_CURRENCY.PLN} description="Description here" />
              <SingleStats sum={23.2} currency={SUBSCRIPTION_CURRENCY.PLN} description="Description here" />
            </div>
          </div>

        </div>
        <div className="col-span-3 row-start-2 row-end-3 p-6 rounded-xl bg-zinc-50 xl:col-span-2">stats</div>
        <div className="hidden row-span-2 rounded-xl bg-zinc-50 xl:flex">stats</div>
      </div>
    </section>
  )
}
