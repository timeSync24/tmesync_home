/* eslint-disable @typescript-eslint/no-explicit-any */
export const uploadImage = async (file: any): Promise<any> => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "micloud");
  data.append("cloud_name", "dp5qen8fu");

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/dp5qen8fu/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  if (!response.ok) {
    throw new Error("Image upload failed");
  }

  const res = await response.json();
  return res.secure_url; // return the secure URL of the uploaded image
};

export default uploadImage;
