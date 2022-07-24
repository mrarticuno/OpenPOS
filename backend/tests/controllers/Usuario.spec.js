const request = require('supertest')
const app = require('../../app')

let token = ''

beforeAll(async () => {
  const registrarUsuario = await request(app).post('/usuario/registrar').send({
    nome: 'Usuario Teste',
    email: 'usuarioteste@3techno.com',
    senha: 'supersecretpassword',
    senhaConfirmacao: 'supersecretpassword',
  })
  token = registrarUsuario.body.token
})

afterAll(() => {})

/***********************************************************************************************************
 *                                             Usuario
 ***********************************************************************************************************
 */
xdescribe('Testes do Controller de Usuario', () => {
  test('Verifica se a tabela esta vazia', async () => {
    const response = await request(app)
      .get('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBe(0)
    expect(response.body).toEqual([])
  })

  test('Insere Usuario invalido', async () => {
    let response = await request(app)
      .post('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .send({
        email: 'maria@hotmail.com',
        cargo: 'Secretária',
        ativo: true,
      })
    expect(response.statusCode).toBe(400)
    response = await request(app)
      .post('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Maria',
        cargo: 'Secretária',
        ativo: true,
      })
    expect(response.statusCode).toBe(400)
    response = await request(app)
      .post('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Maria',
        email: 'maria@hotmail.com',
        ativo: true,
      })
    expect(response.statusCode).toBe(400)
    response = await request(app)
      .post('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Maria',
        email: 'maria@hotmail.com',
        cargo: 'Secretária',
      })
    expect(response.statusCode).toBe(400)
  })

  test('Insere Usuario', async () => {
    const response = await request(app)
      .post('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nome: 'Maria',
        email: 'maria@hotmail.com',
        cargo: 'Secretária',
        ativo: true,
      })
    expect(response.statusCode).toBe(201)
  })
  test('Insere mais 9 Usuario', async () => {
    let promises = []
    for (let i = 0; i < 9; i++) {
      promises.push(
        request(app)
          .post('/v1/usuario')
          .set('Authorization', `Bearer ${token}`)
          .send({
            nome: 'Maria',
            email: 'maria@hotmail.com',
            cargo: 'Secretária',
            ativo: true,
          })
      )
    }
    const responses = await Promise.all(promises)
    expect(responses.length).toBe(9)
  })

  test('Verifica se a tabela não esta vazia', async () => {
    const response = await request(app)
      .get('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBe(10)
    expect(response.body).toBeTruthy()
  })

  test('Verifica se o limit e offset esta funcionando', async () => {
    const response = await request(app)
      .get('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .set('limit', 2)
      .set('offset', 2)
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBe(2)
    expect(response.body).toBeTruthy()
  })

  test('Verifica se o fields esta funcionando', async () => {
    const response = await request(app)
      .get('/v1/usuario')
      .set('Authorization', `Bearer ${token}`)
      .query({
        fields: `nome, email, cargo,ativo`,
      })
    expect(response.statusCode).toBe(200)
    expect(response.body.length).toBe(10)
    expect(response.body[0]).toHaveProperty('nome')
    expect(response.body[0]).toHaveProperty('email')
    expect(response.body[0]).toHaveProperty('cargo')
    expect(response.body[0]).toHaveProperty('ativo')
    expect(response.body).toBeTruthy()
  })

  test('Atualiza o primeiro item da tabela', async () => {
    const response = await request(app)
      .put('/v1/usuario/1')
      .set('Authorization', `Bearer ${token}`)
      .send({
        cargo: 'Administrador',
      })
    expect(response.statusCode).toBe(200)
    expect(response.body.cargo).toBe('Administrador')
  })

  test('Atualiza item da tabela sem informar o ID', async () => {
    const response = await request(app)
      .put('/v1/usuario/')
      .set('Authorization', `Bearer ${token}`)
      .send({
        cargo: 'Administrador',
      })
    expect(response.statusCode).toBe(404)
  })

  test('Atualiza item da tabela informando um ID incorreto', async () => {
    const response = await request(app)
      .put('/v1/usuario/999')
      .set('Authorization', `Bearer ${token}`)
      .send({
        cargo: 'Administrador',
      })
    expect(response.statusCode).toBe(404)
  })

  test('Busca primeiro item da tabela', async () => {
    const response = await request(app)
      .get('/v1/usuario/1')
      .set('Authorization', `Bearer ${token}`)
      .send()
    expect(response.statusCode).toBe(200)
    expect(response.body.cargo).toBe('Administrador')
  })

  test('Busca primeiro item da tabela trazendo somente a descricao', async () => {
    const response = await request(app)
      .get('/v1/usuario/1')
      .query({
        fields: 'nome',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()
    expect(response.statusCode).toBe(200)
    expect(response.body).toHaveProperty('nome')
    expect(response.body).not.toHaveProperty('email')
    expect(response.body).not.toHaveProperty('cargo')
    expect(response.body).not.toHaveProperty('ativo')
    expect(response.body.nome).toBe('Maria')
  })

  test('Buscar sem informar o ID', async () => {
    const response = await request(app)
      .get('/v1/usuario/a')
      .query({
        fields: 'nome',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()
    expect(response.statusCode).toBe(400)
  })
})
