import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  db: {
    type: 'postgres',
    uri: `postgresql://${process.env.POSTGRES_USERNAME}:${process.env.POSTGRES_PASSWORD}@localhost:5432/${process.env.POSTGRES_DB}`,
  },
  auth: {
    access: process.env.JWT_SECRET,
  },
  redis: {
    uri: process.env.REDIS_URI,
  },
  rabbitmq: {
    uri: process.env.RABBITMQ_URI,
  },
  stripe: {
    secretKey: process.env.STRIPE_SECRET_KEY,
  },
  aws: {
    s3: {
      region: process.env.S3_UPLOAD_REGION,
      bucketName: process.env.S3_UPLOAD_BUCKET,
      accessKeyId: process.env.S3_UPLOAD_KEY_ID,
      secretAccessKey: process.env.S3_UPLOAD_SECRET,
    },
    cloudfront: {
      domain: process.env.CLOUDFRONT_DOMAIN,
    },
  },
  queues: {
    auth: process.env.RABBITMQ_AUTH_QUEUE,
    chat: process.env.RABBITMQ_CHAT_QUEUE,
    presence: process.env.RABBITMQ_PRESENCE_QUEUE,
    itineraries: process.env.RABBITMQ_ITINERARIES_QUEUE,
    reservations: process.env.RABBITMQ_RESERVATIONS_QUEUE,
    sales: process.env.RABBITMQ_SALES_QUEUE,
  },
  sendgrid: {
    apiKey: process.env.SENDGRID_API_KEY,
    from: process.env.SENDGRID_FROM,
    templates: {
      reservationReminder: process.env.SENDGRID_TEMPLATE_RESERVATION_REMINDER,
    },
  },
}));
