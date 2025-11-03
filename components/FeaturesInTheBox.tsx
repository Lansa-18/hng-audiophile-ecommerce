interface FeaturesInTheBox {
  text1: string;
  text2: string;
  data: BoxItems[];
}

interface BoxItems {
  quantity: string;
  item: string;
}

export default function FeaturesInTheBox({
  text1,
  text2,
  data,
}: FeaturesInTheBox) {
  return (
    <section className="mt-40 flex gap-[125px]">
      <div className="flex-1 space-y-8">
        <h2 className="text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
          FEATURES
        </h2>
        <p className="text-15px leading-[25px] opacity-50">
          {text1}
          <br />
          <br />
          {text2}
        </p>
      </div>

      <div className="w-[350px]">
        <h2 className="mb-8 text-[32px] leading-9 font-bold tracking-[1.15px] uppercase">
          IN THE BOX
        </h2>
        <ul className="space-y-2">
          {data.map(({ quantity, item }) => (
            <li key={item} className="flex gap-6">
              <span className="text-brand-primary text-15px font-bold">
                {quantity}
              </span>
              <span className="text-15px opacity-50">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
