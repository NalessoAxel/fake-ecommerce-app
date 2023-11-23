import { type SchemaTypeDefinition } from "sanity"
import { account } from "./schemas/account-schema"
import { verificationToken } from "./schemas/email-verification-schema"
import { product } from "./schemas/product-schema"
import { user } from "./schemas/user-schema"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, user, account, verificationToken],
}
