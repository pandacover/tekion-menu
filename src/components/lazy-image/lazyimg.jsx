import { lazy, Suspense } from "react";

import PropTypes from "prop-types";

import ImagePlaceholder from "./ImagePlaceholder";

const LazyImg = ({ image }) => {
  const LzyImg = lazy(() => import("./Image"));

  return (
    <Suspense fallback={<ImagePlaceholder />}>
      <LzyImg image={image} />
    </Suspense>
  );
};

LazyImg.propTypes = {
  image: PropTypes.string,
};

export default LazyImg;
