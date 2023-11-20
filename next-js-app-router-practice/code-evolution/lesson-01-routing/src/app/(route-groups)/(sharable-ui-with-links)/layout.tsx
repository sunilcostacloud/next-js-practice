import React from "react";

const CommonSharableUiWithLinks = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div>Common Sharable Ui With Links</div>
    </>
  );
};

export default CommonSharableUiWithLinks;
