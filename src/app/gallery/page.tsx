import { fetchImages } from "@/lib/fetchImages";

export default async function GalleryPage() {
   const images = await fetchImages(); // Server-side fetch
   console.log(images);
   return (
      <div>
         <h1>Photo Gallery</h1>
         <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
            {images.map((img, index) => (
               <div
                  key={index}
                  style={{ width: "200px" }}
               >
                  <img
                     src={img.src}
                     alt={img.alt}
                     style={{ width: "100%", height: "auto" }}
                  />
                  {img.alt && <p>{img.alt}</p>}
               </div>
            ))}
         </div>
      </div>
   );
}
