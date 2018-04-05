module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB_URI || 'mongodb://localhost:27017/mevn-stack',
  SECRET_TOKEN: 'miclaveparamevn',
  GOOGLE_CLIENT_ID: '386200234053-2agcjupnifhntml508a1ivfnetvm8o9i.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: 'UKcV2nPw4UbCFmKLQwSjTv2a',
  GOOGLE_REDIRECT_URL: 'http://localhost:8081/oauth/callback'
}