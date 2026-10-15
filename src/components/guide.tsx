import { GuideBot } from "./guide-bot";
import { getGuideData } from "@/lib/guide-data";

/** The floating "Ask BTechi" bubble on every page. Never breaks the page if the data fails to load. */
export async function Guide() {
  try {
    return <GuideBot data={await getGuideData()} />;
  } catch (err) {
    console.error("Guide: could not build site map", err);
    return null;
  }
}
