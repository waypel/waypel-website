import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SharedContent = {
  shareId: string;
  id: string;
  contentType: "VIDEO" | "GAME";
  title: string;
  description: string;
  video: string;
  avatar: string;
  duration: number;
  coin: number;
  creator: {
    username: string;
    name: string;
    avatar: string;
  };
};

type PageProps = {
  params: Promise<{ shareId: string }>;
};

const apiBaseUrl = (process.env.WAYPEL_API_URL ?? "https://waypelserverside.com").replace(/\/$/, "");

async function getSharedContent(shareId: string): Promise<SharedContent | null> {
  const response = await fetch(
    `${apiBaseUrl}/game/share/${encodeURIComponent(shareId)}`,
    { cache: "no-store" },
  );

  if (!response.ok) return null;
  return response.json();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { shareId } = await params;
  const content = await getSharedContent(shareId);

  if (!content) {
    return { title: "Content not found | Waypel" };
  }

  return {
    title: `${content.title} | Waypel`,
    description: content.description || `View this ${content.contentType === "VIDEO" ? "video" : "quiz"} on Waypel.`,
    openGraph: {
      title: content.title,
      description: content.description || `View this content on Waypel.`,
      images: content.avatar ? [{ url: content.avatar }] : [],
    },
  };
}

export default async function SharePage({ params }: PageProps) {
  const { shareId } = await params;
  const content = await getSharedContent(shareId);

  if (!content) notFound();

  const isVideo = content.contentType === "VIDEO";

  return (
    <main className="min-h-screen bg-mesh-glow px-4 py-16 sm:px-6">
      <article className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border/60 bg-background/85 shadow-xl backdrop-blur">
        {isVideo && content.video ? (
          <video className="aspect-video w-full bg-black" controls poster={content.avatar || undefined}>
            <source src={content.video} />
            Your browser does not support video playback.
          </video>
        ) : content.avatar ? (
          <img className="aspect-video w-full object-cover" src={content.avatar} alt="" />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-primary/10 text-6xl">🧠</div>
        )}

        <div className="p-6 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {isVideo ? "Waypel video" : "Waypel quiz"}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{content.title}</h1>
          {content.description && <p className="mt-4 text-lg text-muted-foreground">{content.description}</p>}
          <p className="mt-5 text-sm text-muted-foreground">By {content.creator.name}</p>

          {!isVideo && (
            <p className="mt-6 rounded-xl bg-muted p-4 text-sm text-muted-foreground">
              Open Waypel to play this quiz and earn rewards.
            </p>
          )}
          <a
            className="mt-6 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            href={`waypel://content/${content.shareId}`}
          >
            Open in Waypel app
          </a>
        </div>
      </article>
    </main>
  );
}
