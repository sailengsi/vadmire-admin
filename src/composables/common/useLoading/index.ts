/**
 * Can configure the loading property of the BaseSpin component or the Button component to implement the Loading effect
 * @returns
 */
export const useLoading = (defaultValue = false) => {
  const isLoading = ref(defaultValue)

  const setLoading = async (value: boolean) => {
    isLoading.value = value
  }

  // eslint-disable-next-line no-unused-vars
  const withLoading = async <T>(callback: (...args: unknown[]) => Promise<T>) => {
    if (isLoading.value) return

    isLoading.value = true

    const response = await callback()

    isLoading.value = false

    return response
  }

  return {
    isLoading: readonly(isLoading),

    setLoading,
    withLoading,
  }
}
