import { useState, useEffect } from 'react';

function useGeolocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async position => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
          const data = await response.json();

          if (data.address && data.address.city) {
            setLocation(data.address.city);
          } else if (data.address && data.address.town) {
            setLocation(data.address.town);
          } else {
            setError('City name not found');
          }
        } catch (error) {
          setError('Error fetching city name');
        } finally {
          setLoading(false);
        }
      },
      error => {
        setError('Error getting geolocation');
        setLoading(false);
      }
    );
  }, []);

  return { location, loading, error };
}

export default useGeolocation;
