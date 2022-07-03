import React, { Suspense } from "react";
//Loader
import DetailsLoader from "../components/loader/detailsloader";
//Hook
const Detail = React.lazy(() => import("../hooks/detail"));

export default function Details() {
  return (
    <>
      <Suspense fallback={<DetailsLoader />}>
        <Detail />
      </Suspense>
    </>
  );
}
