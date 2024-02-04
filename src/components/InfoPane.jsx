import { TrackerContext } from "../context/TrackerProvider";
import { useContext } from "react";

const InfoPane = () => {
  const { data, isLoading } = useContext(TrackerContext);

  if (isLoading) {
    return (
      <section className="info__pane w-[80%] mx-auto flex items-center justify-center gap-4 bg-white rounded-lg absolute left-0 right-0 top-[50%] transform mt-5 p-4 z-40">
        <p>loading...</p>
      </section>
    );
  }

  const { ip, location: { city, timezone, region } = {}, isp } = data;

  if (!ip || !city || !timezone || !region || !isp) {
    return null;
  }

  return (
    <section className="info__pane w-[80%] lg:w-[60%] mx-auto flex flex-col md:flex-row md:justify-center md:items-center text-center md:text-left gap-4 md:gap-20 bg-white rounded-lg absolute left-0 right-0 top-[50%] md:top-[60%] transform mt-5 p-4 z-40">
      <div className="info-ip_address font-bold md:max-w-[20%] px-2">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          IP ADDRESS
        </h3>
        <p className="font-bold text-base md:text-[1.25rem]">{ip}</p>
      </div>
      <div className="info-location font-bold md:border-l-2  md:max-w-[20%] px-2">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          LOCATION
        </h3>
        <p className="font-bold text-base md:text-[1.25rem]">
          {city}, {region}
        </p>
      </div>
      <div className="info-timezone font-bold md:border-l-2 md:max-w-[20%] px-2">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          TIMEZONE
        </h3>
        <p className="font-bold text-base md:text-[1.25rem]">UTC {timezone}</p>
      </div>
      <div className="info-isp font-bold md:border-l-2  md:max-w-[20%] px-2">
        <h3 className="text-subHeading text-gray-500 tracking-widest">ISP</h3>
        <p className="font-bold text-base md:text-[1.25rem]">{isp}</p>
      </div>
    </section>
  );
};

export default InfoPane;
