import { PageLayout } from "@/components/layout";
import { ModeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout>
      <h1>Learn Next.Js</h1>
      <Link href = "/formations" className="text-indigo-500 underline"> Plan de formation </Link>

      <ModeToggle />

    </PageLayout>
  );
}
