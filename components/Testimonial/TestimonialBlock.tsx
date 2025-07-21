const TestimonialBlock = () => {
  const year = new Date().getFullYear();

  return (
    <section className="text-slate-600 py-10">
      <article className="px-3">
        <p className="text-2xl text-center">
          &quot;An outstanding place for plant advice, where James shares his
          deep expertise and thoughtful guidance with beginners and seasoned
          gardeners alike, making every visit an opportunity to learn, grow, and
          feel part of something truly special.&quot;
        </p>

        <br />
        <p className="italic text-end font-bold">
          Review by Oliver - Jan {year}
        </p>
      </article>
    </section>
  );
};

export default TestimonialBlock;
