const AnnouncementBar = () => {
  return (
    <div className="block bg-green-500/60 px-2 py-3 text-center">
      WELCOME TO OUR WEBSITE, OUR CURRENT DISPATCH TIMES ARE 5 TO 10 WORKING
      DAYS, WE DELIVER TO IRELAND & UK FROM €15 to €75 -{" "}
      <a href="/cactus-café" className="underline font-semibold cursor-pointer">
        CLICK HERE FOR THE CACTUS CAFÉ OPENING HOURS
      </a>
    </div>
  );
};

export default AnnouncementBar;
