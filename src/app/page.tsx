import dynamic from "next/dynamic";

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-full">
      <Map />
    </main>
  );
}
