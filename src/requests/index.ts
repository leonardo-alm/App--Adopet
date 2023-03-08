export const getPets = async (type = '', query = '') => {
  try {
    const searchParams = new URLSearchParams({ type, query });
    const requestUrl = `/animals?${searchParams.toString()}`;
    const response = await fetch(requestUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.error(error);
  }
};

export const getPetDetails = async (id: string) => {
  try {
    const requestUrl = `/animals/${id}`;
    const response = await fetch(requestUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.error(error);
  }
};

export const getPetTypes = async () => {
  try {
    const requestUrl = `/types`;
    const response = await fetch(requestUrl, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  }
  catch (error) {
    console.error(error)
  }
};
