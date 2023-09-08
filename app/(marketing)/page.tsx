import Link from "next/link";
import heroImage from '../../public/img/hero_mock.png';
import Image from "next/image";
import { Route } from "next";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-7xl">
        <h2 className="max-w-3xl mx-auto mt-10 mb-6 text-5xl font-bold text-center">Easiest way to manage your payments.</h2>
        <h3 className="max-w-3xl mx-auto text-xl font-medium text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur ullam quibusdam repudiandae earum.</h3>
        <Link href={"/sign-up" as Route} className="mx-auto mt-4 flex max-w-[240px] items-center justify-center rounded-lg bg-zinc-900 px-12 py-3 font-semibold tracking-wide text-zinc-100">Get Pocketsub</Link>
        <Image src={heroImage} alt="hero image" className="px-4 mx-auto mt-10" />
      </section>
      <section className="mx-auto mb-5 max-w-7xl">
        <p className="mt-20 text-center text-xs font-bold uppercase tracking-[2.4px] text-zinc-500">what is pocketsub?</p>
        <h2 className="max-w-2xl mx-auto mt-4 mb-6 text-3xl font-bold text-center">
          Pocketsub redefines the way you manage your payments.
        </h2>
        <h3 className="max-w-2xl mx-auto text-center text-zinc-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil odit expedita iusto soluta hic voluptatum repudiandae cupiditate quaerat incidunt natus commodi repellendus quae nobis fugiat asperiores harum, deserunt perspiciatis quibusdam voluptates consectetur voluptas! Aspernatur eos fugit ut itaque omnis reiciendis? Iure dolor laborum?</h3>
      </section>
    </>
  )
}
