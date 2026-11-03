/** Decorative weave, built with CSS so it adds no image download. */
export default function WovenBackground() {
  return (
    <div className="woven-background" aria-hidden="true">
      <span className="woven-band woven-band-first" />
      <span className="woven-band woven-band-second" />
    </div>
  );
}
