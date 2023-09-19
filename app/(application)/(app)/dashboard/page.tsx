import AppContentHeader from "@/components/AppContentHeader";
import DashboardCatBreakdown from "@/components/DashboardCatBreakdown";
import DashboardMainStats from "@/components/DashboardMainStats";
import DashboardSubsTable from "@/components/DashboardSubsTable";
import SingleStats from "@/components/SingleStats";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs";

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
        <DashboardMainStats subscriptions={data ?? []} />
        <DashboardSubsTable data={data ?? []} />
        <DashboardCatBreakdown data={data ?? []} />
      </div>
    </section>
  )
}
