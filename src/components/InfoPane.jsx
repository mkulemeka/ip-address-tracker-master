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
    <section className="info__pane w-[80%] mx-auto flex flex-col gap-4 bg-white rounded-lg absolute left-0 right-0 top-[50%] transform mt-5 p-4 z-40">
      <div className="info-ip_address font-bold text-center">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          IP ADDRESS
        </h3>
        <p className="font-bold text-base">{ip}</p>
      </div>
      <div className="info-location font-bold text-center">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          LOCATION
        </h3>
        <p className="font-bold text-base">
          {city}, {region}
        </p>
      </div>
      <div className="info-timezone font-bold text-center">
        <h3 className="text-subHeading text-gray-500 tracking-widest">
          TIMEZONE
        </h3>
        <p className="font-bold text-base">UTC {timezone}</p>
      </div>
      <div className="info-isp font-bold text-center">
        <h3 className="text-subHeading text-gray-500 tracking-widest">ISP</h3>
        <p className="font-bold text-base">{isp}</p>
      </div>
    </section>
  );
};

export default InfoPane;
