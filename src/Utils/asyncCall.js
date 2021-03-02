const asyncCall = (data) => {
  return new Promise((res, rej) => {
    setTimeout(() => res(data), 500);
  });
};

export default asyncCall;
