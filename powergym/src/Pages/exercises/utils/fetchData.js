export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ccd7d188d9mshc622a77f750afe0p16c040jsnb2ddc696cdd6',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '224c1eabe2msh9fbbd53ffe196fdp182c35jsn5021e50266f2',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};

/*
export const BMIOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '81b70a5164mshbce26d8bf0172c5p10b124jsnea4be5203c9e',
		'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
	}
};
*/