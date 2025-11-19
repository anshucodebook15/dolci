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
  const [passportsLeft] = useState(totalPassports);

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
    <div className="p-4 rounded-xl text-center">
      {/* Time Left */}
      {!timeLeft.expired ? (
        <h1 className="text-4xl font-semibold leading-8 mb-4">
          {timeLeft.hours ?? 0}H: {timeLeft.minutes ?? 0}M:{" "}
          {timeLeft.seconds ?? 0}S
          {/* <span className="text-gray-600 font-normal text-[14px]"> remaining</span> */}
        </h1>
      ) : (
        <div className="text-red-600 font-bold text-lg">Offer Ended</div>
      )}

      {/* Passports Left */}
      <div className="mt-2 text-xl text-[#2754a7]">
        <span className="font-semibold">{passportsLeft}</span> Passports Left
      </div>
    </div>
  );
};

export default PassportCountdown;
