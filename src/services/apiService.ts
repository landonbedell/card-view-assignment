const marsRoverImageryCache: any = {};
const fetchMarsRoverImagery = async (page: number = 1) => {
  if (marsRoverImageryCache[page]) {
    return marsRoverImageryCache[page];
  }
  const res: any = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=DEMO_KEY`)
  const { photos } = await res.json();
  marsRoverImageryCache[page] = photos;
  console.log('photos', photos);
  return photos;
};

export default fetchMarsRoverImagery;