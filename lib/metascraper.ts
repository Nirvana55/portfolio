import metascrpaer from "metascraper";
import metascraperTitle from "metascraper-title";
import metascraperURL from "metascraper-url";
import metascraperImage from "metascraper-image";

const metaDataScraper = metascrpaer([
  metascraperTitle(),
  metascraperURL(),
  metascraperImage(),
]);

export const scrapeMetaData = async (url: string) => {
  if (url) {
    const res = await fetch(url);
    const html = await res.text();

    const metadata = await metaDataScraper({
      url,
      html,
      validateUrl: true,
    });
    return metadata;
  } else {
    throw new Error("EMPTY URL");
  }
};
