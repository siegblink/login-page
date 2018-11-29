export const authorizeUser = username => {
  return { type: 'LOGIN', value: username };
};

export const logoutUser = () => {
  return {type: 'LOGOUT', value: 'guest'}
}