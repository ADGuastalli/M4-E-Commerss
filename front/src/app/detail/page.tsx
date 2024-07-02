import dynamic from "next/dynamic";

// Importa dinámicamente el componente Cards
const DynamicCards = dynamic(() => import("@/components/cards/indexCard"), {
  loading: () => <p>Loading...</p>,
});

function EventsPage() {
  return (
    <div>
      <DynamicCards />
    </div>
  );
}

export default EventsPage;
