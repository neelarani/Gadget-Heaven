import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../Card/Card';
import { useEffect, useState } from 'react';

const GadgetCards = () => {
  const data = useLoaderData();
  console.log(data);

  const { category } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filterdByCategory = [...data].filter(
        gadget => gadget.category === category
      );
      setGadgets(filterdByCategory);
    } else {
      setGadgets(data.slice(0, 9));
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {gadgets.map(card => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default GadgetCards;
