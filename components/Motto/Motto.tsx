const MottosArray = [
  "Each seed you tuck into the soil is a quiet promise to the future—watered with hope, rooted in patience.",
  "Tending to your plants teaches you the same truth nature holds: nothing thrives without time, attention, and love.",
  "A home filled with growing things is a soul learning how to bloom again.",
  "The act of caring for plants is a gentle rebellion against hurry—it reminds us that beauty unfolds on its own time.",
  "In every leaf that unfurls, there’s a small victory—proof that light, care, and stillness are enough.",
  "The gardener does not rush the bloom—they trust the season, the silence, and the unseen.",
  "With each watering and every repotting, you’re not just helping plants grow—you’re nurturing your own quiet strength.",
];

const Motto = () => {
  const index = Math.floor(Math.random() * MottosArray.length);
  const MottoPicked = MottosArray[index];

  return (
    <div className="p-10 my-10 text-2xl text-slate-600">
      <p className="italic font-bold">&quot;{MottoPicked}&quot;</p>
    </div>
  );
};

export default Motto;
