export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-12'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const readAndWriteToken = assertValue(
	process.env.NEXT_PUBLIC_SANITY_STUDIO_TOKEN,
	'Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_TOKEN'
  )

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const useCdn = process.env.NODE_ENV === 'production'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
