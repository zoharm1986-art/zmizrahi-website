import { useState, useEffect } from 'react';
import { fetchBOIInterest, fetchBOIExchangeRates, getPrimeRate } from '../services/boiApi';

export function useBOIData() {
  const [data, setData] = useState({
    boiRate: 4.00, // fallback
    primeRate: 5.50, // fallback
    usdIls: 3.50, // fallback
    usdChange: 0,
    inflation: 2.0, // fallback
    nextDecisionDate: '',
    lastUpdate: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function loadData() {
      try {
        const [interestData, exchangeData] = await Promise.all([
          fetchBOIInterest(),
          fetchBOIExchangeRates(),
        ]);

        const usdRate = exchangeData.exchangeRates?.find(r => r.key === 'USD');

        setData({
          boiRate: interestData.currentInterest ?? 4.00,
          primeRate: getPrimeRate(interestData.currentInterest ?? 4.00),
          usdIls: usdRate?.currentExchangeRate ?? 3.50,
          usdChange: usdRate?.currentChange ?? 0,
          nextDecisionDate: interestData.nextInterestDate || '',
          lastUpdate: usdRate?.lastUpdate || new Date().toISOString(),
          inflation: 2.0, // בינתיים fallback
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error('Failed to fetch BOI data:', err);
        setData(prev => ({ ...prev, loading: false, error: 'שגיאה בטעינת נתונים' }));
      }
    }

    loadData();
    // רענון כל 30 דקות
    const interval = setInterval(loadData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return data;
}
