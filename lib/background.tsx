export const VideoBg = () => (
  <div className="relative flex flex-col gap-4 overflow-hidden">
    <video
      src="/bg/bg.mp4"
      autoPlay
      muted
      loop
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    />
    {/* content */}
  </div>
);
