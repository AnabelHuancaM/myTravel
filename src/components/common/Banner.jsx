import React from "react";

function Banner({
  bgImage = "/hero.webp",
  overlayGradient = "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%)",
  height,
  className = "",
  containerClassName = "",
  style = {},
  children
}) {
  const bannerStyle = {
    background: bgImage
      ? `${overlayGradient ? overlayGradient + ", " : ""}url(${bgImage})`
      : undefined,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    ...(height ? { height } : {}),
    ...style
  };

  return (
    <section 
      className={`section hero-img overlay d-flex ${className}`}
      style={bannerStyle}
    >
      <div className={`container ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export default Banner;
