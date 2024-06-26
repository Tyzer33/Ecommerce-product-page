// eslint-disable-next-line import/prefer-default-export
export function cycleArray<T extends unknown[]>(
  array: T,
  currentIndex: number,
  direction: 'prev' | 'next',
): T[number] {
  const newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
  if (newIndex < 0) return array[array.length - 1]
  if (newIndex >= array.length) return array[0]
  return array[newIndex]
}
