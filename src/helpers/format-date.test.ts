import dayjs from 'dayjs'
import formatDate from './format-date'
import { formatDays, formatHours, formatMinutes } from './format-date'

describe('Helpers: formatDate', () => {
  describe('formatDays', () => {
    it.each([
      [1, '1 день назад'],
      [2, '2 дня назад'],
      [4, '4 дня назад'],
      [5, '5 дней назад'],
      [11, '11 дней назад'],
      [14, '14 дней назад'],
      [21, '21 день назад'],
      [23, '23 дня назад'],
      [25, '25 дней назад'],
      [101, '101 день назад'],
    ])('should format %i correctly', (input, expected) => {
      expect(formatDays(input)).toBe(expected)
    })
  })

  describe('formatHours', () => {
    it.each([
      [1, '1 час назад'],
      [2, '2 часа назад'],
      [5, '5 часов назад'],
      [11, '11 часов назад'],
      [21, '21 час назад'],
      [23, '23 часа назад'],
    ])('should format %i correctly', (input, expected) => {
      expect(formatHours(input)).toBe(expected)
    })
  })

  describe('formatMinutes', () => {
    it.each([
      [1, '1 минуту назад'],
      [2, '2 минуты назад'],
      [5, '5 минут назад'],
      [11, '11 минут назад'],
      [21, '21 минуту назад'],
      [23, '23 минуты назад'],
      [25, '25 минут назад'],
    ])('should format %i correctly', (input, expected) => {
      expect(formatMinutes(input)).toBe(expected)
    })
  })

  describe('formatDate', () => {
    const now = dayjs()

    it('returns days if date more than 24h ago', () => {
      const date = now.subtract(5, 'day').toISOString()
      expect(formatDate(date)).toBe('5 дней назад')
    })

    it('returns hours if date < 24h ago', () => {
      const date = now.subtract(3, 'hour').toISOString()
      expect(formatDate(date)).toBe('3 часа назад')
    })

    it('returns minutes if date < 1h ago', () => {
      const date = now.subtract(12, 'minute').toISOString()
      expect(formatDate(date)).toBe('12 минут назад')
    })

    it('returns 1 минуту назад if 1 minute ago', () => {
      const date = now.subtract(1, 'minute').toISOString()
      expect(formatDate(date)).toBe('1 минуту назад')
    })
  })
})
