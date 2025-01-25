const prerender = true;
const load = ({ url }) => {
  return {
    url: url.pathname
  };
};
export {
  load,
  prerender
};
