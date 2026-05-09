export const getPublicIdFromUrl = (url: string) => {
  try {
    const parts = url.split("/");

    // find index of "upload"
    const uploadIndex = parts.findIndex(p => p === "upload");

    // everything after version is public_id
    const publicIdParts = parts.slice(uploadIndex + 2);

    return publicIdParts.join("/"); // books/jlpmfdjcj4she4tiyrrk
  } catch {
    throw new Error("INVALID_FILE_URL");
  }
};