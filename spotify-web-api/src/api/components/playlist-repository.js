const fetch = require('node-fetch'); // Node 18+ sudah built-in

async function fetchUserPlaylists(token) {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      Authorization: token,
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Spotify API error: ${error.error.message}`);
  }

  const data = await response.json();
  return data.items.map(p => ({
    id: p.id,
    name: p.name,
    description: p.description,
    href: p.href,
    uri: p.uri,
    tracks: p.tracks?.total || 0,
    images: p.images,
    owner: {
      id: p.owner.id,
      display_name: p.owner.display_name,
    }
  }));
}

module.exports = {
  fetchUserPlaylists,
};
