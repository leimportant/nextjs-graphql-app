export interface Country {
  id: string;
  name: string;
  code: string;
}

export interface GetCountriesData {
  getCountries: Country[];
}

export interface CreateCountriesData {
  createCountries: Country[];
}

export interface CreateCountryVars {
  id: string;
  name: string;
  code: string;
}

export interface UpdateCountryData {
  updateCountry: Country;
}

export interface UpdateCountryVars {
  id: string;
  name: string;
  code: string;
}

export interface DeleteCountryData {
  deleteCountry: Country;
}

export interface DeleteCountryVars {
  id: string;
}
