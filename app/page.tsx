import FacebookTitleGenerator from "./facebook/page";
import YoutubeTitleGenerator from "./youtube/page";

export default function Home() {
  return (
    <div className="flex">
      <YoutubeTitleGenerator />
      <FacebookTitleGenerator />
    </div>
  );
}
