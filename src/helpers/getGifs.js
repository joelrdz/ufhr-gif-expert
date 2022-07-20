const apiKey = 'a87UP8mV8cYgYGmqfpKyC8xT1KZXTFG3';

export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ category }&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map(gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }));

  console.log(gifs);
  return gifs;
};