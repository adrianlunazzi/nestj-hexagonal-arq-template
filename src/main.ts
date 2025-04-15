import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function main() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('Main');
  app.setGlobalPrefix(process.env.BASE_PATH || 'template');
  app.enableCors({
    origin: '*',
    allowdHeaders: '*',
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });

  const config = new DocumentBuilder()
    .setTitle('App Carrer Plan')
    .setDescription('App para la gestion de planes de carrera')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const options = {
    customCss: `
    .topbar{
    background-color:#037360 !important;
    height: 50px;
    }
    .swagger-ui .topbar .link {
    display:none !important;
    }
    `,
  };
  SwaggerModule.setup(process.env.SWAGGER_URI || '/template/swagger', app, document, options);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(process.env.PORT || 4000);
}

main();
