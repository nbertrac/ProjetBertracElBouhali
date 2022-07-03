import ContentLoader from "react-content-loader";

const DetailsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1476}
    height={800}
    viewBox="0 0 476 200"
    backgroundColor="#ededed"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="5" rx="3" ry="3" width="88" height="6" />
    <rect x="7" y="32" rx="0" ry="0" width="400" height="406" />
    <rect x="6" y="16" rx="3" ry="3" width="282" height="6" />
  </ContentLoader>
);

export default DetailsLoader;
