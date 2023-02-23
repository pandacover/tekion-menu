import { lazy, Suspense } from "react";
import Loader from "../loader/loader";
import PropTypes from "prop-types";
  
const LazyImg = ({ image }) => {
const LzyImg = lazy(() => import("./image"));
  return (
    <Suspense fallback={<Loader />}>
        <LzyImg image={image} />
    </Suspense>
  );
};

LazyImg.propTypes = {
    image: PropTypes.string
}

export default LazyImg;
