import ContentLoader from "react-content-loader";

const DetailsLoader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={200}
    viewBox="0 0 476 200"
    backgroundColor="#ededed"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="5" rx="3" ry="3" width="88" height="6" />
    <rect x="7" y="32" rx="0" ry="0" width="104" height="106" />
    <rect x="119" y="33" rx="0" ry="0" width="80" height="50" />
    <rect x="119" y="89" rx="0" ry="0" width="80" height="50" />
    <rect x="208" y="33" rx="0" ry="0" width="80" height="50" />
    <rect x="208" y="89" rx="0" ry="0" width="80" height="50" />
    <rect x="6" y="16" rx="3" ry="3" width="282" height="6" />
  </ContentLoader>
);

export default DetailsLoader;
