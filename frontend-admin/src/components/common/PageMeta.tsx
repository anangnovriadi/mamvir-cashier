import { Helmet, HelmetProvider } from "react-helmet-async";

const PageMeta = ({
  title: _title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const documentTitle = "Mamvir Kasir";

  return (
    <Helmet>
      <title>{documentTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export const AppWrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
