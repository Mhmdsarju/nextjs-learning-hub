import Image from "next/image";

export default function ExternalImage() {
  return (
    <div>
      <h1>External Image Optimization</h1>

      <Image
  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  alt="Beautiful landscape"
  width={600}
  height={400}
  placeholder="blur"
  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAg aGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgMTAgNyIgZmlsbD0iI2RkZGRkZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iNyIgZmlsbD0iI2RkZGRkZCIvPjwvc3ZnPg=="
/>
    </div>
  );
}