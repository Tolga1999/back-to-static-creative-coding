// functie dat de fetch doet naar dato
export default (options) => {
    const { query, variables = {} } = options;
    const runtimeConfig = useRuntimeConfig();
    const key = JSON.stringify(options);
    return useFetch(`${runtimeConfig.public.endpoint}`, {
      key,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${runtimeConfig.public.authToken}`,
      },
      body: {
        query,
        variables,
      },
      transform: ({ data, errors }) => { 
        if(errors) throw new errors;
        
        return data;
       },
    });
  };