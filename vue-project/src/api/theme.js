export const toggleTheme = () => {
  const isDark = document.documentElement.classList.contains('dark')

  if (isDark) {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }

  return !isDark
}

export const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark')
    return true
  } else {
    document.documentElement.classList.remove('dark')
    return false
  }
}
