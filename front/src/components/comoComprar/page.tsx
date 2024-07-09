import Accordion from "./comoComprar";

const HomePageComoComprar = () => {
  const items = [
    {
      id: "1",
      title: "Navigation and Search",
      content:
        "Log in to APPLE ZONE and explore the various product options available. Read detailed descriptions, compare prices, and find the product that best suits your needs.",
    },
    {
      id: "2",
      title: "Add to Cart",
      content:
        "Once you have selected a product, add it to your shopping cart. You can choose one unit of each product. The cart will show you the total of your purchase, and you will also have the option to remove products if you wish.",
    },
    {
      id: "3",
      title: "Confirmation",
      content:
        "Once you are sure your cart is complete, proceed to confirm your order. Once confirmed, the order will be processed automatically, and you will be on your way to receiving your products.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <Accordion items={items} />
    </div>
  );
};

export default HomePageComoComprar;
