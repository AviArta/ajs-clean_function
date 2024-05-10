import shouHealth from '../basic';

test('check shouHealth', () => {
    const result = shouHealth({name: 'Маг', health: 90});
    expect(result).toBe('healthy');
})

const dataList = [
    ['Маг', 90, 'healthy'],
    ['Tor', 20, 'wounded'],
    ['Capitan', 10, 'critical']
]

const handler = test.each(dataList);

handler('check shouHealth from caracter $s with helth $i', (_, health, expected) => {
    const result = shouHealth({"name": _, "health": health});
    expect(result).toBe(expected);
})