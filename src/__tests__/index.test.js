const request = require('supertest');
const express = require('express');
const app = require('../index.js');

describe('Pruebas del servidor Express', () => {
  
  describe('GET /health', () => {
    it('debería responder con estado 200 y mensaje OK', async () => {
      const response = await request(app)
        .get('/health')
        .expect('Content-Type', /json/)
        .expect(200);
      
      expect(response.body).toEqual({ status: 'OK' });
    });
  });

  describe('Manejo de errores', () => {
    it('debería manejar rutas no existentes con 404', async () => {
      const response = await request(app)
        .get('/ruta-que-no-existe')
        .expect(404);
    });
  });

  describe('Middleware CORS y Helmet', () => {
    it('debería incluir headers de seguridad', async () => {
      const response = await request(app)
        .get('/health');
      
      expect(response.headers).toHaveProperty('x-powered-by');
      expect(response.headers).toHaveProperty('access-control-allow-origin');
    });
  });
}); 