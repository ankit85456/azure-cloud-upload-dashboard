const containerClient = require("../services/azureServices");


// Upload File
const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const blobName = Date.now() + "-" + file.originalname;

    const blockBlobClient =
      containerClient.getBlockBlobClient(blobName);

    await blockBlobClient.uploadData(file.buffer);

    const fileUrl = blockBlobClient.url;

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      fileUrl,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Upload failed",
    });
  }
};



// Get All Files
const getFiles = async (req, res) => {
  try {

    const files = [];

    for await (const blob of containerClient.listBlobsFlat()) {

      files.push({
        name: blob.name,
        url: `${containerClient.url}/${blob.name}`,
      });
    }

    res.status(200).json(files);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch files",
    });
  }
};



// Delete File
const deleteFile = async (req, res) => {
  try {

    const fileName = req.params.name;

    const blockBlobClient =
      containerClient.getBlockBlobClient(fileName);

    await blockBlobClient.delete();

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Delete failed",
    });
  }
};


module.exports = {
  uploadFile,
  getFiles,
  deleteFile,
};