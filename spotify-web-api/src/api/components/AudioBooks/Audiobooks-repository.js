/*const express = require('express');
const db = require('../../../models');

async function getAudiobookById(id) {
  try {
    const response = await express.get(`${SPOTIFY_API_BASE_URL}/audiobooks/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch audiobook with ID ${id}: ${error.message}`);
  }
}

async function getAudiobooksByIds(ids = []) {
  try {
    const response = await express.get(`${SPOTIFY_API_BASE_URL}/audiobooks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        ids: ids.join(','),
      },
    });

    return response.data.audiobooks;
  } catch (error) {
    throw new Error(`Failed to fetch audiobooks: ${error.message}`);
  }
}

async function getUserSavedAudiobooks() {
  try {
    const response = await express.get(`${SPOTIFY_API_BASE_URL}/me/audiobooks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error(`Failed to fetch user saved audiobooks: ${error.message}`);
  }
}

module.exports = {
  getAudiobookById,
  getAudiobooksByIds,
  getUserSavedAudiobooks,
};*/

/*const db = require('../../../models/Audiobooks-schema'); // Pastikan ini mengarah ke index.js di folder models
const AudiobooksModel = db.Audiobooks;     // Harus cocok dengan nama model yang diekspor

async function GetAllAudiobooks(/*offset = 0, limit = 10) {
  return AudiobooksModel.find().skip(offset).limit(limit);
  const audiobooks = await AudiobooksModel.find();
  return audiobooks;
}

async function getAudiobooksById(id) {
  return AudiobooksModel.findOne({id});
}

module.exports = {
  GetAllAudiobooks,
  getAudiobooksById,
};*/

const AudiobooksModel = require('../../../models/Audiobooks-schema'); // ✅ Ini langsung model-nya

async function GetAllAudiobooks() {
  const audiobooks = await AudiobooksModel.find();
  return audiobooks;
}

async function getAudiobooksById(id) {
  return AudiobooksModel.findOne({ id });
}

const createAudiobooks = async (data) => {
  const newAudiobook = new AudiobooksModel(data); // ✅ pakai AudiobooksModel, bukan Audiobooks
  return await newAudiobook.save();
};


const deleteAudiobooksById = async (id) => {
  return await AudiobooksModel.findByIdAndDelete(id); // ✅ benar
};


module.exports = {
  GetAllAudiobooks,
  getAudiobooksById,
  createAudiobooks,
  deleteAudiobooksById,
};
