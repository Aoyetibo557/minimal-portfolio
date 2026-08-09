import { createMocks } from 'node-mocks-http'
import handler from './hello'

describe('/api/hello', () => {
  it('returns 200 with the expected payload', () => {
    const { req, res } = createMocks({ method: 'GET' })
    handler(req, res)

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual({ name: 'John Doe' })
  })
})
