import axios from "axios";
import { useEffect, useState } from "react";

type CountdownProps = {
  endTime: number; // timestamp in ms
  totalPassports: number;
};

type TimeLeft = {
  hours?: number;
  minutes?: number;
  seconds?: number;
  expired?: boolean;
};

const PassportCountdown = ({ endTime, totalPassports }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [counts, setCounts] = useState<any>(0);

  const [_passportsLeft] = useState(totalPassports);
  const [_loading, setLoading] = useState(false);

  const GetPassportCountandTimer = async () => {
    setLoading(true);
    await axios
      .get("https://dolci.theasylum.in/wp-json/trip/v1/status")
      .then((res) => {
        console.log("res", res.data);
        setCounts(res.data.remaining_count);
        setLoading(false);
      })
      .catch((_err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    GetPassportCountandTimer();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className=" rounded-xl text-center  ">
      {/* Time Left */}
      {!timeLeft.expired ? (
        <h1 className="text-3xl font-semibold leading-6 mb-6">
          {timeLeft.hours ?? 0}H: {timeLeft.minutes ?? 0}M:{" "}
          {timeLeft.seconds ?? 0}S
          {/* <span className="text-gray-600 font-normal text-[14px]"> remaining</span> */}
        </h1>
      ) : (
        <div className="text-red-600 font-bold text-lg">Offer Ended</div>
      )}

      {/* Passports Left */}
      <div className="mt-2 text-xl text-[#2754a7]">
        <h2 className="text-[18px] leading-0">
          Only {counts} Passports Left Hurry Up!
        </h2>
      </div>
    </div>
  );
};

export default PassportCountdown;
