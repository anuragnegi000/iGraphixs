"use client";
import { MaskContainer } from "../ui/svg-mask-effect"

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-4xl font-bold text-center text-slate-800">
            iGraphixs stands as a pioneering force in the realms of marketing, graphic effects (gfx), and visual effects (vfx). With a commitment to excellence and innovation.





          </p>
        }
        className="h-[40rem] border rounded-md"
      >
        iGraphixs stands as a pioneering force in the realms <span className="text-red-500">iGraphixs</span>  graphic effects (gfx), and visual effects (vfx).
        With a commitment to excellence <span className="text-red-500">iGraphixs</span>.
      </MaskContainer>
    </div>
  );
}
