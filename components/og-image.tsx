interface OpenGraphImageProps {
  title?: string;
  description?: string;
  icon?: string;
  url?: string;
}

export const OpenGraphImage: React.FC<OpenGraphImageProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          height: "100%",
          width: "100%",
          backgroundImage:
            "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          position: "absolute",
          bottom: 100,
          left: 60,
          width: "80%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {icon}
          <span
            style={{
              fontSize: "4.75rem",
              lineHeight: 1,
              fontWeight: 600,
            }}
          >
            {title}
          </span>
        </div>
        {description && (
          <span
            style={{
              fontSize: "2.5rem",
              lineHeight: "3rem",
              marginTop: "1rem",
            }}
          >
            {description}
          </span>
        )}
      </span>
    </div>
  );
};
