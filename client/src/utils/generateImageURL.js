import axios from "axios";

const generateImageURL = async (image) => {
  const file = new FormData();
  file.append("file", image);
  file.append("upload_preset", "graduate"); // graduate is the CLOUDINARY_PRESET

  const { data } = await axios.post(
    `https://api.cloudinary.com/v1_1/dt6k5lgow/upload`,
    file
  );
  console.log(data)
  return data;
};

export default generateImageURL;