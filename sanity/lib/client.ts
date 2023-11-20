import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skjDoXrWXGzL7UjBtg3yek5swevb95qwMKBHVZEMwnN5mRsHxxFt6rO1GUh9wYQfv9s1eKaMXuE9kGwIuXvLg9Fb2uu69BqgwfF7j85X55RTTVegr0lx9neyT7D1aIpezRL2YcEMvxeTwQwUsextXDhJz6bYG1lmAnOJj5QJkB5NjugMZ0mI"
})
 