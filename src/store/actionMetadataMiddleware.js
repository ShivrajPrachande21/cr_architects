let currentActionMetadata = null;

export const getCurrentActionMetadata = () => currentActionMetadata;

export const actionMetadataMiddleware = () => (next) => (action) => {
  if (action?.type && typeof action.type === 'string') {
    currentActionMetadata = {
      type: action.type,
      payload: action.payload,
    };

    setTimeout(() => {
      if (currentActionMetadata?.type === action.type) {
        currentActionMetadata = null;
      }
    }, 200);
  }

  return next(action);
};
