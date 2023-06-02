import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/quotes?category=dreams', {
          headers: {
            'X-Api-Key': 'aDHnlIAfcVlR6A4XKlfcJw==XH3tzifPVIXYydwo',
          },
        });

        const { quote } = response.data[0];
        setQuote(quote);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loaders">
        Loading
        <i className="fa fa-spinner" aria-hidden="true" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h2 className="Quote-head">Quote:</h2>
      <p className="Quote-body">{quote}</p>

    </div>
  );
}
export default Quote;
