import { Helmet, HelmetProvider } from "react-helmet-async";

const getMenuTitle = (rawTitle: string) => {
  const beforePipe = rawTitle.split("|")[0]?.trim() || "";
  const cleaned = beforePipe
    .replace(/^React\.js\s*/i, "")
    .replace(/\s+for\s+TailAdmin.*$/i, "")
    .replace(/\s+TailAdmin.*$/i, "")
    .trim();

  return cleaned || "Dashboard";
};

const PageMeta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const menuTitle = getMenuTitle(title);
  const documentTitle = `Mamvir Kasir - ${menuTitle}`;

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
