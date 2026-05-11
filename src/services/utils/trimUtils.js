export const isMultipartOrBinary = (config = {}) => {
  const contentType = config.headers?.['Content-Type'] || config.headers?.['content-type'];

  return (
    config.data instanceof FormData ||
    config.data instanceof Blob ||
    config.data instanceof ArrayBuffer ||
    contentType?.includes('multipart/form-data') ||
    contentType?.includes('application/octet-stream')
  );
};

export const trimAllStringsDeep = (value) => {
  if (typeof value === 'string') {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value.map(trimAllStringsDeep);
  }

  if (value && typeof value === 'object' && !(value instanceof File) && !(value instanceof Blob)) {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, trimAllStringsDeep(nestedValue)]),
    );
  }

  return value;
};
