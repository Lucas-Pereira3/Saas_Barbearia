import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-unused-vars
  var cachadPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachadPrisma) {
    global.cachadPrisma = new PrismaClient()
  }
  prisma = global.cachadPrisma
}

export const db = prisma
