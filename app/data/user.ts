import { auth } from '@/auth'
import { db } from '@/lib/db'
import { User } from '@/type'

export const getCurrentUser = async (): Promise<User> => {
  try {
    const session = await auth()
    if (!session) throw new Error('현재 로그인되어있지 않습니다.')
    const email = session.user?.email
    if (!email) throw new Error('존재하지 않느 이메일 입니다.')

    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
      },
    })

    if (!user) throw new Error('유저 정보가 존재하지 않습니다.')

    return user
  } catch (error) {
    throw new Error('유저 정보를 가져오는중에 에러가 발생하였습니다.')
  }
}
