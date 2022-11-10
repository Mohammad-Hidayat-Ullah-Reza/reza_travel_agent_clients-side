export const setAuthToken = (user, navigate, from) => {
  const currentUser = {
    email: user.email,
  };

  fetch(`https://b6a11-service-review-server-side-omega.vercel.app/jwt`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("token", data.token);
      navigate(from, { replace: true });
    });
};
