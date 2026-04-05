// Bank of Israel Live Data Service
const BOI_API_BASE = 'https://www.boi.org.il/he/NewsAndPublications/PressReleases/Pages/PressReleases.aspx?ModelType=JSONP&func=GetApiData&query=';

// We use a proxy to bypass CORS issues with the BOI API
const PROXY_URL = 'https://api.allorigins.win/raw?url=';

export async function fetchBOIInterest() {
  try {
    // The BOI API endpoint for interest rate
    const endpoint = encodeURIComponent('https://www.boi.org.il/PublicApi/GetInterest');
    const res = await fetch(`${PROXY_URL}${endpoint}`);
    return await res.json();
  } catch (error) {
    console.error('Error fetching BOI interest rate:', error);
    return { currentInterest: 4.00, nextInterestDate: new Date().toISOString(), lastPublishedDate: new Date().toISOString() };
  }
}

export async function fetchBOIExchangeRates() {
  try {
    const endpoint = encodeURIComponent('https://www.boi.org.il/PublicApi/GetExchangeRates');
    const res = await fetch(`${PROXY_URL}${endpoint}`);
    return await res.json();
  } catch (error) {
    console.error('Error fetching BOI exchange rates:', error);
    return { exchangeRates: [] };
  }
}

export function getPrimeRate(boiRate) {
  return boiRate + 1.5; // ריבית פריים = ריבית בנק ישראל + 1.5%
}

export function formatNextDecisionDate(isoDate) {
  if (!isoDate) return '...';
  const date = new Date(isoDate);
  return date.toLocaleDateString('he-IL', { day: 'numeric', month: 'long', year: 'numeric' });
}
