"use client";

import { useEffect, useRef } from "react";

interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

export const TikTokEmbed = ({ videoId, username }: TikTokEmbedProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 既存のスクリプトを削除
    const existingScript = document.querySelector(
      'script[src="https://www.tiktok.com/embed.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // 新しいスクリプトを追加
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // クリーンアップ時にスクリプトを削除
      script.remove();
    };
  }, [videoId]); // videoIdが変更されたときにスクリプトを再読み込み

  return (
    <div
      ref={containerRef}
      className="relative aspect-[9/16] w-full max-w-[325px] rounded-lg overflow-hidden"
    >
      <blockquote
        className="tiktok-embed"
        cite={`https://www.tiktok.com/@${username}/video/${videoId}`}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "325px" }}
      >
        <section></section>
      </blockquote>
    </div>
  );
};
