import { sanityClient } from "@sanity/client";
import { imageUrlBuilder } from "@sanity/image-url";

const client = sanityClient({
    projectId: "d1q3lhhq",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);


// Run this to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000
export default client;
