import Accordion from "./comoComprar";

const HomePageComoComprar = () => {
  const items = [
    {
      id: "1",
      title: "Navegación y Búsqueda",
      content:
        "Inicia sesión en APPLE ZONE y explora las diversas opciones de productos disponibles. Lee las descripciones detalladas, compara precios y encuentra el producto que mejor se adapte a tus necesidades.",
    },
    {
      id: "2",
      title: "Agrega al Carrito",
      content:
        "Una vez que hayas seleccionado un producto, agrégalo al carrito de compras. Puedes seleccionar una unidad de cada producto. El carrito te mostrará el total de tu compra, y también tendrás la opción de eliminar productos si lo deseas.",
    },
    {
      id: "3",
      title: "Confirmación",
      content:
        "Cuando estés seguro de que tu carrito está completo, procede a confirmar el pedido. Una vez confirmado, la orden se procesará automáticamente, y estarás en camino para recibir tus productos.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Accordion items={items} />
    </div>
  );
};

export default HomePageComoComprar;
