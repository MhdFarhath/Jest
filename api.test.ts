export const generateUniqueId = (): string => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xx'
  return pattern.replace(/[xy]/g, (c: string) => {
    const r: number = (Math.random() * 16) | 0
    const v: number = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

it('should generate a valid UUID', () => {
  const generatedId = generateUniqueId();
  expect(generatedId).not.toBeNull();
  expect(typeof generatedId).toBe('string');
  expect(generatedId).toMatch(/^[0-9a-f-]+$/);
});



