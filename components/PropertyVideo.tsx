import { ExternalLink } from "lucide-react";
import { getYouTubeEmbedUrl, isMp4Video } from "@/lib/video";

interface PropertyVideoProps {
  title: string;
  videoUrl: string;
}

export default function PropertyVideo({ title, videoUrl }: PropertyVideoProps) {
  const youtubeEmbedUrl = getYouTubeEmbedUrl(videoUrl);

  if (youtubeEmbedUrl) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl bg-slate-950">
        <iframe
          src={youtubeEmbedUrl}
          title={`${title} video`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (isMp4Video(videoUrl)) {
    return (
      <video
        src={videoUrl}
        controls
        className="aspect-video w-full rounded-2xl bg-slate-950 object-cover"
      >
        Your browser does not support video playback.
      </video>
    );
  }

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex aspect-video items-center justify-center gap-2 rounded-2xl bg-slate-950 text-white hover:bg-slate-800"
    >
      <ExternalLink className="h-5 w-5" />
      <span>Open property video</span>
    </a>
  );
}

