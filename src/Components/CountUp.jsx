import CountUp from "react-countup";

const CountUpComponent = ({
  start,
  end,
  enableScrollSpy,
  scrollSpyDelay,
  duration,
  scrollSpyOnce,
  className,
}) => {
  return (
    <div>
      <CountUp
        start={start}
        end={end}
        enableScrollSpy={enableScrollSpy}
        scrollSpyDelay={scrollSpyDelay}
        duration={duration}
        decimal=""
        scrollSpyOnce={scrollSpyOnce}
        className={className}
      />
    </div>
  );
};

export default CountUpComponent;
