import { SUBSCRIPTION_CURRENCY, Subscription } from "@prisma/client";
import SingleStats from "./SingleStats";
import { format } from "date-fns";

interface DashboardMainStatsProps {
  subscriptions: Subscription[];
}

function summarizePrices(subscriptions: Subscription[]) {
  let totalEuro = 0;
  let totalPln = 0;
  let totalUsd = 0;

  subscriptions.forEach((subscription) => {
    if (subscription.currency === SUBSCRIPTION_CURRENCY.EUR) {
      totalEuro += subscription.price;
    }

    if (subscription.currency === SUBSCRIPTION_CURRENCY.PLN) {
      totalPln += subscription.price;
    }

    if (subscription.currency === SUBSCRIPTION_CURRENCY.USD) {
      totalUsd += subscription.price;
    }
  });

  return {
    totalEuro: Number.parseFloat(totalEuro.toFixed(2)),
    totalPln: Number.parseFloat(totalPln.toFixed(2)),
    totalUsd: Number.parseFloat(totalUsd.toFixed(2)),
  }
}

function summarizePaymentAmounts(subscriptions: Subscription[]) {
  let totalPaidEuro = 0;
  let totalPaidPln = 0;
  let totalPaidUsd = 0;
  let totalNotPaidEuro = 0;
  let totalNotPaidPln = 0;
  let totalNotPaidUsd = 0;


  subscriptions.forEach((subscription) => {
    if (subscription.currency === SUBSCRIPTION_CURRENCY.EUR) {
      subscription.payments.forEach((payment) => {
        if (payment.is_paid) {
          totalPaidEuro += payment.amount;
        } else {
          totalNotPaidEuro += payment.amount;
        }
      });
    }

    if (subscription.currency === SUBSCRIPTION_CURRENCY.PLN) {
      subscription.payments.forEach((payment) => {
        if (payment.is_paid) {
          totalPaidPln += payment.amount;
        } else {
          totalNotPaidPln += payment.amount;
        }
      });
    }

    if (subscription.currency === SUBSCRIPTION_CURRENCY.USD) {
      subscription.payments.forEach((payment) => {
        if (payment.is_paid) {
          totalPaidUsd += payment.amount;
        } else {
          totalNotPaidUsd += payment.amount;
        }
      });
    }
  });

  return {
    totalPaidEuro: Number.parseFloat(totalPaidEuro.toFixed(2)),
    totalPaidPln: Number.parseFloat(totalPaidPln.toFixed(2)),
    totalPaidUsd: Number.parseFloat(totalPaidUsd.toFixed(2)),
    totalNotPaidEuro: Number.parseFloat(totalNotPaidEuro.toFixed(2)),
    totalNotPaidPln: Number.parseFloat(totalNotPaidPln.toFixed(2)),
    totalNotPaidUsd: Number.parseFloat(totalNotPaidUsd.toFixed(2)),
  }
}

export default function DashboardMainStats(props: DashboardMainStatsProps) {
  const { subscriptions } = props;

  const subsSum = summarizePrices(subscriptions);
  const totalSubsSumInPln = subsSum.totalEuro * 4.5 + subsSum.totalPln + subsSum.totalUsd * 3.8;

  const {
    totalPaidEuro,
    totalPaidPln,
    totalPaidUsd,
    totalNotPaidEuro,
    totalNotPaidPln,
    totalNotPaidUsd,
  } = summarizePaymentAmounts(subscriptions);

  const sumStillToPaid = totalNotPaidEuro * 4.5 + totalNotPaidPln + totalNotPaidUsd * 3.8;
  const sumAlreadyPaid = totalPaidEuro * 4.5 + totalPaidPln + totalPaidUsd * 3.8;

  return (
    <div className="col-span-3 row-start-1 row-end-2 rounded-xl bg-zinc-50 xl:col-span-2">
      <div className="flex items-center justify-between h-full gap-6 mx-6">
        <div>
          <h1 className="text-xl font-semibold leading-5 tracking-wide">{format(new Date(), "LLLL")}</h1>
          <p className="text-xs text-zinc-500">{format(new Date(), "yyyy")}</p>
        </div>

        <div className="flex gap-6">
          <SingleStats sum={sumStillToPaid} currency={SUBSCRIPTION_CURRENCY.PLN} description="Still to pay" />
          <SingleStats sum={sumAlreadyPaid} currency={SUBSCRIPTION_CURRENCY.PLN} description="Already paid" />
          {/* <SingleStats sum={23.2} currency={SUBSCRIPTION_CURRENCY.PLN} description="Last month sum" /> */}
          <SingleStats sum={totalSubsSumInPln} description="This month sum" />
        </div>
      </div>
    </div>
  )
}
