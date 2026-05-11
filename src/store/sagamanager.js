export default function createSagaManager() {
  let sagas = {};
  let emitSagaAdditionListener = null;

  return {
    addSaga: (name, saga) => {
      if (!name || sagas[name]) {
        return;
      }

      sagas = { ...sagas, [name]: saga };

      if (emitSagaAdditionListener) {
        emitSagaAdditionListener(saga);
      }
    },

    setAddSagaListener: (listener) => {
      emitSagaAdditionListener = listener;
    },
  };
}
