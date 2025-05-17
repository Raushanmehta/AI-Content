import { NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq, desc } from 'drizzle-orm'

export async function GET() {
  const user = await currentUser()

  if (!user?.primaryEmailAddress?.emailAddress) {
    return NextResponse.json([], { status: 401 })
  }

  const historyList = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.id))

  return NextResponse.json(historyList)
}
