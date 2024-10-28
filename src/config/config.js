module.exports = {
  port: process.env.PORT || 3003,
  postres_url:
    process.env.POSTGRES_URL || "postgresql://admin:admin@localhost:5432/hello",
};
