import ContentLoader from "react-content-loader";

const HomeLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#ededed"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="31" y="54" rx="3" ry="3" width="100" height="6" />
    <circle cx="81" cy="25" r="20" />
    <rect x="30" y="65" rx="3" ry="3" width="100" height="6" />
    <rect x="31" y="76" rx="3" ry="3" width="100" height="6" />
    <rect x="157" y="54" rx="3" ry="3" width="100" height="6" />
    <circle cx="207" cy="25" r="20" />
    <rect x="156" y="65" rx="3" ry="3" width="100" height="6" />
    <rect x="157" y="76" rx="3" ry="3" width="100" height="6" />
    <rect x="287" y="53" rx="3" ry="3" width="100" height="6" />
    <circle cx="336" cy="26" r="20" />
    <rect x="286" y="64" rx="3" ry="3" width="100" height="6" />
    <rect x="287" y="75" rx="3" ry="3" width="100" height="6" />
  </ContentLoader>
);

export default HomeLoader;
