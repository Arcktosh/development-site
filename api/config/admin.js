module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9ced9f63a666ab1c8cd1b60335a5c4a9'),
  },
});
